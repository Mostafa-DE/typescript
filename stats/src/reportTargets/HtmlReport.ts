import fs from "fs";
import { OutPutTarget } from "../Summary";

export class HtmlReport implements OutPutTarget {
  constructor(public nameFileHtml: string) {}

  print(report: string): void {
    const html = `
        <div>
            <h1>Analysis Output: </h1>
            <div>${report}</div>
        </div>
        `;

    fs.writeFileSync(`${this.nameFileHtml}.html`, html);
  }
}
