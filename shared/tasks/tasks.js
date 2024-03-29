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
      max: 1,
    },
    answer: 0.09,
  },
  {
    id: 2,
    class: "visual_perception",
    task: "guess_the_correlation",
    question: {
      image: "/tasks/gtc_2.png",
      text:
        "What is the correlation between the X and Y variable in this scatter plot?",
      min: 0,
      max: 1,
    },
    answer: 0.91,
  },
  {
    id: 3,
    class: "visual_perception",
    task: "guess_the_correlation",
    question: {
      image: "/tasks/gtc_3.png",
      text:
        "What is the correlation between the X and Y variable in this scatter plot?",
      min: 0,
      max: 1,
    },
    answer: 0.47,
  },
  {
    id: 4,
    class: "visual_perception",
    task: "guess_the_correlation",
    question: {
      image: "/tasks/gtc_11.png",
      text:
        "What is the correlation between the X and Y variable in this scatter plot?",
      min: 0,
      max: 1,
    },
    answer: 0.78,
  },
  {
    id: 5,
    class: "visual_perception",
    task: "guess_the_correlation",
    question: {
      image: "/tasks/gtc_14.png",
      text:
        "What is the correlation between the X and Y variable in this scatter plot?",
      min: 0,
      max: 1,
    },
    answer: 0.09,
  },
  {
    id: 6,
    class: "visual_perception",
    task: "guess_the_correlation",
    question: {
      image: "/tasks/gtc_18.png",
      text:
        "What is the correlation between the X and Y variable in this scatter plot?",
      min: 0,
      max: 1,
    },
    answer: 0.03,
  },

  // // counting objects questions

  {
    id: 7,
    class: "visual_perception",
    task: "counting_objects",
    question: {
      image: "/tasks/marbles_1.jpg",
      text: "How many marbles are in this jar?",
      unit: "marble",
      min: 0,
    },
    answer: 100,
  },

  {
    id: 8,
    class: "visual_perception",
    task: "counting_objects",
    question: {
      image: "/tasks/marbles_2.jpg",
      text: "How many marbles are in this jar?",
      unit: "marble",
      min: 0,
    },
    answer: 450,
  },
  {
    id: 9,
    class: "visual_perception",
    task: "counting_objects",
    question: {
      image: "/tasks/matches_1.jpg",
      text: "How many matches can you see?",
      unit: "match",
      min: 0,
    },
    answer: 240,
  },
  {
    id: 10,
    class: "visual_perception",
    task: "counting_objects",
    question: {
      image: "/tasks/matches_2.jpg",
      text: "How many matches can you see?",
      unit: "match",
      min: 0,
    },
    answer: 480,
  },
  {
    id: 11,
    class: "visual_perception",
    task: "counting_objects",
    question: {
      image: "/tasks/matches_3.jpg",
      text: "How many matches can you see?",
      unit: "match",
      min: 0,
    },
    answer: 720,
  },

  // length of objects questions

  {
    id: 12,
    class: "visual_perception",
    task: "length_of_objects",
    question: {
      image: "/tasks/Rope_200.jpg",
      text: "In your opinion, how long is this rope (in cm)?",
      unit: "cm",
      min: 0,
    },
    answer: 200,
  },
  {
    id: 13,
    class: "visual_perception",
    task: "length_of_objects",
    question: {
      image: "/tasks/Rope_700.jpg",
      text: "In your opinion, how long is this rope (in cm)?",
      unit: "cm",
      min: 0,
    },
    answer: 700,
  },

  // // population of large cities questions

  {
    id: 14,
    class: "trivia_questions",
    task: "population_of_large_cities",
    question: {
      text: "What is the population of New York City and its agglomeration?",
      unit: "person",
      min: 0,
      hints: [
        "There are approximately 8.4 million people who live in just New York City.",
      ],
    },
    answer: 21000000,
  },
  {
    id: 15,
    class: "trivia_questions",
    task: "population_of_large_cities",
    question: {
      text: "What is the population of Madrid and its agglomeration?",
      unit: "person",
      min: 0,
    },
    answer: 6500000,
  },
  {
    id: 16,
    class: "trivia_questions",
    task: "population_of_large_cities",
    question: {
      text: "What is the population of Amsterdam and its agglomeration?",
      unit: "person",
      min: 0,
    },
    answer: 1600000,
  },
  {
    id: 17,
    class: "trivia_questions",
    task: "population_of_large_cities",
    question: {
      text: "What is the population of Tokyo and its agglomeration?",
      unit: "person",
      min: 0,
    },
    answer: 38000000,
  },
  {
    id: 18,
    class: "trivia_questions",
    task: "population_of_large_cities",
    question: {
      text: "What is the population of Melbourne and its agglomeration?",
      unit: "person",
      min: 0,
    },
    answer: 4500000,
  },
  {
    id: 19,
    class: "trivia_questions",
    task: "population_of_large_cities",
    question: {
      text: "What is the population of Seoul and its agglomeration?",
      unit: "person",
      min: 0,
    },
    answer: 26000000,
  },
  {
    id: 20,
    class: "trivia_questions",
    task: "population_of_large_cities",
    question: {
      text: "What is the population of Shanghai and its agglomeration?",
      unit: "person",
      min: 0,
    },
    answer: 25000000,
  },

  // add hints to daily life facts questions

  {
    id: 21,
    class: "trivia_questions",
    task: "daily_life_facts",
    question: {
      text:
        "How many kilometers does a professional cyclist typically bike a year?",
      unit: "km",
      min: 0,
    },
    answer: 40000,
  },
  {
    id: 22,
    class: "trivia_questions",
    task: "daily_life_facts",
    question: {
      text:
        "What is the mean annual gross salary of a professional league 1 soccer player in France (in euros)?",
      unit: "euro",
      min: 0,
      hints: [
        "The mean annual gross salary of a professional English Premier League Player in England is 732,288 euros",
      ],
    },
    answer: 600000,
  },
  {
    id: 23,
    class: "trivia_questions",
    task: "daily_life_facts",
    question: {
      text: "How many cell phones are sold in France every year?",
      unit: "cell phone",
      min: 0,
      hints: ["22.74 million cell phones were sold in germany in 2018."],
    },
    answer: 22000000,
  },
  {
    id: 24,
    class: "trivia_questions",
    task: "daily_life_facts",
    question: {
      text: "How many cars are stolen in France every year?",
      unit: "car",
      min: 0,
      hints: ["Italy has 300,000 cars stolen every year."],
    },
    answer: 110000,
  },
  {
    id: 25,
    class: "trivia_questions",
    task: "daily_life_facts",
    question: {
      text: "How many ebooks were sold in France in 2014?",
      unit: "ebook",
      min: 0,
      hints: ["There were 85.5 million ebooks sold in Britain in 2015."],
    },
    answer: 10700000,
  },
  {
    id: 26,
    class: "trivia_questions",
    task: "daily_life_facts",
    question: {
      text: "How many books does the American Library of Congress hold?",
      unit: "book",
      min: 0,
      hints: [
        "There are around 53 million books in the New York Public Library.",
      ],
    },
    answer: 23000000,
  },
  {
    id: 27,
    class: "trivia_questions",
    task: "daily_life_facts",
    question: {
      text: "How many people die from cancer in the world every year?",
      unit: "person",
      min: 0,
      hints: ["The flu kills 646,000 people every year."],
    },
    answer: 15000000,
  },

  // art market questions

  {
    id: 28,
    class: "trivia_questions",
    task: "art_market",
    question: {
      image: "/tasks/van_Gogh_Planteuse_de_betteraves,_by_Vincent_van_Gogh.jpg",
      text:
        "This painting was sold at an auction in May, 2018. How much did it sell for?",
      unit: "dollar",
      min: 0,
      hints: [
        "The painting is by Vincent Van Gogh, and it is 18 inches tall by 20 inches wide, charcoal on paper.",
        "The painting is by Vincent Van Gogh, and it is 18 inches tall by 20 inches wide, charcoal on paper.",
      ],
    },
    answer: 3600000,
  },
  {
    id: 29,
    class: "trivia_questions",
    task: "art_market",
    question: {
      image: "/tasks/picasso.jpg",
      text:
        "This painting was sold at an auction in November, 2018. How much did it sell for? ",
      unit: "dollar",
      min: 0,
      hints: [
        "The painting is by Pablo Picasso, and it is 64 inches tall by 51 inches wide, oil on canvas",
      ],
    },
    answer: 29600000,
  },

  // Socioeconomic questions

  {
    id: 30,
    invalid: true,
    class: "trivia_questions",
    task: "socioeconomic",
    question: {
      text:
        "In terms of dollars, how much money do you think was spent on instruction in college, per student?",
      unit: "dollar",
      min: 0,
      hints: [
        "Across all colleges where the US Department of Education collected data,the average tuition revenue per full time (or equivalent) student was $10,438 per year.",
      ],
    },
    answer: 7912,
  },
  // what is the answer??
  {
    id: 31,
    class: "trivia_questions",
    task: "socioeconomic",
    question: {
      text:
        "How many passengers boarded out of an airport in the New York City area (JFK, La Guardia, and Newark) in 2009?",
      unit: "person",
      min: 0,
      hints: [
        "In 2009, approximately 690 million passengers boarded a plane.  (So a round-trip flight counts for 2 passengers boarding.)",
      ],
    },
    answer: 79120000,
  },

  // crowdfunding questions

  {
    id: 32,
    class: "trivia_questions",
    task: "crowdfunding",
    question: {
      text: "How much money do you think the campaign raised?",
      description: `
        Consider this crowdfunding campaign: The goal of this app is to promote
        new music discovery in a fun and different way.  This app would allow
        musicians to “drop” songs at specific physical locations.  Anyone using
        the app would then be able to listen to the song by visiting that
        location. The app sought £30,000 (British pounds) and offered funders
        equity in the company, with a total equity of 35% for the whole
        campaign.
      `,
      unit: "pounds",
      min: 0,
    },
    answer: 30000,
  },
  {
    id: 33,
    class: "trivia_questions",
    task: "crowdfunding",
    question: {
      text: "How much money do you think the campaign raised?",
      description: `
        Consider this crowdfunding campaign: The product is headphones designed
        for dance music. The goal of the product is to replicate the sound style
        of being in a club or party.  The campaign followed a successful prior
        round of funding, and the company has already sold thousands of units.
        This campaign sought an additional £100,000 (British pounds) in exchange
        for equity in the company, and ended up exceeding their goals.
      `,
      unit: "pounds",
      min: 0,
    },
    answer: 142770,
  },

  // geopolitics questions

  {
    id: 34,
    class: "trivia_questions",
    task: "geopolitics",
    question: {
      text:
        "How many of type of events like this do you think they recorded in Yemen for 2018?",
      description: `
        The Armed Conflict Location & Event Data Project (ACLED) is a
        non-governmental organization that tracks violent conflict in Asia, the
        Middle East, and Africa. One type of event they track is those where
        civilians were intentionally targeted.  In 2018, they recorded 841 such
        events in Somalia.
      `,
      unit: "event",
      min: 0,
    },
    answer: 609,
  },
  {
    id: 35,
    class: "trivia_questions",
    task: "geopolitics",
    question: {
      text:
        "How many of type of events like this do you think they recorded in Syria for 2018?",
      description: `
      The Armed Conflict Location & Event Data Project (ACLED) is a
      non-governmental organization that tracks violent conflict in Asia,
      the Middle East, and Africa. One type of event they track is those where
      civilians were intentionally targeted. In 2018, they recorded 841 such
      events in Somalia.
      `,
      unit: "event",
      min: 0,
    },
    answer: 1501,
  },

  // extreme events questions

  {
    id: 36,
    class: "trivia_questions",
    task: "extreme_events",
    question: {
      text: "What is the radius of the Sun (in km)?",
      unit: "km",
      min: 0,
    },
    answer: 696000,
  },
  {
    id: 37,
    class: "trivia_questions",
    task: "extreme_events",
    question: {
      text: "What is the distance between the Earth and the Moon (in km)?",
      unit: "km",
      min: 0,
    },
    answer: 385000,
  },
  {
    id: 38,
    class: "trivia_questions",
    task: "extreme_events",
    question: {
      text:
        "What is the mean distance between planet Mercury and the Sun (in km)?",
      unit: "km",
      min: 0,
    },
    answer: 57800000,
  },
  {
    id: 39,
    class: "trivia_questions",
    task: "extreme_events",
    question: {
      text:
        "What is the total mass of oceans on Earth (in trillion metric tons)?",
      magnitude: 12,
      unit: "metric ton",
      min: 0,
    },
    answer: 1400000000000000,
  },
  {
    id: 40,
    class: "trivia_questions",
    task: "extreme_events",
    question: {
      text:
        "How many cells are there in the human body (in billions of cells)?",
      answer: 100000000000000,
      magnitude: 9,
      unit: "cell",
      min: 0,
    },
  },
  {
    id: 41,
    class: "trivia_questions",
    task: "extreme_events",
    question: {
      text:
        "How many galaxies does the visible universe hold (in million galaxies)?",
      magnitude: 6,
      unit: "galaxy",
      min: 0,
    },
    answer: 100000000000,
  },
  {
    id: 42,
    class: "trivia_questions",
    task: "extreme_events",
    question: {
      text: "How many stars does the Milky way hold (in million stars)?",
      magnitude: 6,
      unit: "star",
      min: 0,
    },
    answer: 235000000000,
  },
  {
    id: 43,
    class: "trivia_questions",
    task: "extreme_events",
    question: {
      text: "How many billions kilometers is worth a light-year?",
      magnitude: 9,
      unit: "km",
      min: 0,
    },
    answer: 9461000000000,
  },

  // other questions

  {
    id: 44,
    class: "Trivia Questions",
    task: "others",
    question: {
      text: "What is the mass of the Cheops pyramid (in metric tons)?",
      unit: "metric ton",
      min: 0,
    },
    answer: 5000000,
  },
  {
    id: 45,
    class: "Trivia Questions",
    task: "others",
    question: {
      text:
        "What is the total length of the metal threads used in the Golden Gate Bridge’s braided cables (in km)?",
      unit: "km",
      min: 0,
    },
    answer: 129000,
  },
  {
    id: 46,
    class: "Trivia Questions",
    task: "others",
    question: {
      text:
        "How much did Burj Khalifa Tower, in Dubai, cost to build (in thousands of dollars)?",
      unit: "dollar",
      magnitude: 3,
      min: 0,
    },
    answer: 1500000000,
  },
];
