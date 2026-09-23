// ═══════════════════════════════════════════════════════════════
// sd_tap_to_know.js — TAP-TO-KNOW (local, offline)
// ═══════════════════════════════════════════════════════════════
// After a story renders, finds known character/cast names in the prose
// and makes them tappable. Tapping shows a small popover: who they are,
// their connection, and what they know about the powers. Reads SD_CAST
// (sd_cast_index.js). 100% local, no AI. window.SD_TAPKNOW.
//
// Safe by design:
//  - Only runs if SD_CAST is present.
//  - Never rewrites inside links, headings, or existing chips.
//  - First occurrence per name per story (avoids clutter).
//  - Popover is guarded; failure never breaks the story.
// ═══════════════════════════════════════════════════════════════
(function(){
  if (window.SD_TAPKNOW) return;
  var L = "A-Za-z\u00C0-\u024F";

  function names(){
    if (typeof SD_CAST === "undefined") return [];
    var list = [];
    // members (full + first name) and supporting cast (full + first name)
    function push(id, name){ if(name) list.push({id:id, name:name}); }
    for (var i=0;i<SD_CAST.members.length;i++){ push(SD_CAST.members[i].id, SD_CAST.members[i].name); }
    for (var j=0;j<SD_CAST.people.length;j++){ push(SD_CAST.people[j].id, SD_CAST.people[j].name); }
    // Build a match list: full names first (longest), then unique first names.
    var full=[], firsts={};
    for (var k=0;k<list.length;k++){
      full.push(list[k]);
      var fn=list[k].name.split(" ")[0];
      if(fn.length>=4 && !firsts[fn.toLowerCase()]) firsts[fn.toLowerCase()]={id:list[k].id, name:fn};
    }
    var arr=full.slice();
    for (var f in firsts){ if(firsts.hasOwnProperty(f)) arr.push(firsts[f]); }
    // longest first so "Zara Kovač" beats "Zara"
    arr.sort(function(a,b){ return b.name.length - a.name.length; });
    return arr;
  }

  function escRe(s){ return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  // Wrap first occurrence of each name (in text nodes only) with a tappable span.
  function annotate(container){
    if (typeof SD_CAST === "undefined" || !container) return;
    var list = names();
    if (!list.length) return;
    var seen = {};
    for (var i=0;i<list.length;i++){
      var entry=list[i];
      if (seen[entry.id]) continue;           // one chip per character per story
      if (wrapFirst(container, entry)) seen[entry.id]=true;
    }
  }

  // Find first matching text node not already inside a chip/link/heading.
  function wrapFirst(container, entry){
    var re = new RegExp("(^|[^"+L+"])("+escRe(entry.name)+")(?![" + L + "])");
    var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
    var node;
    while ((node = walker.nextNode())){
      var p = node.parentNode;
      if (!p) continue;
      var tag = (p.nodeName||"").toLowerCase();
      if (tag==="a" || tag==="button" || p.classList && p.classList.contains("sd-know")) continue;
      if (/^h[1-6]$/.test(tag)) continue;     // skip headings
      var m = re.exec(node.nodeValue);
      if (!m) continue;
      var idx = m.index + m[1].length;
      var before = node.nodeValue.slice(0, idx);
      var after  = node.nodeValue.slice(idx + entry.name.length);
      var span = document.createElement("span");
      span.className = "sd-know";
      span.setAttribute("data-cid", entry.id);
      span.textContent = entry.name;
      span.style.cssText = "border-bottom:1px dashed rgba(245,158,11,0.5);cursor:pointer;";
      var frag = document.createDocumentFragment();
      if (before) frag.appendChild(document.createTextNode(before));
      frag.appendChild(span);
      if (after) frag.appendChild(document.createTextNode(after));
      p.replaceChild(frag, node);
      return true;
    }
    return false;
  }

  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function popover(cid, anchorEl){
    var c = SD_CAST.find(cid);
    if (!c) return;
    closePopover();
    var color = c.color || "#f59e0b";
    var isMember = !c.circle;
    var sub = isMember ? (c.role + " \u00b7 Soul: " + c.soul) : (c.circleName + "'s circle \u00b7 " + (c.relationship||""));
    var knowsChip = c.knows ? '<div style="display:inline-block;font-size:0.62rem;color:'+color+';background:'+color+'18;border:1px solid '+color+'40;border-radius:100px;padding:2px 9px;margin-top:7px;">\u25c8 '+esc(c.knows)+'</div>' : '';
    var bio = c.bio ? '<p style="font-size:0.74rem;line-height:1.5;color:#c8c4bc;margin:9px 0 0;">'+esc(c.bio)+'</p>'
                    : (isMember ? '<p style="font-size:0.74rem;line-height:1.5;color:#c8c4bc;margin:9px 0 0;">One of the Five. Carries the '+esc(c.ability||"")+' gift.</p>' : '');
    var box = document.createElement("div");
    box.id = "sdKnowPop";
    box.style.cssText = "position:fixed;z-index:99999;max-width:300px;background:#16161a;border:1px solid "+color+"55;border-radius:14px;padding:14px 15px;box-shadow:0 12px 40px rgba(0,0,0,0.6);";
    box.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">'
      + '<div><div style="font-weight:700;color:'+color+';font-size:0.95rem;">'+esc(c.name)+'</div>'
      + '<div style="font-size:0.68rem;color:#8a8a96;margin-top:2px;">'+esc(sub)+'</div></div>'
      + '<button onclick="SD_TAPKNOW.close()" style="background:none;border:none;color:#8a8a96;font-size:1rem;cursor:pointer;line-height:1;">\u00d7</button></div>'
      + knowsChip + bio;
    document.body.appendChild(box);
    // position near the tapped name, kept on-screen
    var r = anchorEl.getBoundingClientRect();
    var bw = box.offsetWidth, bh = box.offsetHeight;
    var top = r.bottom + 8; if (top + bh > window.innerHeight - 10) top = Math.max(10, r.top - bh - 8);
    var left = r.left; if (left + bw > window.innerWidth - 10) left = window.innerWidth - bw - 10;
    if (left < 10) left = 10;
    box.style.top = top + "px"; box.style.left = left + "px";
    setTimeout(function(){ document.addEventListener("click", outside, true); }, 0);
  }
  function outside(e){ var b=document.getElementById("sdKnowPop"); if(b && !b.contains(e.target) && !(e.target.classList&&e.target.classList.contains("sd-know"))) closePopover(); }
  function closePopover(){ var b=document.getElementById("sdKnowPop"); if(b){ b.parentNode.removeChild(b); } document.removeEventListener("click", outside, true); }

  // Delegated click for any .sd-know chip
  document.addEventListener("click", function(e){
    var t=e.target;
    if (t && t.classList && t.classList.contains("sd-know")){
      e.stopPropagation();
      try{ popover(t.getAttribute("data-cid"), t); }catch(err){}
    }
  });

  window.SD_TAPKNOW = { annotate: annotate, close: closePopover };
})();
