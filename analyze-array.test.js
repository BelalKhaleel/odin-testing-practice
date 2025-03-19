import analyzeArray from "./analyze-array";

test("should not throw an error if the argument is an array", () => {
  expect(() => analyzeArray([1, 8, 3, 4, 2, 6])).not.toThrow(
    "Input must be an array"
  );
});

test("should throw an error if the argument is not an array", () => {
  expect(() => analyzeArray("Hey!")).toThrow("Input must be an array");
});

test("should not throw an error if all elements of the array are numbers", () => {
  expect(() => analyzeArray([1, 8, 3, 4, 2, 6])).not.toThrow(
    "All of the array elements should be numbers"
  );
});

test("should throw an error if at least one the elements of the array is not a number", () => {
  expect(() => analyzeArray([1, "B", 3, 4, 2, 6])).toThrow(
    "All of the array elements should be numbers"
  );
});

test("should return the average of the numbers", () => {
  const analyzedArray = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(analyzedArray.average).toEqual(4);
});

test("should return the minimal value in the array", () => {
  const analyzedArray = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(analyzedArray.min).toEqual(1);
});

test("should return the maximal value in the array", () => {
  const analyzedArray = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(analyzedArray.max).toEqual(8);
});

test("should return the length of the array", () => {
  const analyzedArray = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(analyzedArray.length).toEqual(6);
});

test("should return an object with correct properties", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});