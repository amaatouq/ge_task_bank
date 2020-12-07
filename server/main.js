import Empirica from "meteor/empirica:core";
import { avatarNames } from "../shared/avatars.js";
import "./bots.js";
import "./callbacks.js";
import { taskData } from "./questions";

// gameInit is where the structure of a game is defined.
// Just before every game starts, once all the players needed are ready, this
// function is called with the treatment and the list of players.
// You must then add rounds and stages to the game, depending on the treatment
// and the players. You can also get/set initial values on your game, players,
// rounds and stages (with get/set methods), that will be able to use later in
// the game.
Empirica.gameInit((game) => {
  const {
    treatment: {
      nRounds = 15,
      randomizeTask,
      taskType,
      responseDuration = 30,
      feedback,
      feedbackDuration = 30,
      longTermEngagement,
      quitEarly,
    },
  } = game;

  check(nRounds <= 0, "nRounds should be > 0");
  check(responseDuration <= 0, "responseDuration should be > 0");
  check(feedback && feedbackDuration <= 0, "feedbackDuration should be > 0");
  check(
    longTermEngagement && game.players.length > 1,
    "longTermEngagement cannot be used with more than 1 player",
    false
  );
  check(
    !longTermEngagement && quitEarly,
    "Cannot have quitEarly without longTermEngagement",
    false
  );

  // Player info

  const avatars = _.shuffle(avatarNames);

  game.players.forEach((player, i) => {
    player.set("avatar", avatars.pop());
    player.set("score", 0);
  });

  // Task selection

  let tasks = taskData.slice();

  if (taskType) {
    const t = Object.fromEntries(taskType.split(",").map((i) => [i, true]));
    tasks = tasks.filter((task) => t[task.task]);
  }

  check(
    tasks.length === 0,
    `Task list is empty! Is the taskList correct?
  It should be a comma-separated list of task types, like so: 
  
    daily_life_facts,population_of_large_cities,geopolitics`
  );

  if (randomizeTask) {
    tasks = _.shuffle(tasks);
  }

  // Round/Stage info

  _.times(nRounds, (i) => {
    const round = game.addRound();
    round.set("task", tasks[i]);
    round.addStage({
      name: "response",
      displayName: "Response",
      // durationInSeconds: responseDuration,
      durationInSeconds: 1000,
    });

    if (feedback) {
      round.addStage({
        name: "feedback",
        displayName: "Feedback",
        // durationInSeconds: feedbackDuration,
        durationInSeconds: 1000,
      });
    }

    if (longTermEngagement) {
      round.addStage({
        name: "wait",
        displayName: "Wait",
        durationInSeconds: 31540000, // 1 year
      });
    }
  });
});

function check(condition, message, shouldThrow = true) {
  if (condition) {
    console.error(`
    
    ${message}

`);
    if (shouldThrow) {
      throw `Failed to init Game (see reason above)`;
    }
  }
}
