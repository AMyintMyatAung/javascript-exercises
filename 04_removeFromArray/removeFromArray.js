const removeFromArray = function(arr, ...args) {
    const newArr = [];
    for(let num in arr) {
        if(!args.includes(arr[num])){
            newArr.push(arr[num]);
        }
    }
    return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;