### why function foo() {//code}() is not IIFE
- start with function keywords is declaration
- make is work !function foo() {//code}()

### Object.is() vs "===" vs "=="
- "==" convert type before compare, so, it is only compare value
- "===" different type return false
- Object.is() is base on "===", to make sure NaN, -0 and +0 are 
NOT equal
-  Object.is(NaN, NaN) will return true

### common.js vs ES6
- common.js output the copy of value
- ES6 output a reference
- common.js is runtime load
- ES6 output when it is compiler
- common.js single output, ES6 multiple output
- common.js is dynamic, so it can be using inside condition
- ES6 Module is static, only use at top
- common.js , "this" is current module
- ES6, "this" is undefined

### web cache follow the priority
- Memory Cache
- Service Worker Cache
- HTTP Cache
- Push Cache
- usually we use "expires" on "Response Headers", not we use both "Cache-Control" and "expires"
- we also use "Last-Modified", it is a timestamp, check it, to decide to use "304" readn cache , or reload new data