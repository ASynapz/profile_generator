const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", name => {
  console.log(`Thank you for your valuable feedback: ${name}`);
  rl.question("What's an activity you like doing? :) ", activity => {
    console.log(`Thank you for your valuable feedback: ${name}`);
    rl.question("What do you listen to while doing that? :) ", music => {
      console.log(`Thank you for your valuable feedback: ${name}`);
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.) :) ",
        mealType => {
          console.log(`Thank you for your valuable feedback: ${name}`);
          rl.question(
            "What's your favourite thing to eat for that meal? :) ",
            meal => {
              console.log(`Thank you for your valuable feedback: ${name}`);
              rl.question(
                "Which sport is your absolute favourite? :) ",
                sport => {
                  console.log(`Thank you for your valuable feedback: ${name}`);
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at! :) ",
                    superpower => {
                      console.log(
                        `Thank you for your valuable feedback: ${name}`
                      );
                      console.log(
                        `${name} loves listening to ${music} while ${activity}, devouring ${meal} for ${mealType}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`
                      );
                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});