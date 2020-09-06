const http = require('http');
const slice = Array.prototype.slice;

class LikeExpress {
    constructor() {
        //store middleware
        this.route = {
            all: [],
            get: [],
            post: [],
        }
    }
    register(path) {
        const info = {}
        if (typeof path === 'string') {
            info.path = path;
            // from second arg, save as array
            info.stack = slice.call(argument, 1);
        } else {
            info.path = './';
            // from first arg, save as array
            info.stack = slice.call(argument, 0);
        }
        return info;

    }

    use() {
        const info = this.register.apply(this, arguments);
        this.register.all.push(info);
    }
    get() {

    }
    post() {

    }
    listen() {

    }
}

module.exports = () => {
    return new LikeExpress()
}

//https://medium.com/@jhawleypeters/javascript-call-vs-apply-vs-bind-61447bc5e989#:~:text=The%20Basics%3A%20Call%20vs%20Apply&text=The%20difference%20between%20call(),following%20have%20the%20same%20effect.