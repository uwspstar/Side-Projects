const express = require('express');
const axios = require('axios');

let app = express();

app.get('/', (req, res) => {
    res.send('apiServer')
})
let cookie_value = 'xq_a_token=636e3a77b735ce64db9da253b75cbf49b2518316; xqat=636e3a77b735ce64db9da253b75cbf49b2518316; xq_r_token=91c25a6a9038fa2532dd45b2dd9b573a35e28cfd; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTYwMjY0MzAyMCwiY3RtIjoxNjAxOTk2NTg5NTQ3LCJjaWQiOiJkOWQwbjRBWnVwIn0.bIIbCtb78u51pynnZFsT3LTe6ZiYnSpMcZ-8AAgn71Y4e_3OvaFMGpk4yYkNR4YCL_G-dtuwE1v1qd7qWApVdynwK1m75kFclaKBHUEl9-1yLYAa4cmgUzLaJhS3p2gO0MrkjXGPv1GQfIMrvPddzzMMeqcSDyNl08X11BkU2WgT__bQBpXllNfx_g_VmZ4Doia1CdZuopzDasLGmfi2LpYl6M4N7gEgsCBhbAMqolY3AJSuDGIR9ZF8FvRr5ENwjEBAvU1Yaw9-FVfp4tVwe3__YEu63gx6UO9jtEdVfzktmHXqurcfxyTv72qOsq5p1KHeOLoIAmQBbhVBeW0fMA; u=451601996597818; device_id=24700f9f1986800ab4fcc880530dd0ed; Hm_lvt_1db88642e346389874251b5a1eded6e3=1601996601,1601996620; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1601996620';

app.get('/api/index', async (req, res) => {
    let httpUrl = 'Request URL: https://stock.xueqiu.com/v5/stock/realtime/quotec.json?symbol=SH000001,SZ399001,SZ399006,SH000688&_=1601999690224';
    let options = {
        withCredentials: true,
        Authorization: `Bearer ${cookie_value}`,
        headers: {
            'Accept-Language': 'en-US,en;q=0.9',
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive',
            'Cookie': cookie_value,
            'Host': 'stock.xueqiu.com',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36'
        }
    }
    let result;
    try {
        result = await axios.get(httpUrl, headers);
    }
    catch (err) {
        console.log('err ==== ', err);
    }
    res.send(JSON.stringify(result.data));
})

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening...port ${port}`, `server start http://localhost:${port}`)
})