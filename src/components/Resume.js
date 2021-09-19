import React from 'react';
import { Grid, List, ListItem, ListItemText, ListItemIcon, Container, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Resume = () => {
    const proficiencies = [
        "Javascript",
        "jQuery",
        "React",
        "Node",
        "SQL",
        "MongoDB",
        "Bootstrap",
        "Material UI",
        "Handlebars"
    ];

    return (
        <div>
            <h1>Resume</h1>
            <Container>
                <Grid container>
                    <Grid item xs={6}>
                        <List dense>
                            <h2>
                                Proficiencies
                            </h2>
                            {
                                proficiencies.map((proficiency, index) => {
                                    return (
                                        <ListItem key={index}>
                                            <ListItemIcon>
                                                <CheckCircleIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary={proficiency} />
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Grid>
                    <Grid item xs={6} sx={{display: "flex", flexDirection: "column", justifyContent: "space-evenly",}}>
                        <Button 
                            variant="contained" 
                            sx={{height: '30%', fontSize: 'large'}}
                            onClick={() => window.open('/static/DanielKinser_Resume2021.pdf', '_blank')}
                        >
                            View Online
                        </Button>
                        <a href='/static/DanielKinser_Resume2021.pdf' download style={{height: '30%', textDecoration: 'none'}}>
                            <Button 
                                variant="contained" 
                                sx={{height: '100%', width: '100%', fontSize: 'large'}}
                            >
                                Download
                            </Button>
                        </a>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Resume;