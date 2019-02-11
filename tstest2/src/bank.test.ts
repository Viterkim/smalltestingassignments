import { getInterestRate, calculateYearlyInterest } from './bank';

describe("getInterestRate", () => {
  test("balance under 100, negative number", () => {
    expect(() => getInterestRate(-1)).toThrowError('negative balance');
  });

  test("balance is 0", () => {
    expect(getInterestRate(0)).toEqual(3);
  });

  test("balance under 100", () => {
    expect(getInterestRate(99)).toEqual(3);
  });

  test("balance exact 100", () => {
    expect(getInterestRate(100)).toEqual(3);
  });

  test("balance over 100", () => {
    expect(getInterestRate(117)).toEqual(5);
  });

  test("balance exact 1000", () => {
    expect(getInterestRate(1000)).toEqual(5);
  });

  test("balance over 1000", () => {
    expect(getInterestRate(2325)).toEqual(7);
  });

  test("balance is a string", () => {
    //@ts-ignore
    expect(() => getInterestRate('tropaadet')).toThrowError('not a number');
  });
});


describe("calculateYearlyInterest", () => {
  test("balance under 100, negative number", () => {
    expect(() => calculateYearlyInterest(-1)).toThrowError('negative balance');
  });

  test("balance is 0", () => {
    expect(calculateYearlyInterest(0)).toBeCloseTo(0);
  });

  test("balance under 100", () => {
    expect(calculateYearlyInterest(99)).toBeCloseTo(2.97);
  });

  test("balance exact 100", () => {
    expect(calculateYearlyInterest(100)).toBeCloseTo(3);
  });

  test("balance over 100", () => {
    expect(calculateYearlyInterest(147)).toBeCloseTo(7.35);
  });

  test("balance exact 1000", () => {
    expect(calculateYearlyInterest(1000)).toBeCloseTo(50);
  });

  test("balance over 1000", () => {
    expect(calculateYearlyInterest(2325)).toBeCloseTo(162.75);
  });

  test("balance is a string", () => {
    //@ts-ignore
    expect(() => calculateYearlyInterest('tropaadet')).toThrowError('not a number');
  });
});

