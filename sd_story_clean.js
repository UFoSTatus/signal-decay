/* ═══════════════════════════════════════════════════════════════════
   sd_story_clean.js  —  window.SD_CLEAN
   Strips PRODUCTION / AUTHORING metadata from a story's markdown at
   RENDER time so readers see prose, not a spec sheet. Source .md files
   are never modified (the Created dates, canon notes, register tags are
   useful to the builders — they just shouldn't show to a reader).

   What it removes (ONLY in the header zone, before real prose begins):
     • YAML front-matter (--- ... ---)
     • italic note lines:        *Created: ...*  *Soul Name: ...*  *Register: ...*
     • bold "Key:" note lines:   **Layer:** ...   **Draft order:** ...
     • production blockquotes:   > **Created ...**  > CANON NOTES ...
     • the first horizontal rule that closes the header block
   What it KEEPS:
     • the H1 title and any H2/H3 subtitle or section heading
     • real epigraph blockquotes (quotes that are NOT production notes)
     • every line of actual story prose
   Also trims trailing production footers (*End of...*, *File size target:*,
   *Cross-references:*, *Word count:*).

   Ported 1:1 from the Python cleaner that was validated against all 117
   story files (116 clean, 1 benign no-op). Additive + defensive: if
   anything throws, callers fall back to the raw markdown.
   ═══════════════════════════════════════════════════════════════════ */
(function (global) {
  var META_KEYS = /(Created|Revised|Layer|Draft order|CANON NOTE|Word count|File size|Cross-references|Reads standalone|standalone)/i;

  function blockquoteIsMeta(block) { return META_KEYS.test(block); }

  function clean(md) {
    if (typeof md !== 'string' || !md) return md;
    try {
      md = md.replace(/\r\n/g, '\n');
      // 1) YAML front-matter
      md = md.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '');
      var lines = md.split('\n');
      var out = [];
      var i = 0, n = lines.length, inHeader = true;
      while (i < n) {
        var ln = lines[i];
        var s = ln.trim();
        if (inHeader) {
          if (/^#{1,3}\s+\S/.test(s)) { out.push(ln); i++; continue; }   // keep headings
          if (s === '') { i++; continue; }                               // skip blanks
          if (s === '---' || /^-{3,}$/.test(s)) {                        // drop closing rule
            i++;
            while (i < n && lines[i].trim() === '') i++;
            continue;
          }
          if (s.charAt(0) === '>') {                                     // blockquote
            var j = i, blk = [];
            while (j < n && (lines[j].trim().charAt(0) === '>' ||
                   (lines[j].trim() === '' && j + 1 < n && lines[j + 1].trim().charAt(0) === '>'))) {
              blk.push(lines[j]); j++;
            }
            if (blockquoteIsMeta(blk.join('\n'))) {                      // production note -> drop
              i = j;
              while (i < n && lines[i].trim() === '') i++;
              continue;
            } else {                                                     // real epigraph -> keep
              for (var b = 0; b < blk.length; b++) out.push(blk[b]);
              i = j; continue;
            }
          }
          if (/^\*[^*].*\*$/.test(s)) { i++; continue; }                 // italic-only meta line
          if (/^\*\*[^*]+:\*\*/.test(s)) { i++; continue; }              // bold "Key:" meta line
          inHeader = false; out.push(ln); i++; continue;                 // first real prose
        } else {
          out.push(ln); i++;
        }
      }
      var md2 = out.join('\n');
      md2 = md2.replace(/\n\*(End of[^\n*]*|File size target:[^\n*]*|Cross-references:[^\n*]*|Word count:[^\n*]*)\*\s*/g, '\n');
      md2 = md2.replace(/^\n+/, '');
      return md2;
    } catch (e) {
      return md; // never break the reader — fall back to raw
    }
  }

  global.SD_CLEAN = { clean: clean };
})(typeof window !== 'undefined' ? window : this);
