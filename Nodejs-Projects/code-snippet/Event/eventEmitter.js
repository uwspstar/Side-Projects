// https://www.runoob.com/nodejs/nodejs-event-loop.html


var events = require('events');// 引入 events 模块

var eventEmitter = new events.EventEmitter();// 创建 eventEmitter 对象

eventEmitter.on('data_received', function () {// 使用匿名函数 function () {} 绑定 data_received 事件
    console.log('date received ...');
});

var connectHandler = function connected() {// 创建事件处理程序 function connected()
    console.log('connection ...');
    eventEmitter.emit('data_received');// 触发 data_received 事件 
}

eventEmitter.on('connection', connectHandler);// 绑定 function connected() 事件处理程序

eventEmitter.emit('connection');// 触发 connection 事件 

console.log("DONE ...");