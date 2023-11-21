// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  let strNum1 = String(num1);
  let strNum2 = String(num2);

  if (strNum1.length !== strNum2.length) return false;

  num1Count = frequencyCounter(strNum1);
  num2Count = frequencyCounter(strNum2);

  for (let key in num1Count) {
    if (num1Count[key] !== num2Count[key]) return false;
  }
  return true;
}

function frequencyCounter(string) {
  let object = {};
  for (let element of string) {
    if (object[element]) {
      object[element]++;
    } else {
      object[element] = 1;
    }
  }
  return object;
}
