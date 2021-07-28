function typeOfTriangle(a,b,c){
  if (a+b>c && a+c>b && b+c>a){
    if (a===b && a===c){
      return "tam giac deu";
    }
    else if (a===b || a===c || b===c){
      return "tam giac can";
    }
    else return "tam giac thuong";
  }else return "khong ton tai tam giac";
}
console.log(typeOfTriangle(4,4,4))
