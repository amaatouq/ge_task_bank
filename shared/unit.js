import { magnitudesToEnglish } from "./conversions";
import pluralize from "pluralize";

export function getUnit({ round, answer, magnitude }) {
  const task = round.get("task");

  let unit = task.question.unit;
  if (!unit) {
    return "";
  }

  if (magnitude && task.question.magnitude) {
    unit = magnitudesToEnglish[task.question.magnitude] + " " + unit;
  }

  const a = parseInt(answer || 0, 10);
  unit = pluralize(unit, a);
  return unit;
}
