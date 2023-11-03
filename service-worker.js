// https://developer.chrome.com/docs/workbox/modules/workbox-sw/#using-workbox-sw-via-cdn
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js')

const { clientsClaim } = workbox.core
clientsClaim()

self.addEventListener('install', (/* event */) => {
  self.skipWaiting()
})
