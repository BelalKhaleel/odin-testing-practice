const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, shiftFactor) {
  return [...string].reduce((accumulator, currentCharacter) => {
    if (!alphabet.includes(currentCharacter.toLowerCase())) {
      return accumulator + currentCharacter;
    } else {
      const index = alphabet.indexOf(currentCharacter.toLowerCase());
      let newIndex;
      if (index + shiftFactor > 25) {
        newIndex = index + shiftFactor - alphabet.length;
      } else if (index + shiftFactor < 0) {
        newIndex = index + shiftFactor + alphabet.length;
      } else {
        newIndex = index + shiftFactor;
      }
      if (currentCharacter === currentCharacter.toUpperCase()) {
        return accumulator + alphabet[newIndex].toUpperCase();
      } else {
        return accumulator + alphabet[newIndex];
      }
    }
  }, "");
}

export default caesarCipher;

// shift factor of -6: cdef => wxyz
// index 2 => 22
// index 3 => 23
// index 4 => 24
// index 5 => 25