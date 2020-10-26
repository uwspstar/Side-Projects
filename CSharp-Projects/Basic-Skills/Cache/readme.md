---
marp: true
theme: default
header: 'Cache'
footer: 'by Xing'
paginate: true
size: 16:9
---

<!--
_backgroundColor: white
_color: black
-->

# Cache : browser -> DNS -> `Proxy` -> `Server`

- `browser` : client side cache
- `DNS` : CDN
- `Proxy` : reverse proxy cache
- `Server` :local cache, such as Memcache, redis

---

- ![75% bg brightness:0.9](cache1.png)

---

### Redis vs. Memcached

- https://aws.amazon.com/memcached/
- Redis and Memcached are the two most popular in-memory key-value data stores.
- Memcached is designed for simplicity while Redis offers a rich set of features that make it effective for a wide range of use cases.

---

### local Cache

- `private static Dictionary<string, Object> CustomerCacheDictionary = new Dictionary<string, Object>();`
- using `static`, the GC will not clean up
- using `private`, keep safe
- using `Dictionary` for `key, value`

---

- ![75% bg brightness:0.9](cache2.png)

---
