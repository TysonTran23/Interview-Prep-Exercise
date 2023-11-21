// add whatever parameters you deem necessary
function constructNote(message, letters) {
  if (!message) {
    return true;
  }
  if (letters.length < message.length) {
    return false;
  }
  let lettersCount = frequencyCounter(letters);
  for (let letter of message) {
    if (lettersCount[letter]) {
      lettersCount[letter]--;
      if (lettersCount[letter] === 0) {
        delete lettersCount[letter];
      }
    } else {
      return false;
    }
  }
}

function frequencyCounter(string) {
  let object = {};
  for (let letter of string) {
    if (object[letter]) {
      object[letter]++;
    } else {
      object[letter] = 1;
    }
  }
  return object;
}
