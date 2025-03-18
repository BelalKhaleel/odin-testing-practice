import reverseString from "./reverseString";

test("should return true for a valid string input", () => {
  expect(reverseString("Belal")).toBeTruthy();
});

test("should throw an error if input is not a string", () => {
  expect(() => reverseString(4)).toThrow("Input must be a string");
});

test("should reverse a string", () => {
  expect(reverseString("belal")).toBe("laleb");
});

test("should reverse a string with multiple words", () => {
  expect(reverseString("Hi, my name is Belal.")).toBe(".laleB si eman ym ,iH");
});
