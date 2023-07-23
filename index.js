// // 1-masala
// const array = [1, 2, 3, 4, 55, 24, 8, 11];
// function res(arg1) {
//   if (array[0] < array.length - 1) {
//     array[0] = array[arg1.length - 1];
//   }
//   array.length -= 1;
//   return arg1.length > 1 ? res(arg1) : arg1;
// }
// console.log(res(array));

// 2-masala
// function collatz(param, param1 = 0) {
//   if (param == 1) {
//     return param1;
//   }
//   else{
//     param = param % 2 ? param * 3 + 1 : param / 2;
//     return collatz(param, param1 + 1);
//   }
// }
// console.log(collatz(45));

/// 3-masala----------------------------------------------------------------
// function gcd(a, b) {
//   if (!b) {
//     return a;
//   }else{
//       return gcd(b, a % b);
//   }
// }
// console.log(gcd(32, 8));
////////////////////////////////////////
// 4-masala
// function isPalindrome(text) {
//   if (text.length <= 1) {
//     return true;
//   } else if (text[0] === text[text.length - 1]) {
//     return isPalindrome(text.slice(1, text.length - 1));
//   } else {
//     return false;
//   }
// }
// // 5-masala
// function baseFun(num, base) {
//   const digits = "0123456789ABCDEF";
//   if (num < base) {
//     return digits[num];
//   } else {
//     return (
//       baseFun(Math.floor(num / base), base) + digits[num % base]
//     );
//   }
// }
// let num = 123;
// let bir = baseFun(10, 2);
// let ikki = baseFun(1642, 8);
// let uch = baseFun(212,16);

// // console.log(bir);
// console.log(ikki);
// console.log(uch);
// function func(param){
//     // let sum;

// }
// console.log(func(4));
// 6-masala -------------------------------------
// function addUp(number) {
//   if (number == 1) {
//     return number;
//   } else {
//   return  number + addUp(number - 1);
//   }
// }
// console.log(addUp(4))
//7-masala -------------------------------------------------------
// function addUp(number) {
//   if (number == 1) {
//     return number;
//   } else {
//     return number ** 2 + addUp(number - 1);
//   }
// }
// console.log(addUp(10));
// 8-masala ------------------------------------------------------------------
// function multiSum(p1, p2 = 10) {
//   if (p2 == 0) {
//     return 0;
//   } else {
//     num = p1 * p2 + multiSum(p1, p2 - 1);
//     return num;
//   }
// }
// console.log(multiSum(6));
// 9-masala----------------------------------------------------------------------

// function functionR(param1, param2) {
//   if (param2 == 0) {
//     return "";
//   } else {
//     return param1 + functionR(param1, param2 - 1);
//   }
// }
// console.log(functionR('salom', 3))
//10-masala-----------------------------------------------------------------------

// function name1(n) {
//   if (n == 0 || n === 1) {
//   return 1;
//   }else{
//     return n*name1(n-1)
//   }
// }
// console.log(name1(5));

// 11-masala----------------------------------------------------
// function massivYigindisi(massiv) {
//   if (massiv.length === 0) {
//     // massiv bo'shlig'i
//     return 0;
//   } else {
//     return massiv[0] + massivYigindisi(massiv.slice(1)); // massivning 1 dan sari qismi
//   }
// }
// const massiv = [1, 2, 3, 4, 5];
// const yigindi = massivYigindisi(massiv);
// console.log(yigindi); // 15

// 11.2--masala-------------------------------------------------------

// function name(params) {
//   return params.flat(Infinity).reduce((a, b) => a + b);
// }
// console.log(name([1, 2, 3, 4, 5, 6]));

// 12-masala
// const arr = ["nok", "olma", "banan", "shaftoli"];

// function funct(para) {
//   let par = "";
//   for (let i = 0; i < para.length; i++) {
//     if (para[i].length >= par.length) {
//       par = para[i];
//     }
//   }
//   return par;
// }

// console.log(funct(arr))

// 13-masala
// function kara(p) {
//   for (let i = 1; i <= p; i++) {
//     for (let g = 1; g <= 10; g++) {
//       console.log(`${i} x ${g}== ${i * g}`);
//     }
//   }
// }
// kara(3)

// 14-masala arrayni qushish
// const array = [];
// function fun(p) {
//   if (p.length === 0) {
//     return 0;
//   }
//   return p[0] + fun(p.slice(1));
// }
// console.log(fun(array));

// 15-masala
// arraylarni qushish forda

// function func(pa) {
//   let sum = 0;
//   for (let i = 0; i < pa.length; i++) {
//     sum += pa[i];
//   }
//   return sum;
// }
// console.log(func(1,2,3,4,4))

// 16-masala-   -----------------------------------
// Arrayning min va maxsini topish
// function findMinMaxValues(array) {
//   if (!Array.isArray(array) || array.length === 0) {
//     return null;
//   }

//   let minValue = array[0];
//   let maxValue = array[0];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < minValue) {
//       minValue = array[i];
// //     }
// //     if (array[i] > maxValue) {
// //       maxValue = array[i];
// //     }
// //   }

// //   return {
// //     min: minValue,
// //     max: maxValue
// //   };
// // }

