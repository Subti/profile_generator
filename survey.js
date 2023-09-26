const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name (Nicknames acceptable ^o^)? `, (name) => {
  rl.question(`What's an activity you like doing? `, (activity) => {
    rl.question(`What do you listen to while doing that? `, (listen) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (meal) => {
        rl.question(`What's your favourite thing to eat for that meal? `, (food) => {
          rl.question(`Which sport is your absolute favourite? `, (sport) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (power) => {
              console.log(`${name} loves listening to ${listen} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${power}`);
              rl.close();
            })
          })
        })
      })
    })
  })
});