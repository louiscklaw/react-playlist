import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { ExpirationPlugin } from 'workbox-expiration'
import { registerRoute } from 'workbox-routing'
import { CacheFirst } from 'workbox-strategies'

const cacheName = 'images'
const matchCallback = ({ request }) => request.destination === 'image'
const maxAgeSeconds = 30 * 24 * 60 * 60
const maxEntries = 60

registerRoute(
  matchCallback,
  new CacheFirst({
    cacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries,
        maxAgeSeconds,
      }),
    ],
  }),
)
