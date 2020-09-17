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

# c# Cache

### local Cache

- `private static Dictionary<string, Object> CustomerCacheDictionary = new Dictionary<string, Object>();`
- using `static`, the GC will not clean up
- using `private`, keep safe
- using `Dictionary` for `key, value`

---
