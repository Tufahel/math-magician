import operate from '../logic/operate';

describe('Testing operation function', () => {
  test('Addition', () => {
    expect(operate(2.3, 1, '+')).toBe('3.3');
  });
  test('Multiplication', () => {
    expect(operate(3, 2, 'x')).toBe('6');
  });
  test('Minus', () => {
    expect(operate(10, 1, '-')).toBe('9');
  });
  test('Divide', () => {
    expect(operate(15, 3, '÷')).toBe('5');
  });
});
