export function isMultiPlayer(playerCount) {
  if (playerCount > 1) {
    return true;
  }

  return false;
}

export function convertCharToNumber(char) {
  return char.toUpperCase().charCodeAt(0) - 64;
}

export function getSocialInfoValue(type, values) {
  switch (type) {
    case "mean":
      getMeanValue(values);
      break;
    case "min":
      getMinValue(values);
      break;
    case "max":
      getMaxValue(values);
      break;
    case "median":
      getMedianValue(values);
      break;

    default:
      console.warn("Social info type is not supported!");
      break;
  }
}

export function getMeanValue(values) {}
export function getMinValue(values) {}
export function getMaxValue(values) {}
export function getMedianValue(values) {}

export function getNeighbors(structure, player) {
  const neighbors = [];
  let network = structure.split(",");

  network.forEach((n) => {
    const connection = n.split("-");
    const playerIndex = player.get("index") + 1;

    if (playerIndex === parseInt(connection[0])) {
      neighbors.push(connection[1] - 1);
    } else if (playerIndex === parseInt(connection[1])) {
      neighbors.push(connection[0] - 1);
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
