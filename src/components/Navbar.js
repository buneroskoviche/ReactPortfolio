import React from "react";
import { AppBar, Toolbar, Avatar, Button, Stack } from '@mui/material';
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
                    <Button variant="contained">
                        GitHub
                    </Button>
                    <Button variant="contained">
                        LinkedIn
                    </Button>
                    <Button variant="contained">
                        Resume
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;