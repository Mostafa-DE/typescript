import { OutPutTarget } from "../Summary";

export class ConsoleRepote implements OutPutTarget {
  print(report: string): void {
    console.log(report);
  }
}
