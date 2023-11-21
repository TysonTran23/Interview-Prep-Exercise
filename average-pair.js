// add whatever parameters you deem necessary
function averagePair(array, avg) {
  if (array <= 1) return false;
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let calculatedAvg = (array[left] + array[right]) / 2;
    if (calculatedAvg === avg) {
      return true;
    } else if (calculatedAvg < avg) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}
