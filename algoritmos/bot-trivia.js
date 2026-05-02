/*
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should log "Hello! I'm your coding fun fact guide!" to the console as a greeting message to the user.
You should create three variables: botName, botLocation, and favoriteLanguage, that store the bot's name, where it's from, and its favorite coding language, respectively.
You should log "My name is (botName) and I live on (botLocation)." to the console.
You should log "My favorite programming language is (favoriteLanguage)." to the console.
You should use let to create a codingFact variable and assign it a string that is a fun fact about your bot's favorite coding language and include the use of the favoriteLanguage variable.
You should log the codingFact to the console.
You should reassign the codingFact variable to a new fact about the bot's favorite language using the favoriteLanguage variable again.
You should log the codingFact to the console again.
You should reassign the codingFact variable again to another new fact about the bot's favorite language using the favoriteLanguage variable.
You should log the codingFact to the console a third time.
You should log "It was fun sharing these facts with you. Goodbye! - (botName) from (botLocation)." to the console as a farewell statement from the bot. 
*/

console.log("Hello! I'm your coding fun fact guide!");
const botName = "triviaBot";
const botLocation = "Brazil";
const favoriteLanguage = "JavaScript";

console.log("My name is " + botName + " and I live on " + botLocation + ".");

console.log("My favorite programming language is " + favoriteLanguage + ".");

let codingFact = favoriteLanguage + " was developed in just 10 days by Brendan Eich in 1995!";
console.log(codingFact);

codingFact = "null is a object in " + favoriteLanguage + ".";
console.log(codingFact);

codingFact = "This language had two different names proposed, the first was Mocha, after was change to LiveScript then " + favoriteLanguage + ".";
console.log(codingFact);

const goodBye = "It was fun sharing these facts with you. Goodbye! - " + botName + " from " + botLocation + ".";
console.log(goodBye);