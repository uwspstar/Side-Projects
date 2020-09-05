### Logging QPS

- access log
- self log (event, err log)
- nodejs file
- nodejs stream
- \*\*\* log function and usage
- \*\*\* log separation, log content separation. analyze
- log save to file, not save to mySql, not save to redis

### big size file

- read
- write

### IO operation bottleneck vs CPU

- IO : network IO and File IO
- IO ( slow ) vs CPU read write (fast)
- how to improve the IO performance based on limit hardware resource

### stream

- source
- dest
- process.stdin.pipe(process.stdout)

```
let postData = '';
// IO stream data
req.on('data', chunk => {
    postData += chunk.toString();
})

req.on('end', () => {
    if (!postData) {
        resolve({});
        return;
    }
    resolve(JSON.parse(postData));
})
```
- req and res has stream characters
```
if (req.method === 'POST') {
    req.pipe(res)
}
```
