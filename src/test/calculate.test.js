import calculate from '../logic/calculate';

describe('Testing calculate', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  test('Add first number and next is null', () => {
    expect(calculate(obj, '4').next).toBe('4');
  });
  test('Add second number and next is not null', () => {
    const cal = calculate(obj, '9');
    expect(calculate(cal, '0').next).toBe('90');
  });
  test('Operation add', () => {
    expect(calculate(obj, '+').operation).toBe('+');
  });
  test('Adding operation', () => {
    let cal = calculate(obj, '9');
    cal = calculate(cal, '+');
    cal = calculate(cal, '7');
    expect(calculate(cal, '=').total).toBe('16');
  });
});
