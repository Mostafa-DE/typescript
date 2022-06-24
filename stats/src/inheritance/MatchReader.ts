import { CsvFileReader } from "./CsvFileReader";

type MatchData = [string, string, string, number, number, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [row[0], row[1], row[2], parseInt(row[3]), parseInt(row[4]), row[5]];
  }
}
