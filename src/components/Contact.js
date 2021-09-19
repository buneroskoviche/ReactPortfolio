import React from "react";
import { useState } from "react";
import { TextField, Button, Grid, List, ListItem, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import { validateEmail } from "../utils/helpers"; 
import PhoneIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    // set states for all form fields
    const [message, setMessage] = useState('');
    const [messageErrorMessage, setMessageErrorMessage] = useState('');
    const [messageErrorState, setMessageErrorState] = useState(false);

    const [email, setEmail] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [emailErrorState, setEmailErrorState] = useState(false);
    
    const [nameInput, setNameInput] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [nameErrorState, setNameErrorState] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // determine the input selected
        switch(name) {
            case 'message':
                setMessage(value);
                // Check if the message field is empty
                if(!value) {
                    // if so, change to error state and display a message
                    setMessageErrorMessage('This field is required');
                    setMessageErrorState(true);
                } else {
                    // if not, remove the error state
                    setMessageErrorMessage('');
                    setMessageErrorState(false);
                }
                break;
            case 'nameInput':
                setNameInput(value);
                // Check if the name field is empty too
                if(!value) {
                    setNameErrorMessage('This field is required');
                    setNameErrorState(true);
                } else {
                    setNameErrorMessage('');
                    setNameErrorState(false);
                }
                break;
            default:
                setEmail(value);
                // Check if the email field is empty
                if(!value) {
                    setEmailErrorMessage('This field is required');
                    setEmailErrorState(true);
                } else
                // then check for a valid email address
                if(!validateEmail(value)) {
                    setEmailErrorMessage('Enter a valid email address');
                    setEmailErrorState(true);
                } else {
                    setEmailErrorMessage('');
                    setEmailErrorState(false);
                }
                break;
        }

        return;
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        // Check to see if all fields are filled and not errored
        if(messageErrorState === false && message
            && nameErrorState === false && nameInput
            && emailErrorState === false && email) {
            console.log(nameInput, email, message);
            setMessage('');
            setNameInput('');
            setEmail('');
            return;
        }

        alert('Please validate all the fields!');
        return;
    }

    return (
        <div style={{ marginTop: '2%'}}>
            <h1>Contact Me</h1>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            value={nameInput}
                            onChange={handleInputChange}
                            name="nameInput"
                            label="Name" 
                            variant="outlined"
                            error={nameErrorState}
                            helperText={nameErrorMessage}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            fullWidth
                            value={email}
                            onChange={handleInputChange}
                            name="email"
                            label="Email" 
                            variant="outlined"
                            error={emailErrorState}
                            helperText={emailErrorMessage}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            fullWidth
                            value={message}
                            onChange={handleInputChange}
                            name="message"
                            label="Message" 
                            variant="outlined"
                            error={messageErrorState}
                            helperText={messageErrorMessage}
                            multiline
                            rows={4}
                        />
                    </Grid>
                    <Grid item  xs={6}>
                        <Button 
                            variant="contained" 
                            onClick={handleFormSubmit}
                        >
                            Send
                        </Button>
                    </Grid>
                    <Grid item>
                        <List sx={{display: 'flex'}}>
                            <ListItem>
                                <ListItemIcon>
                                    <PhoneIcon/>
                                </ListItemIcon>
                                <ListItemText primary="209-640-2803"/>
                            </ListItem>
                            <ListItem>
                                <ListItemButton onClick={() => window.location='mailto:dkcoder93@gmail.com'}>
                                    <ListItemIcon>
                                        <EmailIcon/>
                                    </ListItemIcon>
                                <ListItemText primary="dkcoder93@gmail.com"/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
        </div>
    )
}

export default Contact;