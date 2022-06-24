"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResults_1 = require("../MatchResults");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var wins = 0;
        var teamsWon;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[3] > match[4] || match[4] > match[3]) {
                teamsWon = MatchResults_1.MatchResult.HomeWin;
            }
            if (match[1] === "Manchester United" &&
                teamsWon === MatchResults_1.MatchResult.HomeWin) {
                wins++;
            }
        }
        return this.team + " Won: " + wins + " times :)";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
