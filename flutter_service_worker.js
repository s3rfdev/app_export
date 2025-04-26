'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a139e09295e03f89322687aff2f67d6e",
"version.json": "6f92e464306872ce769901081487216b",
"index.html": "3de2490d618b7f13d94ffcd4bebc0606",
"/": "3de2490d618b7f13d94ffcd4bebc0606",
"main.dart.js": "2db0b5e25031dd525192475eb3de1ffb",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d17e1ea0b43aca5392013ecf3978620e",
"assets/AssetManifest.json": "b193fe34d072fbd48c2749f05211498b",
"assets/NOTICES": "0d23b420e229d17aa28bcb9b217793af",
"assets/FontManifest.json": "ac3f70900a17dc2eb8830a3e27c653c3",
"assets/AssetManifest.bin.json": "a90baae475cb79eeb8b906480ea0de9e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "664b6be36a1a5046ab09f7fe9a8eb953",
"assets/fonts/MaterialIcons-Regular.otf": "02b3366b4d789b4fa315fd8553fc68db",
"assets/assets/world.png": "33c39a5b435529058fd65e0bc107ba01",
"assets/assets/x2.png": "ad2c73c0c29c4b8f954f7e92e75c3e25",
"assets/assets/image%2520(1).png~": "00c004cfccc161567f9208445c1e4212",
"assets/assets/s1.png~": "78f0e2e5d55c8782ab932e363959239b",
"assets/assets/pngegg%2520(24).png": "28c96ca7b104a4868f721c4b35d10f64",
"assets/assets/buy.png": "f1a80904959b02b49a5db5a5203aa304",
"assets/assets/pngegg%2520(32).png": "970108ad08d9bb7f048448954cfb66d8",
"assets/assets/tel.png": "63c787bb3d1fb864f318d75888de412e",
"assets/assets/d6ad548f-5ea6-4a1f-aeb3-f0980a824d1f.svg": "9309b6a79b5a5ece06eadabc1f65cfde",
"assets/assets/imgbin_hypertension-risk-factor-health-community-stroke-png.png": "25319797da9fdd265e2e620bdaeab077",
"assets/assets/streamline-plump-solid--48x48-PNG.zip": "ba15e4488d2483faa08ba6282fff3448",
"assets/assets/%25E2%2580%2594Pngtree%25E2%2580%2594vector%2520star%2520icon_3989932%2520(1).png": "2af46eb890a48b262783724af445939a",
"assets/assets/settings.png": "fd4d993332c9208bcbfa08850fef44d4",
"assets/assets/pngegg%2520(33).png": "507ffb5a5ec7e8388c899dbba4e4dfb4",
"assets/assets/clipboard.png": "d8693ac13c67887b66ce5194359a59d6",
"assets/assets/pngegg%2520(25).png": "16415f43d2dc09241ee7a77d69f7ec4d",
"assets/assets/twitter-x-logo-blue-outline-20847.png": "16c01bc41ae63a72936efb8fc00175bd",
"assets/assets/link.png": "20f2364258cb08731fbb12e965ad4eef",
"assets/assets/log-in.png": "b38680b10d1e9195213196f326a8b7d8",
"assets/assets/x.png": "8e6732ecc3150358c021ec26bf593046",
"assets/assets/%25E2%2580%2594Pngtree%25E2%2580%2594trading%2520buy%2520and%2520sell%2520arrow_9036895.png": "a529b691cf8582f5b0c0f14f0e74c9a2",
"assets/assets/pngegg%2520(38).png": "c04fd67157e79832d858c29bb11aad37",
"assets/assets/cc4.png": "7fc9d8b8bfa9496b4664afcc3afb151e",
"assets/assets/f94b49bd739c4c32d33a67c467509784.png": "00e0b0651898a972ad989e12747f44d5",
"assets/assets/settings%2520(1).svg": "ab8aaaf25933654e3a9428650168e757",
"assets/assets/promo1.png": "a2191afbf6ed20aac534831bcb882bd2",
"assets/assets/pngegg%2520(22).png": "233197659b149ebaad7646d010429ac2",
"assets/assets/pngegg%2520(34).png": "4f87babd4a6d203769b6df59fe3c59fa",
"assets/assets/website-light-blue-round-circle-24775.png": "14aa41f9d400e0fd2f24e312550b99cb",
"assets/assets/wbsite.png": "4dd8a26ee48f7ec469b48f2ad864f227",
"assets/assets/pngegg%2520(35).png": "0d1b2b9057a1f9d6786100095219703c",
"assets/assets/twx.png": "2c47c09b2ad66016d534b789fecb4c7a",
"assets/assets/resize2.png": "84ab0a1d9a69a60768707312086af0eb",
"assets/assets/pngegg%2520(23).png": "6b782ed7844d3998342b477e5ea0d2a2",
"assets/assets/twiter.png": "9a77b237f7346644da44f41f27342aab",
"assets/assets/world-wide-web.png": "96f095d4d7fb52c459cb94b7286351d0",
"assets/assets/medical-notes-symbol-of-a-list-paper-on-a-clipboard.png": "fdba1af33fde6b2da7838637c30a9751",
"assets/assets/s1.png": "b1cd19d1a53a2e2741cdadeeca0ac8b3",
"assets/assets/s3.png": "05d9e3425f24b6b919c88fa86bdd0d65",
"assets/assets/target.png": "fd2181b6bbfa7d6d5fb54fa104486454",
"assets/assets/pngegg%2520(39).png": "aec87cd01cd3bf86750d67335089d4bf",
"assets/assets/%25E2%2580%2594Pngtree%25E2%2580%2594chip%2520ai%2520human%2520intelligence%2520technology_9004996.png": "3589e92e517d8b13b29185b792276f7a",
"assets/assets/list.png": "ad35de355ba8c0cefa6181cdc1f51166",
"assets/assets/s2.png": "c0eea93d4bbefb5f908b7fc7ddcec03e",
"assets/assets/list_1950630.png": "12c0498fa37d05e8d7bb92d327ac1e93",
"assets/assets/333.html": "d0fc8523b95b36562b4de616328370f2",
"assets/assets/X--Streamline-Simple-Icons.png": "ed221332dc4c6c60a3daeec15a014f8c",
"assets/assets/62e427eb50bc9aa12a8d77bf806cd704.png": "9683df20350e8b462f858b17ca791583",
"assets/assets/pngegg%2520(41).png": "6e4d0a96d7356aee31504ff27b48dc4e",
"assets/assets/16760f35-72ff-4966-ab77-bc1baad7f357.svg": "9d1b8823c0a72ac3b604ef3877f84fad",
"assets/assets/web-12677.png": "66b5c4491260cfcb82210c0ff302a0ab",
"assets/assets/log43.png": "96e0f357567cb58de4e965e35c05be0c",
"assets/assets/pngegg%2520(36).png": "8c73cfa984d02f2d989df6dc76f6f5a0",
"assets/assets/web3.png": "e78d67908fbffe164b392ef68b8f4daf",
"assets/assets/test.html": "d4760202c3955c317a0b9b578a6949db",
"assets/assets/Clipboard-task-list-rtl-01.png": "7e0615964d807011fc14044f4bdd53d6",
"assets/assets/star.png~": "3fad821d76ee0620c33df65a1e86e69a",
"assets/assets/logo.png": "82d276e43bc3cf8d31279e5fd8a20d6d",
"assets/assets/dexpng.png": "e05ca17622081bb82489e67865c885b6",
"assets/assets/chart_sample.jpg": "2bd7983eacb21dc7c7f14e5f826a1cce",
"assets/assets/website-logo-vector-1.png": "f249109310343c0bdcf13b241a4895f6",
"assets/assets/pngegg%2520(37).png": "a25814108ccac6e193159f0c6cffe8e6",
"assets/assets/pngegg%2520(40).png": "e67699c0d8fced9758f13b7a0a45a749",
"assets/assets/profile.png": "57da33c3b02d28486f2de62a4ebc8e82",
"assets/assets/dextools-seeklogo.png": "78e6a3bfb22d73fcc331f386ba9e7b78",
"assets/assets/d83c52df-7529-4ac3-b198-c6ccf9026bb0.svg": "075aae28f6ec2d7c849296198e0916a7",
"assets/assets/pngegg%2520(30).png": "28a20f09f0b00c3540a5c5b7ff657b48",
"assets/assets/pngegg%2520(26).png": "c87087dad6ce267bc20d8b433b57851c",
"assets/assets/Ask-AI-button-Image.png": "d4e516f63461d892ac86c30e3cc9bf17",
"assets/assets/star.png": "715dd57d225428cab1c4cdd4d6c88393",
"assets/assets/checklist-on-clipboard.png": "b80a06a01a9d53b06e994ef093b80bba",
"assets/assets/conectores_microsoft_advertising.png": "670da3971405db3e3d0ace6cd54ee364",
"assets/assets/sell.png": "e787b6b316be29fa9e194e23b2f0876a",
"assets/assets/Telegram-Logo--Streamline-Plump.png": "6518a9c479f9ff20c8506e3cdace306b",
"assets/assets/log32.png": "364be55d6fa18d5fc19d72e68be90f0a",
"assets/assets/solana.svg": "b62131a0d7668b6c550ddf5ddf61d1aa",
"assets/assets/Dropwizard.png": "f549f1e9885060bd53b1a82daebeedc3",
"assets/assets/image.png": "a0ee4bee538eb15d7046dbaa04fad19d",
"assets/assets/image%2520(1).png": "c2d94c6b888b7ec6e9843adc95f7bcf3",
"assets/assets/site.png": "ca04d9ae4296fe372662b6e4c2bbbaa9",
"assets/assets/bbii.png": "7ba824ec31927278fe5fb5d9c7145a74",
"assets/assets/pngegg%2520(27).png": "e9ef75f76c53e3bda72da5fa4a5d3de1",
"assets/assets/coins.png": "295bc1613aca58da0da9ae0e9c2961bb",
"assets/assets/s2.png~": "925f5ca66c84e13e3d4e546ae957b5d3",
"assets/assets/pngegg%2520(31).png": "cb6c619d653b90892e1866e6f728d5f3",
"assets/assets/advertising-4-128.png": "b6b24fb5b62ebb768453f2f11bd3ddf0",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
