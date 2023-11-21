function countPairs(array, targetSum) {
  let seenNumbers = new Set();
  let count = 0;

  for (let num of array) {
    let complement = targetSum - num;
    if (seenNumbers.has(complement)) {
      count++;
    } else {
      seenNumbers.add(num);
    }
  }

  return count;
}
