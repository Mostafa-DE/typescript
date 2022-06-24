class Boat {
  color: string = "blue";

  get formattedColor(): string {
    return ` This boats color is ${this.color}`;
  }

  @logError("OOPS, Somthing Went Wrong!!")
  pilot(): void {
    throw new Error();
    console.log("swish");
  }
}

function logError(errorMsg: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (err) {
        console.log(errorMsg);
      }
    };
  };
}
const boat = new Boat();
boat.pilot();
