// Signal Decay — Service Worker (Offline Support)
// Cache-first for HTML apps, network-first for other assets

const CACHE_NAME = 'signal-decay-v4';

// Core HTML apps to pre-cache
const HTML_APPS = [
  './index.html',
  './investigation_board.html',
  './immersive_reader.html',
  './universe_graph.html',
  './character_chat.html',
  './lore_oracle.html',
  './story_generator.html'
];

// Engine files — pre-cache for offline support
const ENGINE_FILES = [
  './character_engines.js',
  './ufology_knowledge_matrix.js',
  './oracle_knowledge_engine.js',
  './frequency_power_engine.js',
  './supporting_cast_engine.js',
  './social_media_engine.js',
  './daily_life_engine.js'
];

// ═══ INSTALL: Pre-cache all HTML apps ═══
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching HTML apps');
      return cache.addAll([...HTML_APPS, ...ENGINE_FILES]);
    })
  );
  self.skipWaiting();
});

// ═══ ACTIVATE: Clean old caches ═══
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// ═══ FETCH: Cache-first for HTML, network-first for everything else ═══
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Only handle GET requests
  if (request.method !== 'GET') return;

  // Determine if this is an HTML file request
  const url = new URL(request.url);
  const isHTML = request.destination === 'document' ||
    url.pathname.endsWith('.html') ||
    url.pathname === '/' ||
    url.pathname.endsWith('/');

  if (isHTML) {
    // CACHE-FIRST for HTML files (offline support)
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          // Serve from cache immediately, update in background
          fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, networkResponse);
              });
            }
          }).catch(() => {});
          return cachedResponse;
        }
        // Not in cache — fetch from network and cache it
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, clone);
            });
          }
          return networkResponse;
        }).catch(() => {
          // Offline fallback — serve index.html
          return caches.match('./index.html');
        });
      })
    );
  } else {
    // NETWORK-FIRST for everything else (CSS, JS, images, fonts, APIs)
    event.respondWith(
      fetch(request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, clone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Network failed — try cache
        return caches.match(request);
      })
    );
  }
});
