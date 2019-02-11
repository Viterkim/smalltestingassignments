export function twoOneExample(args: Array<string>){
  let mi : number, ma : number;
  if(args.length == 0){
    throw Error("No numbers");
  }
  else{
    mi = ma = parseInt(args[0]);
    args.forEach((e) => {
      let obs = parseInt(e);
      if (obs > ma){
        ma = obs;
      }
      else if (obs < mi){
        mi = obs;
      }
    });
  }
  return { minimum : mi, maximum : ma }
}
