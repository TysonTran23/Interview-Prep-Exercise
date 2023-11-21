// add whatever parameters you deem necessary
function isSubsequence(string1, string2) {
  if (!string1.length) {
    return true;
  }
  if (string1.length > string2.length) {
    return false;
  }

  let subseqPointer = 0;
  for (let strPointer = 0; strPointer < string2.length; strPointer++) {
    if (string2[strPointer] === string1[subseqPointer]) {
      subseqPointer++;
      if (subseqPointer === string1.length) {
        return true;
      }
    }
  }
  return false;
}
