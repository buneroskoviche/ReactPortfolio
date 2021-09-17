import React from "react";
import { AppBar, Toolbar, Button, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    black: {
        backgroundColor: 'black'
    },
    centered: {
        display: "flex",
        justifyContent: "center"
    }
})

const Navbar = () => {
    const styles = useStyles();
    return (
        <AppBar position="fixed" >
            <Toolbar className={styles.centered}>
                <Stack direction="row" spacing={24}>
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
    )
}

export default Navbar;