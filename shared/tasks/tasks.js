export const instructions = {
  guess_the_correlation: {
    text: `
Correlation measures how closely related two variables are. For the example
below, if tall kids tend to be heavy, and short kids tend to be light, we would
say that height and weight are correlated.

![Height and age correlation graph](/instructions/height-age.png)

In this task, your correlation guess can range from 0 to 1, and the closer the
points fit to a straight line, the closer the correlation will be to 1. No
calculations are necessary, just make your best estimate.

![Correlation graph examples](/instructions/correlation-examples.png)
    `,
  },
};

export const taskData = [
  // guess the correlation questions

  {
    id: 1,
    class: "visual_perception",
    task: "guess_the_correlation",
    question: {
      image: "/tasks/gtc_0.png",
      text:
        "What is the correlation between the X and Y variable in this scatter plot?",
      min: 0,
      hints: [
        "hint1", "hint2", "hint3", "hint4"
      ],
    },
    answer: 0.09,
  },
];
