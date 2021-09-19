import React from "react";
import WorkCard from './WorkCard';
import { Container } from "@mui/material";

const works = [
    {
        title: "RPG Database",
        description: "Users can browse others' creations at the homepage, but will need to log in to create their own characters. Users can give their characters their own weapon, armor, and spells which is all saved to a database.",
        img: "/static/images/work/RPG_DB.jpg",
        github: "https://github.com/buneroskoviche/rpg-character-sheet",
        activeLink: "https://jefarth-rpg-database.herokuapp.com/",
        tutorial: null,
    },
    {
        title: "Stock Scanner",
        description: "This app searches for and displays stock information. The user can search for stocks to view current data and relevent news coverage. The user is able to save a 'favorites' list which will persist upon refresh.",
        img: "/static/images/work/StockScanner.PNG",
        github: "https://github.com/buneroskoviche/StockScanner",
        activeLink: "https://buneroskoviche.github.io/StockScanner/",
        tutorial: null,
    },
    {
        title: "Weather Dashboard",
        description: "This app will display the current weather and a five day forecast for an entered city, and will remember the last 10 items searched",
        img: "/static/images/work/WeatherDashboard.PNG",
        github: "https://github.com/buneroskoviche/WeatherDashboard",
        activeLink: "https://buneroskoviche.github.io/WeatherDashboard/",
        tutorial: null,
    },
    {
        title: "Team Profile Generator",
        description: "A text based application that dynamically generates a web page. The page allows quick access to team member data, such as email and Github profile links.",
        img: "/static/images/work/TeamProfGen.PNG",
        github: "https://github.com/buneroskoviche/TeamProfileGenerator",
        activeLink: null,
        tutorial: "https://www.youtube.com/watch?v=7YroCBRieyw",
    },
]

const Work = () => {
    return (
        <div>
            <h1>Here's some work</h1>
            <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            {
                works.map((work, index) => {
                    return (
                        <WorkCard key={index} work={work} />
                    )
                })
            }
            </Container>
        </div>
    )
}

export default Work;