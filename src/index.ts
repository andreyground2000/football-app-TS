import { MatchReader } from "./matchReader";
import { Summary } from "./summary";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const summary = Summary.winsAnalyzisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.mathes);