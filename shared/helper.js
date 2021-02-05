export function isMultiPlayer(playerCount) {
  if (playerCount > 1) {
    return true;
  }

  return false;
}

export function convertCharToNumber(char) {
  return char.toUpperCase().charCodeAt(0) - 64;
}

export function getSocialInfoValue(type, neighbors) {
  if (!neighbors) {
    console.warn("No neighbors on getSocialInfovalue!");
    return 0;
  }

  const values = neighbors.map(
    (p) => p.stage.get("tmpanswer") || p.round.get("answer") || 0
  );

  if (values.length === 0) {
    return 0;
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
      return 0;
  }
}

export function getMeanValue(values) {
  const getSum = (total, num) => {
    return total + num;
  };

  let result = values.reduce(getSum, 0);
  result = (result / values.length).toFixed(2);
  return result;
}
export function getMinValue(values) {
  return Math.min(...values);
}
export function getMaxValue(values) {
  return Math.max(...values);
}
export function getMedianValue(values) {
  const mid = Math.floor(values.length / 2);
  const nums = [...values].sort((a, b) => a - b);
  return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
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
