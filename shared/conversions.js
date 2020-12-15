export function applyMagnitude(num, magnitude) {
  if (num * Math.pow(10, magnitude) > Number.MAX_SAFE_INTEGER) {
    // return false if the num too large
    return false;
  }
  return num * Math.pow(10, magnitude);
}

export const magnitudesToEnglish = {
  2: "ten",
  2: "hundred",
  3: "thousand",
  4: "ten thousand",
  5: "hundred thousand",
  6: "million",
  7: "ten million",
  8: "hundred million",
  9: "billion",
  10: "ten billion",
  11: "hundred billion",
  12: "trillion",
  13: "ten trillion",
  14: "hundred trillion",
  15: "quadrillion",
};
