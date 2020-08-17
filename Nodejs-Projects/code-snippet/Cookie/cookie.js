// get cookie
req.cookie = {};
const cookieStr = req.headers.cookie || ''; //k1=v1;k2=v2;k3=v3;
cookieStr.split(';').forEach(item => {
    if (!item) return;
    const arr = item.split('=');
    const key = arr[0];
    const val = arr[1];
    req.cookie[key] = val
})
console.log(req.cookie);