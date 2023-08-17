function primeNumber(n){
  if (n <= 1) {
   return console.log('Number must be not 0, 1, or negative');
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
     return console.log('Not a Prime Number');
    }
  }
  return console.log("This is a Prime Number")
}

// console.log(primeNumber(11))
 let sum = 0
let a = [1,2,3,4,5]
a.forEach((item)=>{
 return(sum += item)
    }
)
console.log(sum)
