import { MatchData } from './MatchData';
import {WinsAnalysis} from './analyzers/WinsAnalysis'
import {ConsoleReport} from './reportTargets/ConsoleReport'

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

//summary is a coordinator 
export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output)
  }

}

