import caesarCipher from "./caesar-cipher";

test('should shift characters according to shift factor', () => { 
  expect(caesarCipher('abc', 3)).toBe('def');
 });

test('should preserve case of characters', () => { 
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
 });

test('should go back to the beginning of the alphabet after surpassing letter z', () => { 
  expect(caesarCipher('xyz', 3)).toBe('abc');
 });

test('should not change punctuation, spaces, and other non-alphabetical characters', () => { 
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
 });

test('should handle negative shift factor values correctly', () => { 
  expect(caesarCipher('john', -3)).toBe('glek');
 });

test('should handle negative shift factor values that precede the letter a', () => { 
  expect(caesarCipher('abc', -3)).toBe('xyz');
 });

 test('should handle large positive shift values correctly', () => { 
  expect(caesarCipher('abc', 29)).toBe('def');
});

test('should handle large negative shift values correctly', () => { 
  expect(caesarCipher('abc', -30)).toBe('wxy');
});