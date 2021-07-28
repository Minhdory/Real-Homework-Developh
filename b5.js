function IsSpecialNumber(num){
if (num>0 && num%2 === 0){
  let uocChan = 1; uocLe = 1
  for(i=1; i<num; i++){
    if(num%i === 0){
      if(i%2 === 0){uocChan++};
      else uocLe++
    }
  }
if(uocChan===uocLe){
  return "true";
} else return "false";
}
console.log(IsSpecialNumber(123456))
