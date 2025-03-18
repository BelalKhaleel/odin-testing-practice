function capitalize(input) {
  if (input === "") return "";
  if(typeof input !== 'string') throw new Error("Input must be a string");
  return input[0].toUpperCase() + input.substring(1);
}

// console.log(capitalize(4))
export default capitalize;