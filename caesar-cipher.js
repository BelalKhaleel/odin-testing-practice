const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, shiftFactor) {
  return [...string].reduce((accumulator, currentCharacter) => {
    if (!alphabet.includes(currentCharacter.toLowerCase())) {
      return accumulator + currentCharacter;
    } 
    const index = alphabet.indexOf(currentCharacter.toLowerCase());
    let newIndex = (index + shiftFactor) % alphabet.length;

    if (newIndex < 0) newIndex += alphabet.length;

    const newCharacter = alphabet[newIndex];
    return accumulator + (currentCharacter === currentCharacter.toUpperCase() ? newCharacter.toUpperCase() : newCharacter);
  }, "");
}

export default caesarCipher;
