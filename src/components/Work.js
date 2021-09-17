import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, Container, IconButton, Tooltip } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
            <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {
                works.map((work, index) => {
                    return (
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
                          <CardActions>
                                <Tooltip title="Github repository">
                                    <IconButton 
                                        onClick={() => window.open(work.github, '_blank')}
                                    >
                                        <GitHubIcon/>
                                    </IconButton>
                                </Tooltip>
                                {
                                    work.activeLink &&
                                    <Tooltip title="See it in action">
                                        <IconButton 
                                            onClick={() => window.open(work.activeLink, '_blank')}
                                        >
                                            <OpenInNewIcon/>
                                        </IconButton>
                                    </Tooltip>
                                }
                                {
                                    work.tutorial &&
                                    <Tooltip title="Watch a tutorial">
                                        <IconButton 
                                            onClick={() => window.open(work.tutorial, '_blank')}
                                        >
                                            <YouTubeIcon/>
                                        </IconButton>
                                    </Tooltip>
                                }
                          </CardActions>
                        </Card>
                    )
                })
            }
            </Container>
        </div>
    )
}

export default Work;