"use strict";var precacheConfig=[["/dateapp/index.html","bca3c74e7e6f16afbfc3bade2ec20639"],["/dateapp/static/css/main.67b16ddb.css","7105ceadd3e61c41b71c19bb2322ff9f"],["/dateapp/static/js/main.6ff0944f.js","2e79be482104e39851ecb4d01165f81f"],["/dateapp/static/media/add.3bf83574.svg","3bf8357450c9d08fd7af84501a7e6e97"],["/dateapp/static/media/add_48.f73ede8f.svg","f73ede8f45f26a6bbfc2a8fb9e14b36a"],["/dateapp/static/media/arrow_16.90124333.svg","90124333943d56727ee6399628c56891"],["/dateapp/static/media/art_goodbye_128@2x.87d392e6.png","87d392e6e9177f8126aadcec92e49ff0"],["/dateapp/static/media/art_live_96@2x.ce9882e9.png","ce9882e91703af61550f9990b40458db"],["/dateapp/static/media/art_onboarding.7843c643.png","7843c64314893bc9e442bb1f9c9f06bb"],["/dateapp/static/media/button_edit_16.059236e3.svg","059236e3a8ab3889232332f6b8f5fe47"],["/dateapp/static/media/close_24.51cdebe0.svg","51cdebe0667980ff2d1571a5b9763bc3"],["/dateapp/static/media/delete_photo.b0456da0.svg","b0456da0f96fd2760e52d8d0635acfdd"],["/dateapp/static/media/gift_16.ee6bdeab.svg","ee6bdeabc69514ddc5f1764dda4d5f30"],["/dateapp/static/media/ic_close_24_grey.77bfc038.svg","77bfc03810716fd94031512469bf8ecf"],["/dateapp/static/media/ic_liked.d515a100.svg","d515a100023a6a7766acf94a5d8c0032"],["/dateapp/static/media/ic_profile_education.68ed5871.svg","68ed58717700ac129b8f781bb6721dea"],["/dateapp/static/media/ic_profile_geo.f809cb3b.svg","f809cb3b5d463606fde8c5e738326e19"],["/dateapp/static/media/ic_profile_job.65a5d87e.svg","65a5d87ec2b19ebbc0c608adcb7c10af"],["/dateapp/static/media/ic_profile_message.e7690108.svg","e7690108885e514a40b5483222a3b7ff"],["/dateapp/static/media/like_grey_24.db544546.svg","db544546182c48a86fd2955ddf5d388c"],["/dateapp/static/media/liked_24.d458e0dc.svg","d458e0dc067cfcb5373133e5160542c3"],["/dateapp/static/media/match_like.35f11774.svg","35f117746c82ff5a730793ae66c14e69"],["/dateapp/static/media/premium_likes_40.c57f1dcb.svg","c57f1dcb77169b611ae61a58810f4582"],["/dateapp/static/media/profile_share.ddc38c07.svg","ddc38c07231140e80084bc03e877bb47"],["/dateapp/static/media/profile_suggest.9f292359.svg","9f292359a268955a5e928c1033b4118d"],["/dateapp/static/media/promo_add_24.0e21cce7.svg","0e21cce7f46824d43cb44d88e5db8b0e"],["/dateapp/static/media/settings_account_40.c7a71d98.svg","c7a71d98381322c01f035fdeebc419ef"],["/dateapp/static/media/settings_admin_40.06b5bf15.svg","06b5bf154b4643a5975d6e6c94c80d0f"],["/dateapp/static/media/settings_balance_40.159b2d9d.svg","159b2d9d0215bdbfefe28d42ed9aefe6"],["/dateapp/static/media/settings_community_40.3cfda508.svg","3cfda508bfc744d545d1990326e68ac7"],["/dateapp/static/media/settings_feedback_40.c067cd18.svg","c067cd188006d23b941b4dc44ad11f9c"],["/dateapp/static/media/settings_filter_40.58f280d5.svg","58f280d5882fc5544816d54d4c811b34"],["/dateapp/static/media/settings_notifications_40.fbd6251c.svg","fbd6251cfa86ad7c369247bc010510b6"],["/dateapp/static/media/settings_share_40.67515622.svg","675156226b0239f83c971a88354c43e2"],["/dateapp/static/media/settings_suggest_40.68e37bfd.svg","68e37bfda53105a2227853e527f5ef7c"],["/dateapp/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/dateapp/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/dateapp/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/dateapp/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/dateapp/static/media/superlike_24.ae26cc47.svg","ae26cc479d08bff6c48a83bbacebf5af"],["/dateapp/static/media/toolbar_photo_24.823848ba.svg","823848ba88c3609d13a33f85c0c60628"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var d=new URL(e);return c&&d.pathname.match(c)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),d=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var d="/dateapp/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});