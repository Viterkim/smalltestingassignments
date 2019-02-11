// Introduce Parameter Object | https://refactoring.com/catalog/introduceParameterObject.html

export interface multiplyInterface {
  valueA: number,
  valueB: number,
  amount: number
}

export function multiplyAmountTimes(multiplyObject: multiplyInterface): number {
  return multiplyObject.valueA * multiplyObject.valueB * multiplyObject.amount;
}

// Remove Dead Code | https://refactoring.com/catalog/removeDeadCode.html
// :-)

// Inline Variable | https://refactoring.com/catalog/inlineVariable.html
export function noInlineVariable(value: number){
  return (2 * value);
}


// Replace Exception with Precheck | https://refactoring.com/catalog/replaceExceptionWithPrecheck.html
export function checkArrayForStuff(index: number){
  const ARRAY_OF_GOOD_STUFF = ['pepsi max', 'fanta exotic'];
  index = (index < ARRAY_OF_GOOD_STUFF.length) ? index : ARRAY_OF_GOOD_STUFF.length -1;
  return ARRAY_OF_GOOD_STUFF[index];
}
