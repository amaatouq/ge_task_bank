export const instructions = {
  guess_the_correlation: {
    text: `
Correlation measures how closely related two variables are. For the example
below, if tall kids tend to be heavy, and short kids tend to be light, we would
say that height and weight are correlated.

![/instructions/height-age.png](Height and age correlation graph)

In this task, your correlation guess can range from 0 to 1, and the closer the
points fit to a straight line, the closer the correlation will be to 1. No
calculations are necessary, just make your best estimate.

![/instructions/correlation-examples.png](Correlation graph examples)
    `,
  },
  geopolitics: {
    text: `
The Armed Conflict Location & Event Data Project (ACLED) is a non-governmental 
organization that tracks violent conflict in Asia, the Middle East, and Africa. 
One type of event they track is those where civilians were intentionally targeted.  
In 2018, they recorded 841 such events in Somalia.
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
      answer: 0.09,
    },
  },
  {
    id: 2,
    class: "visual_perception",
    task: "guess_the_correlation",
    question: {
      image: "/tasks/gtc_2.png",
      text:
        "What is the correlation between the X and Y variable in this scatter plot?",
      answer: 0.91,
    },
  },
  {
    id: 3,
    class: "visual_perception",
    task: "guess_the_correlation",
    question: {
      image: "/tasks/gtc_3.png",
      text:
        "What is the correlation between the X and Y variable in this scatter plot?",
      answer: 0.47,
    },
  },
  {
    id: 4,
    class: "visual_perception",
    task: "guess_the_correlation",
    question: {
      image: "/tasks/gtc_11.png",
      text:
        "What is the correlation between the X and Y variable in this scatter plot?",
      answer: 0.78,
    },
  },
  {
    id: 5,
    class: "visual_perception",
    task: "guess_the_correlation",
    question: {
      image: "/tasks/gtc_14.png",
      text:
        "What is the correlation between the X and Y variable in this scatter plot?",
      answer: 0.09,
    },
  },
  {
    id: 6,
    class: "visual_perception",
    task: "guess_the_correlation",
    question: {
      image: "/tasks/gtc_18.png",
      text:
        "What is the correlation between the X and Y variable in this scatter plot?",
      answer: 0.03,
    },
  },

  // counting objects questions

  {
    id: 7,
    class: "visual_perception",
    task: "counting_objects",
    question: {
      image: "/tasks/marbles_1.jpg",
      text: "How many marbles are in this jar?",
      answer: 100,
      unit: "marble",
    },
  },

  {
    id: 8,
    class: "visual_perception",
    task: "counting_objects",
    question: {
      image: "/tasks/marbles_2.jpg",
      text: "How many marbles are in this jar?",
      answer: 450,
      unit: "marble",
    },
  },
  {
    id: 9,
    class: "visual_perception",
    task: "counting_objects",
    question: {
      image: "/tasks/matches_1.jpg",
      text: "How many matches can you see?",
      answer: 240,
      unit: "match",
    },
  },
  {
    id: 10,
    class: "visual_perception",
    task: "counting_objects",
    question: {
      image: "/tasks/matches_2.jpg",
      text: "How many matches can you see?",
      answer: 480,
      unit: "match",
    },
  },
  {
    id: 11,
    class: "visual_perception",
    task: "counting_objects",
    question: {
      image: "/tasks/matches_3.jpg",
      text: "How many matches can you see?",
      answer: 720,
      unit: "match",
    },
  },

  // length of objects questions

  {
    id: 12,
    class: "visual_perception",
    task: "length_of_objects",
    question: {
      image: "/tasks/Rope_200.jpg",
      text: "In your opinion, how long is this rope (in cm)?",
      answer: 200,
      unit: "cm",
    },
  },
  {
    id: 13,
    class: "visual_perception",
    task: "length_of_objects",
    question: {
      image: "/tasks/Rope_700.jpg",
      text: "In your opinion, how long is this rope (in cm)?",
      answer: 700,
      unit: "cm",
    },
  },

  // population of large cities questions

  {
    id: 14,
    class: "trivia_questions",
    task: "population_of_large_cities",
    hints: [
      "There are approximately 8.4 million people who live in just New York City.",
    ],
    question: {
      image: "",
      text: "What is the population of New York City and it‘s agglomeration?",
      answer: 21000000,
      unit: "people",
    },
  },
  {
    id: 15,
    class: "trivia_questions",
    task: "population_of_large_cities",
    question: {
      image: "",
      text: "What is the population of Madrid and it‘s agglomeration?",
      answer: 6500000,
      unit: "people",
    },
  },
  {
    id: 16,
    class: "trivia_questions",
    task: "population_of_large_cities",
    question: {
      image: "",
      text: "What is the population of Amsterdam and it‘s agglomeration?",
      answer: 1600000,
      unit: "people",
    },
  },
  {
    id: 17,
    class: "trivia_questions",
    task: "population_of_large_cities",
    question: {
      image: "",
      text: "What is the population of Tokyo and it‘s agglomeration?",
      answer: 38000000,
      unit: "people",
    },
  },
  {
    id: 18,
    class: "trivia_questions",
    task: "population_of_large_cities",
    question: {
      image: "",
      text: "What is the population of Melbourne and it‘s agglomeration?",
      answer: 4500000,
      unit: "people",
    },
  },
  {
    id: 19,
    class: "trivia_questions",
    task: "population_of_large_cities",
    question: {
      image: "",
      text: "What is the population of Seoul and it‘s agglomeration?",
      answer: 26000000,
      unit: "people",
    },
  },
  {
    id: 20,
    class: "trivia_questions",
    task: "population_of_large_cities",
    question: {
      image: "",
      text: "What is the population of Shanghai and it‘s agglomeration?",
      answer: 25000000,
      unit: "people",
    },
  },

  // add hints to daily life facts questions

  {
    id: 21,
    class: "trivia_questions",
    task: "daily_life_facts",
    question: {
      image: "",
      text:
        "How many kilometers does a professional cyclist typically bike a year?",
      answer: 40000,
      unit: "km",
    },
  },
  {
    id: 22,
    class: "trivia_questions",
    task: "daily_life_facts",
    hints: [
      "The mean annual gross salary of a professional English Premier League Player in England is 732,288 euros",
    ],
    question: {
      image: "",
      text:
        "What is the mean annual gross salary of a professional league 1 soccer player in France (in euros)?",
      answer: 600000,
      unit: "euros",
    },
  },
  {
    id: 23,
    class: "trivia_questions",
    task: "daily_life_facts",
    hints: ["22.74 million cell phones were sold in germany in 2018."],
    question: {
      image: "",
      text: "How many cell phones are sold in France every year?",
      answer: 22000000,
      unit: "eaches",
    },
  },
  {
    id: 24,
    class: "trivia_questions",
    task: "daily_life_facts",
    hints: ["Italy has 300,000 cars stolen every year."],
    question: {
      image: "",
      text: "How many cars are stolen in France every year?",
      answer: 110000,
      unit: "eaches",
    },
  },
  {
    id: 25,
    class: "trivia_questions",
    task: "daily_life_facts",
    hints: ["There were 85.5 million ebooks sold in Britain in 2015."],
    question: {
      image: "",
      text: "How many ebooks were sold in France in 2014?",
      answer: 10700000,
      unit: "eaches",
    },
  },
  {
    id: 26,
    class: "trivia_questions",
    task: "daily_life_facts",
    hints: [
      "There are around 53 million books in the New York Public Library.",
    ],
    question: {
      image: "",
      text: "How many books does the American Library of Congress hold?",
      answer: 23000000,
      unit: "eaches",
    },
  },
  {
    id: 27,
    class: "trivia_questions",
    task: "daily_life_facts",
    hints: ["The flu kills 646,000 people every year."],
    question: {
      image: "",
      text: "How many people die from cancer in the world every year?",
      answer: 15000000,
      unit: "people",
    },
  },

  // art market questions

  {
    id: 28,
    meta: {
      class: "trivia_questions",
      type: "art_market",
    },
    hints: [
      "The painting is by Vincent Van Gogh, and it is 18 inches tall by 20 inches wide, charcoal on paper.",
    ],
    question: {
      image: "/tasks/van_Gogh_Planteuse_de_betteraves,_by_Vincent_van_Gogh.jpg",
      text:
        "This painting was sold at an auction in May, 2018. How much did it sell for?",
      answer: 3600000,
      unit: "dollar",
    },
  },
  {
    id: 29,
    meta: {
      class: "trivia_questions",
      type: "art_market",
    },
    hints: [
      "The painting is by Pablo Picasso, and it is 64 inches tall by 51 inches wide, oil on canvas",
    ],
    question: {
      image: "/tasks/picasso.jpg",
      text:
        "This painting was sold at an auction in November, 2018. How much did it sell for? ",
      answer: 29600000,
      unit: "dollar",
    },
  },

  // Socioeconomic questions

  {
    id: 30,
    invalid: true,
    meta: {
      class: "trivia_questions",
      type: "socioeconomic",
    },
    hints: [
      "Across all colleges where the US Department of Education collected data,the average tuition revenue per full time (or equivalent) student was $10,438 per year.",
    ],
    question: {
      image: "",
      text:
        "In terms of dollars, how much money do you think was spent on instruction in college, per student?",
      answer: 7912,
      unit: "dollar",
    },
  },
  // what is the answer??
  {
    id: 31,
    meta: {
      class: "trivia_questions",
      type: "socioeconomic",
    },
    hints: [
      "In 2009, approximately 690 million passengers boarded a plane.  (So a round-trip flight counts for 2 passengers boarding.)",
    ],
    question: {
      image: "",
      text:
        "How many passengers boarded out of an airport in the New York City area (JFK, La Guardia, and Newark) in 2009?",
      answer: 79120000,
      unit: "people",
    },
  },

  // crowdfunding questions

  {
    id: 32,
    meta: {
      class: "trivia_questions",
      type: "crowdfunding",
    },
    hints: [
      "Consider this crowdfunding campaign: The goal of this app is to promote new music discovery in a fun and different way.  This app would allow musicians to “drop” songs at specific physical locations.  Anyone using the app would then be able to listen to the song by visiting that location. The app sought £30,000 (British pounds) and offered funders equity in the company, with a total equity of 35% for the whole campaign.",
    ],
    question: {
      image: "",
      text: "How much money do you think the campaign raised?",
      answer: 30000,
      unit: "pounds",
    },
  },
  {
    id: 33,
    meta: {
      class: "trivia_questions",
      type: "crowdfunding",
    },
    hints: [
      "Consider this crowdfunding campaign: The product is headphones designed for dance music.  The goal of the product is to replicate the sound style of being in a club or party.  The campaign followed a successful prior round of funding, and the company has already sold thousands of units.This campaign sought an additional £100,000 (British pounds) in exchange for equity in the company, and ended up exceeding their goals.",
    ],
    question: {
      image: "",
      text: "How much money do you think the campaign raised?",
      answer: 142770,
      unit: "pounds",
    },
  },

  // geopolitics questions

  {
    id: 34,
    meta: {
      class: "trivia_questions",
      type: "geopolitics",
    },
    question: {
      image: "",
      text:
        "How many of type of events like this do you think they recorded in Yemen for 2018?",
      answer: 609,
      unit: "eaches",
    },
  },
  {
    id: 35,
    meta: {
      class: "trivia_questions",
      type: "geopolitics",
    },
    question: {
      image: "",
      text:
        "How many of type of events like this do you think they recorded in Syria for 2018?",
      answer: 1501,
      unit: "eaches",
    },
  },

  // extreme events questions

  {
    id: 36,
    meta: {
      class: "trivia_questions",
      type: "extreme_events",
    },
    question: {
      image: "",
      text: "What is the radius of the Sun (in km)?",
      answer: 696000,
      unit: "km",
    },
  },
  {
    id: 37,
    meta: {
      class: "trivia_questions",
      type: "extreme_events",
    },
    question: {
      image: "",
      text: "What is the distance between the Earth and the Moon (in km)?",
      answer: 385000,
      unit: "km",
    },
  },
  {
    id: 38,
    meta: {
      class: "trivia_questions",
      type: "extreme_events",
    },
    question: {
      image: "",
      text:
        "What is the mean distance between planet Mercury and the Sun (in km)?",
      answer: 57800000,
      unit: "km",
    },
  },
  {
    id: 39,
    meta: {
      class: "trivia_questions",
      type: "extreme_events",
    },
    question: {
      image: "",
      text:
        "What is the total mass of oceans on Earth (in thousand billion of metric tons)?",
      answer: 1400000000000000,
      magnitude: 12,
      unit: "metric ton",
    },
  },
  {
    id: 40,
    meta: {
      class: "trivia_questions",
      type: "extreme_events",
    },
    question: {
      image: "",
      text:
        "How many cells are there in the human body (in billions of cells)?",
      answer: 100000000000000,
      magnitude: 9,
      unit: "cell",
    },
  },
  {
    id: 41,
    meta: {
      class: "trivia_questions",
      type: "extreme_events",
    },
    question: {
      image: "",
      text:
        "How many galaxies does the visible universe hold (in million galaxies)?",
      answer: 100000000000,
      magnitude: 6,
      unit: "galaxy",
    },
  },
  {
    id: 42,
    meta: {
      class: "trivia_questions",
      type: "extreme_events",
    },
    question: {
      image: "",
      text: "How many stars does the Milky way hold (in million stars)?",
      answer: 235000000000,
      magnitude: 6,
      unit: "star",
    },
  },
  {
    id: 43,
    meta: {
      class: "trivia_questions",
      type: "extreme_events",
    },
    question: {
      image: "",
      text: "How many billions kilometers is worth a light-year?",
      answer: 9461000000000,
      magnitude: 9,
      unit: "km",
    },
  },

  // other questions

  {
    id: 44,
    meta: {
      class: "Trivia Questions",
      type: "others",
    },
    question: {
      image: "",
      text: "What is the mass of the Cheops pyramid (in metric tons)?",
      answer: 5000000,
      unit: "metric ton",
    },
  },
  {
    id: 45,
    meta: {
      class: "Trivia Questions",
      type: "others",
    },
    question: {
      image: "",
      text:
        "What is the total length of the metal threads used in the Golden Gate Bridge’s braided cables (in km)?",
      answer: 129000,
      unit: "km",
    },
  },
  {
    id: 46,
    meta: {
      class: "Trivia Questions",
      type: "others",
    },
    question: {
      image: "",
      text:
        "How much did Burj Khalifa Tower, in Dubai, cost to build (in thousands of dollars)?",
      answer: 1500000000,
      unit: "dollar",
      magnitude: 3,
    },
  },
];
