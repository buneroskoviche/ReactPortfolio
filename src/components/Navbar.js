import React from "react";
import { AppBar, Toolbar, Button, Grid, Typography, useScrollTrigger, Slide } from '@mui/material';

const HideOnScroll = (props) => {
    const { children } = props;
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

const navBtns = [
    {
        href: '/about',
        title: 'About Me'
    },
    {
        href: '/work',
        title: 'Work'
    },
    {
        href: '/contact',
        title: 'Contact'
    },
    {
        href: '/resume',
        title: 'Resume'
    },
]

const Navbar = () => {
    return (
        <HideOnScroll>
            <AppBar>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={2} sx={{alignSelf: 'center'}}>
                            <Typography variant="h4">
                                Daniel Kinser
                            </Typography>
                        </Grid>
                        <Grid item xs={10} sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap'}}>
                            {
                                navBtns.map(({href, title}, index) => {
                                    return (
                                        <a key={index} href={href} style={{textDecoration: 'none', margin: '2% 0'}}>
                                            <Button variant="contained">{title}</Button>
                                        </a>
                                    )
                                })
                            }
                            <Button 
                                variant="contained"
                                onClick={() => window.open('https://github.com/dk-code93', '_blank')}
                            >
                                GitHub
                            </Button>
                            <Button 
                                variant="contained"
                                onClick={() => window.open('https://www.linkedin.com/in/danielkinser/', '_blank')}
                            >
                                LinkedIn
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default Navbar;