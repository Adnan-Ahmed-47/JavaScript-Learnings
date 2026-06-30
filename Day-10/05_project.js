const scoreboard = [
    { name: "Virat", runs: 85, balls: 50, fours: 9, sixes: 3 },
    { name: "Rohit", runs: 43, balls: 22, fours: 4, sixes: 2 },
    { name: "Hardik", runs: 28, balls: 12, fours: 1, sixes: 2 },
    { name: "Suryakumar", runs: 61, balls: 30, fours: 6, sixes: 4 }
];

// Strike Rate
const viratStrikeRate = (scoreboard[0].runs/scoreboard[0].balls) * 100;
const rohitStrikeRate = (scoreboard[1].runs/scoreboard[1].balls) * 100;
const hardikStrikeRate = (scoreboard[2].runs/scoreboard[2].balls) * 100;
const suryaStrikeRate = (scoreboard[3].runs/scoreboard[3].balls) * 100;

const strikeRateDirectory = {
    [scoreboard[0].name]: viratStrikeRate.toFixed(1),
    [scoreboard[1].name]: rohitStrikeRate.toFixed(1),
    [scoreboard[2].name]: hardikStrikeRate.toFixed(1),
    [scoreboard[3].name]: suryaStrikeRate.toFixed(1),
}
console.log("Strike Rate: ", strikeRateDirectory)

// -------------------------------------------------------------------------------

// Highest Scorer

const highestScorer = Math.max(
    scoreboard[0].runs,
    scoreboard[1].runs,
    scoreboard[2].runs,
    scoreboard[3].runs,
);
const scorerDirectory = {
    [scoreboard[0].runs]: scoreboard[0],
    [scoreboard[1].runs]: scoreboard[1],
    [scoreboard[2].runs]: scoreboard[2],
    [scoreboard[3].runs]: scoreboard[3],
}
console.log("Highest Scorer: ", scorerDirectory[highestScorer])

// -------------------------------------------------------------------------------

// Team Total

const totalRuns = scoreboard[0].runs + scoreboard[1].runs + scoreboard[2].runs + scoreboard[3].runs;

console.log("Team Total: ", totalRuns)

// -------------------------------------------------------------------------------

// Average Runs

const averageRuns = (scoreboard[0].runs + scoreboard[1].runs + scoreboard[2].runs + scoreboard[3].runs)/scoreboard.length;

console.log("Average Runs: ", averageRuns)