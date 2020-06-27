const isBalance = function (str) {
    let stack = [];
    let map = {
      "(" : ")",
      "{" : "}",
      "[" : "]"
    }
    
    let arr = [...str];
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
        stack.push(arr[i]);
      } else {
        let last = stack.pop();
        if(map[last] !== arr[i]) {
          return false
        }
      }
    }
  
    return stack.length === 0
  }
  