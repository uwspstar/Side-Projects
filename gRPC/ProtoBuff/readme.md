---
marp: true
theme: default
header: 'Protocol Buffer Projects'
footer: 'https://developers.google.com/protocol-buffers/'
paginate: true
size: 16:9
---

# Protocol Buffer

- https://developers.google.com/protocol-buffers/
- force to use schema

---

### Protocol Buffer Basics: C#

- https://developers.google.com/protocol-buffers/docs/csharptutorial

### Protocol Buffers v3.13.0 Releases

- https://github.com/protocolbuffers/protobuf/releases
- `protoc-3.13.0-osx-x86_64/bin/protoc --js_out=import_style=commonjs,binary:. employees.proto`
- mac allow anyway

```js
(base) xings-MBP:demo xingwang$ /Users/xingwang/Side-Projects/ProtoBuff/protoc-3.13.0-osx-x86_64/bin/protoc --js_out=import_style=commonjs,binary:. employees.proto
```

###

- check file detail : `ls -lh`
