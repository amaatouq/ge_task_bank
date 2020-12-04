import Empirica from "meteor/empirica:core";
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
      stageDuration = 60,
      feedback,
      feedbackDuration = 10,
    },
  } = game;
  game.players.forEach((player, i) => {
    player.set("avatar", `/avatars/jdenticon/${player._id}`);
    player.set("score", 0);
  });

  const tasks = randomizeTask ? _.shuffle(taskData) : taskData;

  _.times(nRounds, (i) => {
    const round = game.addRound();
    round.set("task", tasks[i]);
    round.addStage({
      name: "response",
      displayName: "Response",
      durationInSeconds: stageDuration,
    });

    if (feedback) {
      round.addStage({
        name: "outcome",
        displayName: "Outcome",
        durationInSeconds: feedbackDuration,
      });
    }
  });
});
