export function getInterestRate(balance: number) {
  if(typeof(balance) !== 'number'){
    throw Error('not a number');
  }
  if (balance < 0){
    throw Error('negative balance');
  }
  if (balance <= 100) {
    return 3;
  }
  else if (balance > 100 && balance <= 1000) {
    return 5;
  }
  else {
    return 7;
  }
}

export function calculateYearlyInterest(balance: number): number {
  return (balance * (getInterestRate(balance) / 100));
}
