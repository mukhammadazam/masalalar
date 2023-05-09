// // 1-masala
// const array = [1, 2, 3, 4, 55, 8];
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
