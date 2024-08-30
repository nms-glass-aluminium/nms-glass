'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d3708c5cc953ae762199cc807dc4086e",
".git/config": "bedbaabc27032cfff9d4abdd72055ae2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dc216404ff9fa9cd1446fad8353a7e0e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8bb05e0315d26914cfd3d99b7867f858",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3d2f005876518b3c5eb0578fd17715bb",
".git/logs/refs/heads/main": "3d2f005876518b3c5eb0578fd17715bb",
".git/logs/refs/remotes/origin/main": "69dece8d64c6168d2392eb9be59d2606",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/e847d22b6dbcf33f86b0e45bbafe05848887e0": "bfdca1ec3c6baa180e506d720700f534",
".git/objects/24/4a05564dc5da22fca4ca5b92d612358c4e0168": "a4b4d47d7d0858536574eebf0b4ad86b",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/1f69d8e60bf116a1d81dab06af58a0613a04a6": "bd9059fdd91bb0c293041bce78111342",
".git/objects/2c/8d560fde26b0893ed8cc5a0d1ea68f9ea4741c": "382ac41d52a70774395f2bcf4efbe8d9",
".git/objects/42/da37448b87841ed191a53ae3dbbef0e6e3eae3": "dc8b1bcb4950d17996e058c5d33ed453",
".git/objects/45/d2aa7ccea143e6463feea34e45e3bbde4107a5": "795e30864a107929c854b6c01789ae35",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/a0481ca18ec66c9763371f8ae93155e4048fef": "483dc6d28aa6bb6528f3a0a5f8495554",
".git/objects/5d/abcb63ab27fc0da59d4131bcf433265675d2fe": "e3edc9a3aa61bbd9761a9d95cc00ea0b",
".git/objects/5e/d1b875d465ac6ad308fca9e522b766cf548a61": "7bd30e65671f045b702dc82fb6a4946d",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6a/8f3e76717150a2c142e49df4be6ccd21a80f71": "1a35193794bbf610e5f72acc3ccb6875",
".git/objects/6c/84aa0550f299ff0d8e6c2ad50b8fc74e5cb796": "3dab76b8e8c640db5208cc4ab91415be",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/79/3c9ca9a6e9465d2b69ead3c45d9fa20ce621d8": "49b4990ed8bbb49d5049f983e5e74bfe",
".git/objects/7a/5947b8703ca40dd9b7e640e9a83fe480586b2f": "1c46b26cec84438e6fc388959c239942",
".git/objects/84/dc64ba4848e5d67dfd0789e9dc0ba7ae50862e": "7d44fcbf7a098e1b58e188d6330d8df1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/a0a639bba79aaa937654fcad10749741f4b675": "e5908f1de5f778f21d5b67aaf754918b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9c/2d0bf3caba775b23597a0b50b220e6335f3982": "f4d6c8324aa2258bb9cff0d0f89d26e6",
".git/objects/ac/4f74b1abf58fa8b23989faa87df57c4bcc2771": "075aaa27f48cb7817bfdeb3391dbf060",
".git/objects/ae/33855b3c2017a10bb87a720fe2cebe3ace5e01": "4bf2e1c0324f5ae06830845cdd524b68",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/1a577558d92ba959975f5784604d1a2b62ee89": "e5ab306a04bc47a7f565679545656d6a",
".git/objects/bf/82d884152be59be0c800e6f89d07ff84942b2b": "6c417b4eda83b8b031b09dd75292e713",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ce/46e479032c369f33afd78a1c36e93571210ff6": "402413695680326baf0b3449a2175ed9",
".git/objects/ce/7df6e62377c198cfbeed72362409243f39b9d7": "6dbeb9447d8bebe552c871549ad686b9",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/77e8e8a46b307184054ee83335b92f9b865dbd": "400beae798ec789557b00a8dc5b1b374",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/72724791a39cfabade2f74877a97634a29af48": "ab61ccbe0513a88e424dc58021f4b440",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/f4dd53796c954de984dc59d3fa76275f3b4cd3": "f44ebb807035a0ba81c588715978dfb7",
".git/objects/e1/4243a0224238ba4cd88b0f14ebf64ad2ec179f": "9ffb73c62a1c2e81a9d7df369f3e6eec",
".git/objects/ea/a996c5c58f960585e033402b785ec56dbcf54d": "c0bc5c2214a632446b0e743b746a28e8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/2be38eff53e993c9fd762e2d3e9c2bc6c29233": "358ba36bc6d8182589cdeb45bd813a2e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/b835e5e2087ebcfae7b6997b30903bcc704fa2": "c87d898bc53efca503ac4026730ead63",
".git/objects/f6/13e3b79ab33b33a5a8277393b7ad55220cb5b5": "705e3ba023f73a64158de5c0c2a224e9",
".git/objects/f7/1ce16bf3bdf5732eebad4b6681af442e1b9a14": "b8b66fd23d4cf870fe8c3e4709744ea5",
".git/objects/f7/b2416e2a7ec7f8b71334c3ea7f260088bbb2cf": "8312d6ef786eb417b23f1a8eee05bc79",
".git/objects/fd/ac2fcf285242f686465593fca94b2049dd505e": "addbf8e63bc12b5c692db94c7fdc338d",
".git/refs/heads/main": "29ff98a19bc3e0dd0058d99abf4d1a26",
".git/refs/remotes/origin/main": "29ff98a19bc3e0dd0058d99abf4d1a26",
"assets/AssetManifest.bin": "8d83501b089a24a77408a10e7a1cfa87",
"assets/AssetManifest.bin.json": "bd528782248f9d072f12b86a620f4b24",
"assets/AssetManifest.json": "19d64a6cbc5b7a1f2caa218fa32d0bf8",
"assets/assets/images/logo.jpg": "a4ba66bb3142ce68a8c81f6b1e98fa97",
"assets/assets/images/logo.png": "825df6eab9642fdd20eb2cbceff05014",
"assets/assets/images/logo1.png": "2645da7bc6611c454a1e256f2f7d10af",
"assets/assets/images/logoo.png": "cd0506e6d058047132ed6b484b0f48e8",
"assets/assets/images/main_home.jpg": "a4b6ba3f1b115867b05318e94eab0320",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "30295eae0ee55827294aae953e375bc1",
"assets/NOTICES": "3223d21939d2bd60c7e8aab13714005e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "dde0b4008ab85d71fac0a3cc1d088249",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "9e85b03f851cd610c39dff7d8764f512",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "84a80d59b722612e8c0340ad1b7b9cf5",
"/": "84a80d59b722612e8c0340ad1b7b9cf5",
"main.dart.js": "8845078ab0831ce91e8f9522763b39d9",
"manifest.json": "254f3e85e890162368f80c0d65f34134",
"version.json": "df5b5ffd447b36aaa3e8b52cc834fabe"};
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
