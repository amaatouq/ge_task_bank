import { deepCopy } from "./helperFunctions/deepCopy";
import { popChoice } from "./helperFunctions/popChoice";

export function isMultiPlayer(playerCount) {
  if (playerCount > 1) {
    return true;
  }

  return false;
}

export function convertCharToNumber(char) {
  return char.toUpperCase().charCodeAt(0) - 64;
}

export function getMinMaxErrorMessage(answer, task) {
  const err = getMinMaxError(answer, task);
  switch (err) {
    case "min":
      return `Answer should be at least ${task.question.min}.`;
    case "max":
      return `Answer should be at most ${task.question.max}.`;
    default:
      return "";
  }
}

export function getMinMaxError(answer, task) {
  if (task.question.min !== undefined) {
    if (answer < task.question.min) {
      return "min";
    }
  }

  if (task.question.max !== undefined) {
    if (answer > task.question.max) {
      return "max";
    }
  }
}

export function getSocialInfoValue(type, neighbors, task) {
  if (!neighbors) {
    console.warn("No neighbors on getSocialInfovalue!");
    return 0.0;
  }

  const values = neighbors
    .map((p) => {
      const answer = p.round.get("answer");

      if (answer === undefined) {
        return 0;
      }

      if (task.question.min !== undefined) {
        if (answer < task.question.min) {
          return null;
        }
      }
      if (task.question.max !== undefined) {
        if (answer > task.question.max) {
          return null;
        }
      }

      return answer;
    })
    .filter((a) => a !== null);

  if (values.length === 0) {
    return 0.0;
  }

  switch (type) {
    case "mean":
      return getMeanValue(values);
    case "min":
      return getMinValue(values);
    case "max":
      return getMaxValue(values);
    case "median":
      return getMedianValue(values);
    default:
      console.warn("Social info type is not supported!");
      return 0.0;
  }
}

export function getMeanValue(values) {
  const getSum = (total, num) => {
    return total + num;
  };

  let result = values.reduce(getSum, 0);
  result = (result / values.length).toFixed(1);
  return result;
}
export function getMinValue(values) {
  return Math.min(...values).toFixed(1);
}
export function getMaxValue(values) {
  return Math.max(...values).toFixed(1);
}
export function getMedianValue(values) {
  const mid = Math.floor(values.length / 2);
  const nums = [...values].sort((a, b) => a - b);
  const value =
    values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;

  if (!value) {
    console.error("median value is invalid");
    return 0.0;
  }

  return value.toFixed(1);
}

export function getNeighbors(structure, player) {
  const neighbors = [];
  let network = structure.split(",");

  network.forEach((n) => {
    const connection = n.split("-");
    const playerIndex = player.get("index");

    if (playerIndex === parseInt(connection[0])) {
      neighbors.push(connection[1]);
    } else if (playerIndex === parseInt(connection[1])) {
      neighbors.push(connection[0]);
    }
  });

  return _.uniq(neighbors, true);
}

export function getOtherPlayers(players, player) {
  return _.reject(players, (p) => p._id === player._id);
}

export function getChatGroups(chatGroupsTreatment, player) {
  const groups = [];
  let chatGroups = chatGroupsTreatment.split(",");

  chatGroups.forEach((g) => {
    const connection = g.split("-");

    if (player.get("index") !== parseInt(connection[0])) {
      return;
    }

    groups.push(connection[1]);
  });

  return groups.sort();
}

export function getNeighborPlayers(player, game) {
  const neighborIndexes = player.get("neighbors");
  const neighbors = [];

  neighborIndexes.forEach((i) => {
    const neighbor = game.players.find((p) => p.get("index") === parseInt(i));

    if (neighbor) {
      neighbors.push(neighbor);
    }
  });

  return neighbors;
}

export function getHints(player, round, game) {
  const { treatment } = game;
  const task = round.get("task");
  const possibleHints = task.question.hints;

  if (!possibleHints || possibleHints.length === 0) {
    return null;
  }

  //To allow for random hints we need to ensure:
  // - the hint won't change every time the component updates
  // - the hint will have the possibility to be different for every participant
  // SOLUTION: Set the hints to the player
  // The player will get a "hints" attribute on gameInit which is an empty object
  // The round will have an index set according to the round number it is (0 to nRound)
  // As the rounds go, the "hints" of the player will be populated, where each key is the index of the round
  // BONUS: This allows us to track which hints player got at which round.

  // If the hints are already set you want to get those instead of resetting them...
  let hints;
  if (typeof player.get("hints")[round.get("index")] != "undefined") {
    hints = player.get("hints")[round.get("index")];
  } else {
    //If they are not set, you want to set them...
    hints = [];

    // If there is a configuration set in the treatment.hint, use it to select the hints
    if (treatment.hints) {
      const hintsConf = JSON.parse(treatment.hints);
      const configuration = hintsConf[player.get("index").toString()];

      if (!configuration) {
        return null;
      }

      // Everytime there is a non-numeric entry in the configuration, it will become a random hint.
      // Keep track of how many non-numeric entries there are
      let nbRandomHints = 0;
      // Create a copy of the possible hints, and take out each hint that is not randomly assigned to the hints
      // (namely, assigned based on indexes set in the configuration)
      // (this needs to be a deepCopy to not modify the possibleHints)
      let randomPossibleHints = deepCopy(possibleHints);

      // For each value of the configuration...
      configuration.forEach((config) => {
        // If numeric...
        if (typeof config == "number") {
          // ...check that there could be a hint with this index (it doesn't return undefined)
          if (typeof possibleHints[config - 1] != "undefined") {
            // ...push the hint that has this index
            hints.push(possibleHints[config - 1]);
            // and take this hint out of the hints ready to be selected randomly
            randomPossibleHints.splice(config - 1, 1);
          }
        } else {
          // Else, increase the number of random hints
          nbRandomHints++;
        }
      });

      // For every random hint that is needed...
      if (nbRandomHints > 0) {
        for (let i = 0; i < nbRandomHints; i++) {
          // Randomly select a hint (and take it out) with popChoice
          hints.push(popChoice(randomPossibleHints));
        }
      }
    } else {
      // Else, just allocate all the hints
      hints = possibleHints;
    }

    // Populate the player's hints
    let playerHints = player.get("hints");
    playerHints[round.get("index")] = hints;
    player.set("hints", playerHints);
  }

  return hints;
}
