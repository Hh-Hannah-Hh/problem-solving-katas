function generateMultiples(num) {
  // num is number to be multiplied by
  // should return a function

  return function makeMultiplesOfNum(numListLength) {
    // numListLength is the amount of times num will be...
    // multiplied by i ( = arr length)

    let multiplesArr = [];

    for (let i = 1; i <= numListLength; i++) {
      multiplesArr.push(i * num);
    }
    return multiplesArr;
  };
}

function secureFunc() {}

module.exports = { generateMultiples, secureFunc };
