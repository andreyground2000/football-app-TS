import { WinsAnalysis } from "./analyzers/winsAnalyzis";
import { MatchData} from "./matchData";
import { HtmlReport } from "./reportTargets/htmlReport";

export interface Analyzer {
    run(matches:MatchData[]) : string;
}

export interface OutputTarget {
    print(report:string) : void;
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]) : void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }

    static winsAnalyzisWithHtmlReport(team: string) : Summary {
        return new Summary(new WinsAnalysis(team), new HtmlReport());
    }
}