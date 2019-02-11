import { nonTestable, smellMultiplyAmountTimes, smellVeryGood, smellInlineVariable, smellCheckArrayForStuff } from './smells';

describe("nonTestable", () => {
  test("not even a unit test", async(done) => {
    expect(await nonTestable()).not.toBeNull();
    done();
  });
});

describe("smellMultiplyAmountTimes", () => {
  test("get 2 values back times x badly", () => {
    expect(smellMultiplyAmountTimes(2, 2 , 2)).toBe(8);
  });
});

describe("smellVeryGood", () => {
  test("amazing", () => {
    expect(smellVeryGood()).toBe(false);
  });
});

describe("smellInlineVariable", () => {
  test("get value back x2 badly", () => {
    expect(smellInlineVariable(2)).toBe(4);
  });
});

describe("smellCheckArrayForStuff", () => {
  test("check array in bounds badly", () => {
    expect(smellCheckArrayForStuff(1)).toBe('fanta exotic');
  });
  test("check array out of bounds badly", () => {
    expect(smellCheckArrayForStuff(4)).toBe(undefined);
  });
});
