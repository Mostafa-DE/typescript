import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutPutTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(
    teams: string,
    nameFileHtml: string
  ): Summary {
    return new Summary(new WinsAnalysis(teams), new HtmlReport(nameFileHtml));
  }

  constructor(public analyzer: Analyzer, public outPutTarget: OutPutTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outPutTarget.print(report);
  }
}
