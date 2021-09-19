import React from "react";
import { AppBar, Toolbar, Button, Stack, Typography, useScrollTrigger, Slide } from '@mui/material';

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
        href: '#about',
        title: 'About Me'
    },
    {
        href: '#work',
        title: 'Work'
    },
    {
        href: '#contact',
        title: 'Contact'
    },
    {
        href: '#resume',
        title: 'Resume'
    },
]

const Navbar = () => {
    return (
        <HideOnScroll>
            <AppBar>
                <Toolbar>
                    <Stack direction="row" spacing={6}>
                        <Typography variant="h4">
                            Daniel Kinser
                        </Typography>
                        {
                            navBtns.map(({href, title}, index) => {
                                return (
                                    <a href={href} style={{textDecoration: 'none'}}>
                                        <Button variant="contained">{title}</Button>
                                    </a>
                                )
                            })
                        }
                        <Button 
                            variant="contained"
                            onClick={() => window.open('https://github.com/buneroskoviche', '_blank')}
                        >
                            GitHub
                        </Button>
                        <Button 
                            variant="contained"
                            onClick={() => window.open('https://www.linkedin.com/in/danielkinser/', '_blank')}
                        >
                            LinkedIn
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default Navbar;