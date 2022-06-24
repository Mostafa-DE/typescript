import "reflect-metadata";

// const person = {
//   name: "mostafa",
// };

// Reflect.defineMetadata("age", 22, person);

// const test = Reflect.getMetadata("age", person);

// console.log(test);

@printMetadata
class Person {
  name: string = "mostafa";
  age: number = 22;

  @markFunction("mostafa fayyad")
  printName(): void {
    console.log(this.name);
  }

  @markFunction("121312")
  printAge(): void {
    console.log(this.age);
  }
}

function markFunction(message: string) {
  return function (target: Person, key: string) {
    Reflect.defineMetadata("message", message, target, key);
  };
}

function printMetadata(target: typeof Person) {
  for (let key in target.prototype) {
    const message = Reflect.getMetadata("message", target.prototype, key);
    console.log(key);
  }
}
