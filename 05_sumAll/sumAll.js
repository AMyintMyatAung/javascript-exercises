const sumAll = function (num1, num2) {
  if ((typeof num1 !== "number" || typeof num2 !== "number") || (num1 <0 || num2 <0)) {
    return 'ERROR';
  }
  const arr = [Math.min(num1, num2), Math.max(num1, num2)];
    let startNum = arr[0];
    let endNum = arr[1];
    let sum = 0;
    while (startNum <= endNum) {
      sum = sum + startNum;
      startNum++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
