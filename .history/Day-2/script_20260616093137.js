const accountId = 144834;
let accountEmail = "ad@ad.com";
var accountPassword = "12345";
accountCity = "Hyderabad";

let accountState;

// accountId = 83838383; // not allowed

accountEmail = "adnan@gmail.com";
accountPassword = "54321";
accountCity = "Goa";

// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
 prefer not to use var 
 because of issue in block scope and functional scope.
*/