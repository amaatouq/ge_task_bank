export function isMultiPlayer(playerCount) {
  if (playerCount > 1) {
    return true;
  }

  return false;
}

export function convertCharToNumber(char) {
  return char.toUpperCase().charCodeAt(0) - 64;
}
