import { twoOneExample } from './whitebox';

describe("twoOneExample", () => {
  test("normal string input 1", () => {
    let output = twoOneExample(['1','2']);
    expect(output).toMatchObject({maximum : 2, minimum: 1});
  });

  test("normal string input 2", () => {
    let output = twoOneExample(['320','1', '15', '210']);
    expect(output).toMatchObject({maximum : 320, minimum: 1});
  });

  test("empty array", () => {
    expect(() => twoOneExample([])).toThrowError('No numbers');
  });

  test("numbers instead of array", () => {
    //@ts-ignore
    expect(() => twoOneExample(1, 3)).toThrowError('args.forEach is not a function');
  });

  test("multiples of same value", () => {
    let output = twoOneExample(['44', '44', '12', '12']);
    expect(output).toMatchObject({maximum : 44, minimum: 12});
  });
});
