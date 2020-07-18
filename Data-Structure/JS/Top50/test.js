const isBalanceWithMap = function (str) {

    if (str.length % 2 !== 0) return false;
    
    let map = new Map();
    map.set("(", ")").set("{", "}").set("[", "]");

    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let key = str[i];
      if (map.get(key)) { // because ")", "}", and "]" is not key
        stack.push(key);
      } else {
        let lastKey = stack.pop();
        if (map.get(lastKey) !== key) return false;
      }
    }
    return stack.length === 0;
  }
  
  console.log(isBalanceWithMap("[]{}()"));
  console.log(isBalanceWithMap("[}()"));
  console.log(isBalanceWithMap("[{()}]"));
  console.log(isBalanceWithMap(")[{()}]("));