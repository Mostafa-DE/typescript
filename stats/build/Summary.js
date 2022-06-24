"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outPutTarget) {
        this.analyzer = analyzer;
        this.outPutTarget = outPutTarget;
    }
    Summary.winsAnalysisWithHtmlReport = function (teams, nameFileHtml) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teams), new HtmlReport_1.HtmlReport(nameFileHtml));
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outPutTarget.print(report);
    };
    return Summary;
}());
exports.Summary = Summary;
