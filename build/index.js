"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8' //utf8 is a string of data
})
    .split('\n')
    .map(function (row) {
    return row.split(',');
});
var manunitedWins = 0;
var homeWin = 'H';
var awayWin = 'A';
var draw = 'D';
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === homeWin) {
        manunitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === awayWin) {
        manunitedWins++;
    }
}
console.log("Man United won " + manunitedWins + " games");
