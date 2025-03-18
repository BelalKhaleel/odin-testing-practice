const calculator = {
  add(addend1, addend2) {
    if (typeof addend1 !== "number" || typeof addend2 !== "number") {
      throw new Error("Both parameters must be numbers");
    }
    return addend1 + addend2;
  },
  subtract(minuend, subtrahend) {
    if (typeof minuend !== "number" || typeof subtrahend !== "number") {
      throw new Error("Both parameters must be numbers");
    }
    return minuend - subtrahend;
  },
  multiply(factor1, factor2) {
    if (typeof factor1 !== "number" || typeof factor2 !== "number") {
      throw new Error("Both parameters must be numbers");
    }
    return factor1 * factor2;
  },
  divide(dividend, divisor) {
    if (typeof dividend !== "number" || typeof divisor !== "number") {
      throw new Error("Both parameters must be numbers");
    }
    if (divisor === 0) {
      throw new Error("Cannot divide by zero");
    }
    return dividend / divisor;
  },
};

export default calculator;
