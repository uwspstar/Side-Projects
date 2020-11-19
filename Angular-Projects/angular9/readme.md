---
marp: true
theme: default
header: 'Angular 文档'
footer: 'https://angular.cn/docs'
paginate: true
size: 16:9
---

# Angular 文档

- [Angular](https://angular.cn/guide/architecture)

---

![75% bg brightness:0.9](a.png)

---

- `npm install -g @angular/cli`
- `ng --version`
- `ng new todo`
- `cd todo`
- `ng serve --open` = `ng serve -o`

---

- `node -v`
- `sudo npm install -g @angular/cli@latest`
- `ng version`
- (use "git reset HEAD <file>..." to unstage)
- network 'proxy' config is set properly. See: 'npm help config'
- https://cli.angular.io/

---

### Trouble shoot

```js
$ npm install -g @angular/cli@next

npm ERR! code ECONNRESET
npm ERR! errno ECONNRESET
npm ERR! network request to https://registry.npmjs.org/@angular/cli/-/cli-9.0.0.tgz failed, reason: read ECONNRESET
npm ERR! network This is a problem related to network connectivity.
npm ERR! network In most cases you are behind a proxy or have bad network settings.
npm ERR! network
npm ERR! network If you are behind a proxy, please make sure that the
npm ERR! network 'proxy' config is set properly.  See: 'npm help config'

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\waxing\AppData\Roaming\npm-cache\_logs\2020-02-18T15_29_11_945Z-debug.log
Error
0 info it
```

- solution ( works for me)

```js
For those, who's system is not running behind the proxy and getting errors like "bad network connection", "connection timeout" or "configure proxy". they can do as follows: which works for me.
check whether the .npmrc file exists in your system (in C://Users/Admin)
If yes, then remove that file and restart your command prompt and run 2 commands as follows:
1.	"npm cache clear --force"
2.	"npm install -g @angular/cli"
```
