function countDigits(num){
  if(num >= 0 && num <= 10^9){
    let count = 0
    if(num >= 1) ++count;
    while(num/10>=1){
      num = num/10
      ++count;
    }
    return count 
    }
}  
console.log(countDigits(0));
