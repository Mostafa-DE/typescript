class ArraOfAnything<T> {
  constructor(public collection: T[]) {}
  get(indx: number): T {
    return this.collection[indx];
  }
}

const numbers = [1, 2, 3, 4, 5, 6];
const arrayOfNumber = new ArraOfAnything<number>(numbers);
// console.log(arrayOfNumber.get(4));

const strings = ["mostafa", "fayyad", "hello", "bye", "hi"];
const arrayOfString = new ArraOfAnything<string>(strings);
// console.log(arrayOfString.get(0));

const booleans = [true, false];
const arraOfBoolean = new ArraOfAnything<boolean>(booleans);
// console.log(arraOfBoolean.get(1));

// Example of generics with function ===>

// function printStrings(arr: string[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// function printNumbers(arr: number[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// ===> don't ever never duplicate any method, use generics instead of duplicate :) ==> like this

function print<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// print<string>(["mostafa", "fayyad"]);
// print<number>([1, 2, 3, 4]);

// it will work for every type you enter
