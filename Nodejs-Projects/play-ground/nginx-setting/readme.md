- windows : http://nginx.org/en/download.html
- Mac : brew install nginx
- Windows : C:\nginx\conf\nginx.conf
- Mac: /usr/local/etc/nginx/nginx.conf
- test : run \$ nginx -t
- start : nginx;
- restart : nginx-s reload
- stop : nginx -s stop
```
To have launchd start nginx now and restart at login:
  brew services start nginx
Or, if you don't want/need a background service you can just run:
  nginx
```
### Mac: /usr/local/etc/nginx/nginx.conf
- sudo vi /usr/local/etc/nginx/nginx.conf