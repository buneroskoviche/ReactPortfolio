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

const Navbar = () => {
    return (
        <HideOnScroll>
            <AppBar position="fixed" >
                <Toolbar>
                    <Stack direction="row" spacing={24}>
                        <Typography variant="h4">
                            Daniel Kinser
                        </Typography>
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
                        <Button 
                            variant="contained"
                            onClick={() => window.open('/static/DanielKinser_Resume2021.pdf', '_blank')}
                        >
                            Resume
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default Navbar;