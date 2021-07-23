"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matchReader_1 = require("./matchReader");
var summary_1 = require("./summary");
var matchReader = matchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
var summary = summary_1.Summary.winsAnalyzisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.mathes);
