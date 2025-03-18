import calculator from "./calculator";

describe("Calculator Methods", () => {
  test("add method parameters should be numbers", () => {
    const addend1 = 5;
    const addend2 = 3;
    expect(typeof addend1).toBe("number");
    expect(typeof addend2).toBe("number");
  });

  test("subtract method parameters should be numbers", () => {
    const minuend = 5;
    const subtrahend = 3;
    expect(typeof minuend).toBe("number");
    expect(typeof subtrahend).toBe("number");
  });

  test("multiply method parameters should be numbers", () => {
    const factor1 = 5;
    const factor2 = 3;
    expect(typeof factor1).toBe("number");
    expect(typeof factor2).toBe("number");
  });

  test("divide method parameters should be numbers", () => {
    const dividend = 6;
    const divisor = 3;
    expect(typeof dividend).toBe("number");
    expect(typeof divisor).toBe("number");
  });

  test("should throw an error when parameters are not numbers in add method", () => {
    expect(() => calculator.add("a", 3)).toThrow(
      "Both parameters must be numbers"
    );
    expect(() => calculator.add(2, "b")).toThrow(
      "Both parameters must be numbers"
    );
  });

  test("should throw an error when parameters are not numbers in subtract method", () => {
    expect(() => calculator.subtract("a", 3)).toThrow(
      "Both parameters must be numbers"
    );
    expect(() => calculator.subtract(5, "b")).toThrow(
      "Both parameters must be numbers"
    );
  });

  test("should throw an error when parameters are not numbers in multiply method", () => {
    expect(() => calculator.multiply("a", 3)).toThrow(
      "Both parameters must be numbers"
    );
    expect(() => calculator.multiply(5, "b")).toThrow(
      "Both parameters must be numbers"
    );
  });

  test("should throw an error when parameters are not numbers in divide method", () => {
    expect(() => calculator.divide("a", 3)).toThrow(
      "Both parameters must be numbers"
    );
    expect(() => calculator.divide(6, "b")).toThrow(
      "Both parameters must be numbers"
    );
  });
});

describe("Calculator Operations", () => {
  test("should add two numbers correctly", () => {
    expect(calculator.add(5, 3)).toBe(8);
  });

  test("should subtract two numbers correctly", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("should multiply two numbers correctly", () => {
    expect(calculator.multiply(5, 3)).toBe(15);
  });

  test("should divide two numbers correctly", () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test("should throw an error if dividing by zero", () => {
    expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
  });
});
