'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e0791e1d68ed84ff02b3c8561b62c655",
".git/config": "dbad3044daa740f0e4ffcbb8e8c3f913",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e4f6bf9856eccd814efc79ba95252d2d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "82cea73d10041da96787a74729efa192",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5b776fb2e85e2e5435a5a32a7f4c288b",
".git/logs/refs/heads/master": "5b776fb2e85e2e5435a5a32a7f4c288b",
".git/logs/refs/remotes/origin/master": "786c1f821f9f83f4a23883fab64a91bb",
".git/objects/09/a82d704c7ded3d119c9a0bf9a29a92c427a356": "596f0419472b6b1dbc24d428445b87b6",
".git/objects/0b/7b8899949e205e58f3b4b437abdd7ea246cb48": "a08e6f351fe4d5486bb987f0957c876f",
".git/objects/16/0d9b2024735e3a8d839a02f23af5b7d36bfcc4": "d8ce48e2df3d9d71c1f99fca9ac14e71",
".git/objects/18/d5cc0fe407eadc1144687f0ff36e2b5a53c8f4": "7c8569106d95f2d6dd84a39e7807d83e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/25/b34d6e0d2064b6014eccd7692c25c684a20a60": "1dfd56646aa9c5a39abd84184bd1062d",
".git/objects/33/8a3798719f9ca73a36822da86587689d27a2cd": "60dae09daf10497c79862f8aa7d08faf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/851a9e3d4ffca76bed93264b176688b91d3d4e": "ee47f10b691bab2abd291dd58b167fc5",
".git/objects/53/a294a5c0ec19088fc994327e25c60ec93a1a11": "4a03d1450b93011c977279b025a5dc38",
".git/objects/65/861b91fe7af65372dcdeed4c8d71a8301a3760": "934d64c543d9c19ecb51fa44d35a1d4b",
".git/objects/65/a4ddda69b2b9c2ad6dcf7467f2002dd31aab26": "60cec8398af8a9cc39c4508808424908",
".git/objects/6a/6007a9b71fdce8f85e6aeebbe98175b8be125f": "65c00e9a255e4d20f991a3b3c82e0e76",
".git/objects/6f/e7342dfeb13c938f35d9fdd35802d6a80de0fb": "a6a5b761de53049d1b700228699ac26a",
".git/objects/76/3c8c699aa623dec01247718b90af4ef93fcb86": "aac8ae14920b69056911dcd800b994f9",
".git/objects/77/757abc8481c7e0ff04bb55d2588623197b8eb1": "e45691415d80663541accd18287ef281",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/8cd33dc4a6521ab7d40c83c2350ffe2edebf63": "89b5b2c0d4fa8ba67d3a19fdb614f487",
".git/objects/82/0947e605019b717b300b3b2c2930e5dcb36144": "9172f3b77b288a663c1234786e31b234",
".git/objects/85/356e172a20daf9136cd77934ad4e04a6109780": "87041215b2f97fc62bec89590bb4419d",
".git/objects/86/729946fe75a5baa491db9b1a6b6a62098e1506": "23a7ce42420a8af4efeb070624937a00",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/9a/401da52cd5c046d78091e7bb0124e666f5fe79": "19c3af9092397f68e3c5a0183ea506c9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/28f1c9c66b23f543d1d50f1c41d318790fce12": "3642f2c6249dc813aef465d6e026d56e",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b6/51234ee58e2438c63e26d36358665324db53fd": "c83adf22db7cff20ee188e7fe7002c5c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/6090d3e08db9f5106a4c66dc475fe5c18cd964": "bd04029bc69208ff75ec61279441eef1",
".git/objects/bd/f548391d3028b6bcd40ec1bcb6f37e7a0b573e": "b4efc1e88b5f4edf9d6681dff5031665",
".git/objects/ca/a0b1241dfe0a733f9ce254f8f3cd797d4afeda": "c582c93500b7eee205cdcd1291007796",
".git/objects/d1/23045af6fb253b4a0e228b83579839622fe523": "0f1bdb12d9b7516eaae622cb5a5f64ba",
".git/objects/d4/3cb3a960e06b443cd8325042d36bb13625e59a": "429a658378121d344d4ef19af2b41a4f",
".git/objects/da/c0c76aba1b6db31de5f9c517477b09bc2b57a0": "4cf431ec4bcfbef735a9a7a8aa8ff975",
".git/objects/db/415507ccf62711dcacee158384da5270baefed": "20a7c4d4a5422cf0f72f2c049d8009b4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/5bcd78639e5ddbcc9c0e0a85a8e86209aee0cb": "041968fa89155ac68d7378b2fc0730a9",
".git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
".git/objects/fd/a558404a04f6055a1edb4bd0eee86aaa9e40e5": "8ec97e58cdce0263a07e7f8c78bc9411",
".git/ORIG_HEAD": "0cad34166ae88df27600cda33b4f20c1",
".git/refs/heads/master": "0cad34166ae88df27600cda33b4f20c1",
".git/refs/remotes/origin/master": "0cad34166ae88df27600cda33b4f20c1",
"assets/AssetManifest.json": "6bd15b3784eaa00a9caf13686f2a8c4b",
"assets/assets/backgroundimage.png": "763efd77a9833b240735fd9742d0e7c4",
"assets/assets/copyright.png": "170ea7519eaa9557454a7bcf29be04c6",
"assets/assets/destiny.png": "6e7b0ee5b784bf51894ef11cef2c1b22",
"assets/assets/flower.jpg": "bc9938c12e313448529eb25f8f9314c3",
"assets/assets/github.png": "b6ec19ceacb23390aa66d2f101d0ddf6",
"assets/assets/gmail.png": "2c1a7560c88ea83e6b2593cd07af8ad8",
"assets/assets/instagram.png": "8290266a5fb402a34b96f890bbdb2d60",
"assets/assets/internet.png": "d3cd22d192e2e1f9278c51b895184b30",
"assets/assets/iot.png": "8b7f7ac9ffc47e619a23e0787f667890",
"assets/assets/math.png": "ff038d5aaa43cfb836a00bd73ef1175c",
"assets/assets/mathematics.png": "20b62f5e42ae9d47ae33ca4e168638e4",
"assets/assets/psycho.png": "b29d89377ad05016f6dc309cd6208f9e",
"assets/assets/robot.png": "1fbf068c791478c755a2bdbbdfff8803",
"assets/assets/tweet.png": "59d23a3de2967c46be58932d5e765efb",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/water.jpeg": "f2dcb89eacad0521df41680dc6c9be5f",
"assets/assets/waterdrop.jpg": "adde486644f0dc19593a93a6f19705dd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "af2155a8eaa0c93b3392579ab0a4b463",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "7e09bd2942676571dc2ff0496e46020b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "5136e06c67d390b478b12d29a329f4f8",
"/": "5136e06c67d390b478b12d29a329f4f8",
"main.dart.js": "f072c978e44caaf02f68b81fbb928c6f",
"manifest.json": "3d9b369265eb00a2b9f833c932327313",
"version.json": "9a4dddba415c9ee5265cd5f5d9963a6a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
