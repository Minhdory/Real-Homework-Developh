function divisibility(a, b){
  let i=0
  while(a%b !== 0){
    a++
    i++
    console.log(i)
  }
}
console.log(divisibility(1, 5))
