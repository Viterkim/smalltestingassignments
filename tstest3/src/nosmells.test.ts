import { multiplyInterface, multiplyAmountTimes, noInlineVariable, checkArrayForStuff } from './nosmells';

describe("multiplyAmountTimes", () => {
  test("all 1's", () => {
    let obj: multiplyInterface = {
      valueA: 1,
      valueB: 1,
      amount: 1
    }
    let val = multiplyAmountTimes(obj);
    expect(val).toBe(1);
  });
});

describe("noInlineVariable", () => {
  test("get value back x2", () => {
    expect(noInlineVariable(2)).toBe(4);
  });
});

describe("checkArrayForStuff", () => {
  test("check inbounds", () => {
    expect(checkArrayForStuff(1)).toBe('fanta exotic');
  });
  test("outside inbounds", () => {
    expect(checkArrayForStuff(3)).toBe('fanta exotic');
  });
});
