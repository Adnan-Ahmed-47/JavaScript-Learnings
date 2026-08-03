// Project 5 — Cricket Scoreboard Pro

// Features:

// Calculate strike rate.
// Find highest scorer.
// Find players with strike rate above 150.
// Calculate total team runs.
// Find average runs.
// Print scorecard.

// ++++++++++++++++++++++++++++++ SOLUTION ++++++++++++++++++++++++++++++++++++++++++++++
const cricketScoreboard = [
  {
    playerId: "CRIC-001",
    playerName: "Virat Kohli",
    runsScored: 82,
    ballsFaced: 53,
    fours: 6,
    sixes: 4,
    isOut: true
  },
  {
    playerId: "CRIC-002",
    playerName: "Rohit Sharma",
    runsScored: 45,
    ballsFaced: 28,
    fours: 4,
    sixes: 3,
    isOut: true
  },
  {
    playerId: "CRIC-003",
    playerName: "Suryakumar Yadav",
    runsScored: 55,
    ballsFaced: 25,
    fours: 5,
    sixes: 4,
    isOut: false
  },
  {
    playerId: "CRIC-004",
    playerName: "Hardik Pandya",
    runsScored: 30,
    ballsFaced: 12,
    fours: 2,
    sixes: 3,
    isOut: false
  },
  {
    playerId: "CRIC-005",
    playerName: "Rishabh Pant",
    runsScored: 12,
    ballsFaced: 10,
    fours: 1,
    sixes: 0,
    isOut: true
  }
];


// Feature 1: Calculate strike rate
function calculateStrikeRate(name) {
    let strikeRate;
    const playerDetails = cricketScoreboard.filter((player) => {
        if(player.playerName === name) {
            strikeRate = (player.runsScored / player.ballsFaced) * 100;
        }
    })
    return strikeRate;
}
console.log(calculateStrikeRate("Rishabh Pant"))


// Feature 2: Find highest scorer
function highestScorer() {
    let score = 0
    let highestScorer;
    const highest = cricketScoreboard.filter((player) => {
        if(player.runsScored > score) {
            score = player.runsScored
            highestScorer = player
        }
    })
    return highestScorer;
}

console.log(highestScorer())


// Feature 3: Find players with strike rate above 150
function playerStrikeRate() {
    const strike = cricketScoreboard.filter((item) => {
        let strikerate = (item.runsScored / item.ballsFaced) * 100;
        console.log(strikerate)
        if(strikerate > 150) {
            return item
        }
    })
    console.log(strike)
    return strike
}
playerStrikeRate()


// Feature 4: Calculate total team runs
function calculateTeamRuns() {
    const runs = cricketScoreboard.reduce((acc, player) => {
        return acc += player.runsScored
    }, 0)
    return runs
}
console.log("Total Runs scored by whole team: ", calculateTeamRuns())


// Feature 5: Find Average Runs
function averageRuns() {
    let players = cricketScoreboard.length;
    const totalruns = cricketScoreboard.reduce((acc, player) => {
        return acc += player.runsScored
    }, 0)

    const average = totalruns/players;
    return average;
}
console.log(`Average Runs: ${averageRuns()}`)


// Feature 6: Print scorecard
function scorecard() {
    console.log("============================================================")
    console.log("🏏 MATCH SCORECARD 🏏")
    console.log("============================================================")

    // console.log("Player Name", "Runs", "Balls", "4s", "6s", "SR", "Status")
    // Use a single concatenated string with padEnd for perfect column alignment
    console.log(
        "Player Name".padEnd(20) + 
        "Runs".padEnd(6) + 
        "Balls".padEnd(7) + 
        "4s".padEnd(4) + 
        "6s".padEnd(4) + 
        "SR".padEnd(8) + 
        "Status"
    );
    console.log("------------------------------------------------------------")
    // const playerDetails = cricketScoreboard.map((item) => {
    //     console.log(item.playerName, item.runsScored, item.ballsFaced, item.fours, item.sixes, item.isOut)
    // })
    // Loop through the data to compute and format values row by row
    cricketScoreboard.forEach((item) => {
        // Calculate Strike Rate: (Runs / Balls) * 100
        const strikeRate = ((item.runsScored / item.ballsFaced) * 100).toFixed(2);
        
        // Translate true/false boolean into a user-friendly status text
        const statusText = item.isOut ? "OUT" : "NOT OUT";

        // Print aligned row using string concatenation
        console.log(
            item.playerName.padEnd(20) + 
            item.runsScored.toString().padEnd(6) + 
            item.ballsFaced.toString().padEnd(7) + 
            item.fours.toString().padEnd(4) + 
            item.sixes.toString().padEnd(4) + 
            strikeRate.padEnd(8) + 
            statusText
        );
    });

    console.log("------------------------------------------------------------")
    console.log(`TOTAL TEAM RUNS: ${calculateTeamRuns()}`)
    console.log("============================================================")


}
scorecard()
