function analyzeArray(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  if (!arr.every((element) => typeof element === "number")) {
    throw new Error("All of the array elements should be numbers");
  }
  const average = Math.round(
    arr.reduce(
      (accumulator, currentNumber) => (accumulator += currentNumber),
      0
    ) / arr.length
  );
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  return {
    average,
    min,
    max,
    length,
  };
}

const object = analyzeArray([1, 8, 3, 4, 2, 6]);

object ==
  {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };

export default analyzeArray;
