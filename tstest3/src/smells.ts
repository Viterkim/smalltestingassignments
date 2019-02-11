import fetch from 'node-fetch';

// Non testable function example
export async function nonTestable(){
  // Returns a random variable from the internet =)
  let res = await fetch("http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe");
  let value = (await res.json()).value.id;
  return value;
}

// Introduce Parameter Object | https://refactoring.com/catalog/introduceParameterObject.html
export function smellMultiplyAmountTimes(valA: number, valB: number, amount: number): number {
  if (amount === 0) {
    return 0;
  }
  return (valA * valB) + smellMultiplyAmountTimes(valA, valB, amount - 1);
}

// Remove Dead Code | https://refactoring.com/catalog/removeDeadCode.html
// ts-ignore save me plz
export function smellVeryGood(){
  //@ts-ignore
  if (1 === 2){
    return true;
  }
  //@ts-ignore
  return (1 === 2);
}

// Inline Variable | https://refactoring.com/catalog/inlineVariable.html
export function smellInlineVariable(value: number){
  let tmpValue = 2 * value;
  return tmpValue;
}

// Replace Exception with Precheck | https://refactoring.com/catalog/replaceExceptionWithPrecheck.html
export function smellCheckArrayForStuff(index: number){
  try{
    const ARRAY_OF_GOOD_STUFF = ['pepsi max', 'fanta exotic'];
    return ARRAY_OF_GOOD_STUFF[index];
  }
  catch(err){
    const ARRAY_OF_GOOD_STUFF = ['pepsi max', 'fanta exotic'];
    return ARRAY_OF_GOOD_STUFF[0];
  }
}
