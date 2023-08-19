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

//---------------------------------------------------------------------------------------------------------

 let sum = 0
let a = [1,2,3,4,5]
a.forEach((item)=>{
 return(sum += item)
    }
)
// console.log(sum)



//Q Write a javascript function to check whether an 'input' is an array or not?

// function isArray(arr){
//    if(Array.isArray(arr)){
//     return true
//    }else{
//     return false
//    }
// }
// console.log(isArray(1))


// function isArray(arr) {
//   if (Object.prototype.toString.call(arr) === '[object Array]') {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isArray(1)); // Output: true
// // console.log(isArray("not an array")); // Output: false



function isArray(arr){
   if(arr instanceof Array){
    return true
   }else{
    return false
   }
}
// console.log(isArray(1))


//Q Write a favascript function to clone an array ?

// function cloneArray (arr){
//   let cloneArr = [...arr]
//   return cloneArr
// }
//  console.log(cloneArray([23,24,25,26,[1,2]]))

// let arr = [1,2,3,4]
// let arr2 = [...arr]

// arr2.pop()
// console.log(arr2)


// function cloneArray(arr) {
//   let cloneArr = [];

//   if(!Array.isArray(arr)) return console.log("Please provide a valid Array")

//   for (let i = 0; i < arr.length; i++) {
   
//       cloneArr.push(arr[i]); 
//   }

//   return cloneArr;
// }

// console.log(cloneArray("Suraj"));


// Custom spread function
function customSpread(iterable) {
  if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
    throw new TypeError('Expected an iterable');
  }

  const result = [];
  for (const item of iterable) {
    result.push(item);
  }
  return result;
}

// Usage
const originalArray = [1, 2, 3];
const copiedArray = customSpread(originalArray);

console.log(customSpread(12)); // Output: [1, 2, 3]
