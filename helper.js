function isValid() {
  return true;
}

const arraySum = ()=> {
    let array = [4, 6, 10];
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}

module.exports = arraySum;
