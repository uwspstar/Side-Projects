let checkType = (data) => {
    return Object.prototype.toString.call(data).slice(8, -1);
};
//console.log('{} type', checkType({}));
//console.log('[] type', checkType([]));

let deepCopy = target => {
    let targetType = checkType(target);
    let result;
    if (targetType === 'Object') {
        result = {};
    } else if (targetType === 'Array') {
        result = [];
    } else {
        return target;
    }
    for (let i in target) {
        let value = target[i];
        let valueType = checkType(value)
        if (valueType === 'Object' || valueType === 'Array') {
            result[i] = deepClone(value)
        } else {
            result[i] = value;
        }
    }
    return result;
}