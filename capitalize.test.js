import capitalize from "./capitalize";

test("input should be a string", () => {
  expect(capitalize("string")).toBeTruthy();
});

test("should throw an error if input is not a string", () => {
  expect(() => capitalize(4)).toThrow("Input must be a string");
});

test("should not modify a string that is already capitalized", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("should return an empty string if input is empty", () => {
  expect(capitalize("")).toBe("");
});

test("should handle multiple words and only capitalize the first letter", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("should capitalize the first letter of a string", () => {
  expect(capitalize("hi")).toBe("Hi");
});
