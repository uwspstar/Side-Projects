const findUniqueValueSize = (arr) => {
    arr.length < 2 ? arr.length : (new Set(arr)).size;
}

const findUniqueValue = (arr) => {
    arr.length < 2 ? arr : [(new Set(arr))];
}