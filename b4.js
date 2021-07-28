function divisibility(a, b){
  let i=0
  while (a%b !== 0){
    a++;
    i++;
  }
  return(i);
}
console.log(divisibility(1, 5))

