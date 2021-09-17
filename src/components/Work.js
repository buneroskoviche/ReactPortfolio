import React from "react";
import { Card, CardMedia, CardContent, Typography, Container } from "@mui/material";

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
        title: "Weather Dashboard",
        description: "This app will display the current weather and a five day forecast for an entered city, and will remember the last 10 items searched",
        img: "/static/images/work/WeatherDashboard.PNG",
        github: "https://github.com/buneroskoviche/WeatherDashboard",
        activeLink: "https://buneroskoviche.github.io/WeatherDashboard/",
        tutorial: null,
    }
]

const Work = () => {
    return (
        <React.Fragment>
            <h1>Here's some work</h1>
            <Container>
            {
                works.map((work, index) => {
                    return (
                        <div>
                            <Card sx={{ maxWidth: 345 }}>
                              <CardMedia
                                component="img"
                                height="140"
                                image={work.img}
                                alt={work.title}
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  {work.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {work.description}
                                </Typography>
                              </CardContent>
                            </Card>
                        </div>
                    )
                })
            }
            </Container>
        </React.Fragment>
    )
}

export default Work;