// // const array = [2, 5, 1, 9,12,32,32224, 4, 3];
// // const result = findMinMaxValues(array);
// // console.log(result); // { min: 1, max: 9 }

// // 17-masala -----------------------------------------------------------------------------
// // const fizz = (param) => {
// //     let result = []
// //   for (let i = 1; i <= param; i++) {
// //     if (i % 3 === 0 && i % 5 === 0) {
// //       result.push('FizzBuzz')
// //     } else if (i % 3 === 0) {
// //        result.push('Fizz');
// //     } else if (i % 5 === 0) {
// //        result.push('Buzz');
// //     }else{
// //         result.push(i.toString())
// //     }
// //   }
// //   return result
// // };
// // console.log(fizz(9));

// // 18-masala--------------------
// const fs = require("fs");

// const fun = (a, b) => {
//   if (a === "get") {
//     const data = fs.readFileSync(__dirname + "/dataBase.json");
//     console.log(JSON.parse(data));
//   }

//   if (a === "post") {
//     const data = JSON.parse(fs.readFileSync(__dirname + "/dataBase.json"));
//     const id = data[data.length - 1].id + 1;
//     const newUser = {
//       id,
//       name: b,
//     };

//     data.push(newUser);

//     fs.writeFileSync(
//       __dirname + "/dataBase.json",
//       JSON.stringify(data, null, 4)
//     );

//   }
//   if(a==='put'){
//     newUser.map((el)=>el.)
//   }
// };

// console.log(fun("post", "nodir"));

// 19-masala ---------------------------------------
// const ray = [1, 2, 3];

// function arrayNext(param) {
//   if (ray[0] < ray.length - 1) {
//     ray[0] = ray[param.length - 1];
//   }
//   ray.length -= 1;
//   return param.length > 1 ? arrayNext(param) : param;
// };
// console.log(arrayNext(ray));

// 20-masala --------------------

// const func = (arg) => {
//   if (arg === 0) {
//     return -1;
//   } else {
//     return arg[arg.length-1];
//   }
// };
// console.log(func(ray));

// 21-masala--------------------------------------------
// const fs = require('fs')
// function solution(fetch, name){
// if(fetch === 'delete'){
//   const users = JSON.parse(fs.readFileSync(__dirname + "/dataBase.json"));
//   // const users = JSON.parse(fs.readFileSync('./dataBase.json'))
//   console.log(users)
//   const filtered = users.filter(user=> {
//     if(user.id != name){
//       return user
//     }
//   })

//    fs.writeFileSync(
//       __dirname + "/dataBase.json",
//       JSON.stringify(filtered, null, 4)
//     );
// }

// if(fetch == 'put'){
//   const users = JSON.parse(fs.readFileSync(__dirname + "/dataBase.json"));
//   console.log(users);
//   const updated = users.find(el=> el.id ==name.id )

//   console.log(updated);
//   updated.name = name.name
//    fs.writeFileSync(
//      __dirname + "/dataBase.json",
//      JSON.stringify(users, null, 4)
//    );
// }
// }

// console.log(solution('put', {id:2,name: 'test'}))

// 22-masala----------------
// function reduceArray(nums, fn, init) {
//   if (nums.length === 0) {
//     return init;
//   }

//   let val = init;
//   for (let i = 0; i < nums.length; i++) {
//     val = fn(val, nums[i]);
//   }

//   return val;
// }

// const nums = [1, 2, 3, 4, 5];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// const initialValue = 0;

// const result = reduceArray(nums, reducer, initialValue);
// console.log(result);

// const n = [2,3,4,5]
// for (let i = 0; i < n; i++) {
//   console.log(n);
// }
// Satr berilgan , eng uzuninings uzunligini toping
// let lengthOfLongestSubstring = function (s) {
//   let set = new Set();
//   let left = 0;
//   let maxSize = 0;

//   if (s.length === 0) return 0;
//   if (s.length === 1) return 1;

//   for (let i = 0; i < s.length; i++) {
//     while (set.has(s[i])) {
//       set.delete(s[left]);
//       left++;
//     }
//     set.add(s[i]);
//     maxSize = Math.max(maxSize, i - left + 1);
//   }
//   return maxSize;
// };

// const text = "code";
// const func = (str) => {
//   const array = str.split("");
//   const rev = array.splice(0, 1);
//   const pas = array.splice(2, 3);
//   const string = pas.concat(array, rev);
//   return string.join("")
// };
// console.log(func(text));

// 1-masala
// Textning oxirgi elementining lengthini toping

// const str = "men uyga ketyapman";

// const func = (param) => {
//   const arr = param.split(" ");
//   return arr.at(-1).length;
// };
// console.log(func(str));

// 2-masala
//  Nuqtalar urnini almashtirish.
// input: "1.1.1.1"
// output:"1[.]1[.]1[.]1"
// const apiAddress = "1.1.1.1";
// const changeFunc = (param) => {
//   const arr = param.split(".");
//   const param1 = arr.join("[.]");
//   console.log(param1)
// };
// changeFunc(apiAddress);

// 3-masala
const arr = [1, 2, 3, 4];
// // 2,4,6,8
function func(param) {
 return param.map((el)=>(el*2))
}
console.log(func(arr));
