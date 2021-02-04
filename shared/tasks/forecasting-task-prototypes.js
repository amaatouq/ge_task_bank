export const instructions = {
};

export const taskData = [

    // Prototype of sports_NBA_score
    {
        id: 1,
        class: "sports_forecast",
        task: "sports_NBA_score",

        question: {
            teamA: "Charlotte Hornets",
            teamB: "Houston Rockets",
            dateEvent: "Monday the 8th of February",
            dateHints: "Thursday the 4th of February - 6pm UK time",
            season: "2020-2021",

            min: 0,
            hintName: "Additional Information",

            get text() {
                return "What score will the " + this.teamA + " obtain in their game against the " + this.teamB + " on " + this.dateEvent
            },
            get description() {
                return "All the " + this.hintName + " provided was accurate as of " + this.dateHints + ", and by 'this regular season' we mean the " + this.season + " regular season."
            },

            hints: [
                "Last time they played in the 2019-2020 NBA regular season - The Charlotte Hornets (108 points) won against the Houston Rockets (99 points)",
                "Total win and losses against each other in regular season games - The Charlotte Hornets won 15 and the Houston Rockets won 45 of the 61 regular season games they played against each other",
                "2020 Forbes Value of the teams - Forbes values the Charlotte Hornets at $1,500,000,000 and the Houston Rockets at $2,475,000,000",
                "Win-Loss this regular season - The Charlotte Hornets have a win-loss of (10-12 or 0.455%); the Houston Rockets have a win-loss of (10-12 or 0.500%).",
                "Average points per game (PPG) this regular season - The Charlotte Hornets have a PPG of 109.6 and the Houston Rockets have a PPG of 111.1",
                "Average opponent points per game (OPP PPG) this regular season -  The Charlotte Hornets have an OPP PPG of 110.5 scored against them and the Houston Rockets have an OPP PPG scored agains them of 109.1",
                "Home and Away stats this regular season - The Charlotte Hornets are playing at home (win-loss at home of 5-6) and the Houston Rockets are playing on the road (win-loss on the road of 5-6)",
                "Streaks this regular season - The Charlotte Hornets have a streak of 1 LOSS and the Houston Rockets have a streak of 1 LOSS",
                "Betfair 365 bet rate to win the league - On Betfair 365, the Charlotte Hornets are 300/1 to win the league and the Houston Rockets are 80/1 to win the league",
                "FiveThirtyEight RAPTOR prediction of game winner - FiveThirtyEight predict the Houston Rockets will win with 53% probability"
            ],
        },
    },

    // prototype of sports_NBA_winprob
    {
        id: 2,
        class: "sports_forecast",
        task: "sports_NBA_winprob",

        question: {
            teamA: "Charlotte Hornets",
            teamB: "Houston Rockets",
            dateEvent: "Monday the 8th of February",
            dateHints: "Thursday the 4th of February - 6pm UK time",
            season: "2020-2021",

            min: 0,
            max: 100,
            hintName: "Additional Information",

            get text() {
                return "How likely (0-100%) are the " + this.teamA + " to win their game against the " + this.teamB + " on " + this.dateEvent
            },
            get description() {
                return "All the " + this.hintName + " provided was accurate as of " + this.dateHints + ", and by 'this regular season' we mean the " + this.season + " regular season."
            },

            hints: [
                "Last time they played in the 2019-2020 NBA regular season - The Charlotte Hornets (108 points) won against the Houston Rockets (99 points)",
                "Total win and losses against each other in regular season games - The Charlotte Hornets won 15 and the Houston Rockets won 45 of the 61 regular season games they played against each other",
                "2020 Forbes Value of the teams - Forbes values the Charlotte Hornets at $1,500,000,000 and the Houston Rockets at $2,475,000,000",
                "Win-Loss this regular season - The Charlotte Hornets have a win-loss of (10-12 or 0.455%); the Houston Rockets have a win-loss of (10-12 or 0.500%).",
                "Average points per game (PPG) this regular season - The Charlotte Hornets have a PPG of 109.6 and the Houston Rockets have a PPG of 111.1",
                "Average opponent points per game (OPP PPG) this regular season -  The Charlotte Hornets have an OPP PPG of 110.5 scored against them and the Houston Rockets have an OPP PPG scored agains them of 109.1",
                "Home and Away stats this regular season - The Charlotte Hornets are playing at home (win-loss at home of 5-6) and the Houston Rockets are playing on the road (win-loss on the road of 5-6)",
                "Streaks this regular season - The Charlotte Hornets have a streak of 1 LOSS and the Houston Rockets have a streak of 1 LOSS",
                "Betfair 365 bet rate to win the league - On Betfair 365, the Charlotte Hornets are 300/1 to win the league and the Houston Rockets are 80/1 to win the league",
                "FiveThirtyEight RAPTOR prediction of game winner - FiveThirtyEight predict the Houston Rockets will win with 53% probability"
            ],
        },
    },

    // prototype of videogame_metacritic_popularity
    {
        id: 3,
        class: "videogame_forecast",
        task: "videogame_metacritic_popularity",

        question: {
            videogame: "Little Nightmares II",
            dateEvent: "The 14th of February at midnight GMT",
            dateHints: "Thursday the 4th of February - 6pm UK time",

            min: 0,
            max: 10,
            hintName: "Additional Information",

            get text() {
                return `What Metacritic user score (out of 10) will game ${this.videogame} have at time ${this.dateEvent}?`
            },
            get description() {
                return "All the " + this.hintName + " provided was accurate as of " + this.dateHints + "."
            },

            hints: [
                "Publisher - The publisher is Bandai Namco. Their current averaged Metascore (critic ratings) of their games is 70/100 with 306 games reviewed",
                "Developer - The developer is Tarsier Studios. Their current averaged Metascore (critic ratings) of their games is 78/100 with 9 games reviewed",
            ],
        },
    },


    // prototype of videogame_steam_reviews
    {
        id: 4,
        class: "videogame_forecast",
        task: "videogame_steam_reviews",

        question: {
            videogame: "Little Nightmares II",
            dateEvent: "The 14th of February at midnight GMT",
            dateHints: "Thursday the 4th of February - 6pm UK time",

            min: 0,
            hintName: "Additional Information",

            get text() {
                return `How many Steam reviews will game ${this.videogame} have at time ${this.dateEvent}?`
            },
            get description() {
                return "All the " + this.hintName + " provided was accurate as of " + this.dateHints + "."
            },

            hints: [
                "Publisher - The publisher is Bandai Namco. Their current averaged Metascore (critic ratings) of their games is 70/100 with 306 games reviewed",
                "Developer - The developer is Tarsier Studios. Their current averaged Metascore (critic ratings) of their games is 78/100 with 9 games reviewed",
            ],
        },
    },


    // prototype of film_boxoffice
    {
        id: 4,
        class: "film_forecast",
        task: "film_boxoffice",

        question: {
            film: "Judas and the Black Messiah",
            dateEvent: "The 12th of February",
            dateHints: "Thursday the 4th of February - 6pm UK time",

            min: 0,
            unit: "dollar",
            hintName: "Additional Information",

            get text() {
                return `How much box office money will ${this.film} make on its opening in the US, released on ${this.dateEvent}?`
            },
            get description() {
                return "All the " + this.hintName + " provided was accurate as of " + this.dateHints + "."
            },

            hints: [
            ],
        },

    },

]