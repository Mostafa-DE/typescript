import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import { MatchResult } from "../MatchResults";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    let teamsWon;

    for (let match of matches) {
      if (match[3] > match[4] || match[4] > match[3]) {
        teamsWon = MatchResult.HomeWin;
      }

      if (
        match[1] === "Manchester United" &&
        teamsWon === MatchResult.HomeWin
      ) {
        wins++;
      }
    }

    return `${this.team} Won: ${wins} times :)`;
  }
}
