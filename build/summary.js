"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var winsAnalyzis_1 = require("./analyzers/winsAnalyzis");
var htmlReport_1 = require("./reportTargets/htmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    Summary.winsAnalyzisWithHtmlReport = function (team) {
        return new Summary(new winsAnalyzis_1.WinsAnalysis(team), new htmlReport_1.HtmlReport());
    };
    return Summary;
}());
exports.Summary = Summary;
