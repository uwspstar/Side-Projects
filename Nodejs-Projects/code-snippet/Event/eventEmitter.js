// https://www.runoob.com/nodejs/nodejs-event-loop.html
// event 就是需要 eventEmitter.on 去绑定一个事件 通过 eventEmitter.emit 去触发这个事件
// eventEmitter.on
// eventEmitter.emit
// eventEmitter.emit 是触发事件（事件请求），eventEmitter.on是绑定处理事件的处理器（事件处理），事件的请求和处理是分开的，所以是异步。

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