import React from "react";
import { useState } from "react";
import { TextField, Button, Grid, List, ListItem, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import { validateEmail } from "../utils/helpers"; 
import PhoneIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const defaultFormState = {
        name: '',
        email: '',
        message: '',
        inError: true,
        complete: false,
    };
    const defaultErrorState = {
        nameError: false,
        emailError: false,
        messageError: false,
        nameErrorMessage: '',
        emailErrorMessage:  '',
        messageErrorMessage:  '',
    };

    const [formState, setFormState] = useState(defaultFormState);
    const [errorState, setErrorState] = useState(defaultErrorState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let error = false;
        let errorMsg = '';
        let inError = false;
        let isComplete = false;

        // Check if the field is empty
        if(!value) {
            error = true;
            errorMsg = 'This field is required.';
            inError = true;
        }
        // Check if the email entered is valid
        if(name === 'email' && !validateEmail(value)) {
            error = true;
            errorMsg = 'Please enter a valid email address.';
            inError = true;
        }
        // Check if all fields are filled
        if(formState.email && formState.name && formState.message) {
            isComplete = true;
        }
        
        setFormState({
            ...formState,
            [name]: value,
            inError: inError,
            complete: isComplete,
        });
        setErrorState({
            ...errorState,
            [name + 'Error']: error,
            [name + 'ErrorMessage']: errorMsg,
        });

        return;
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Check to see if the form is filled and if there are any errors
        if(formState.inError || !formState.complete){
            alert('Please fill and validate all fields!');
            console.log('Failure...')
            return;
        }

        try {
            emailjs.send(process.env.EMAILJS_SERVICE, process.env.EMAILJS_TEMPLATE, formState, process.env.EMAILJS_KEY);
        } catch (e) {
            console.log(e)
        }

        setFormState(defaultFormState);
        setErrorState(defaultErrorState);
        return;
    }

    return (
        <div id='contact' style={{ marginTop: '2%'}}>
            <h1>Contact Me</h1>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            value={formState.name}
                            onChange={handleInputChange}
                            name="name"
                            label="Name" 
                            variant="outlined"
                            error={errorState.nameError}
                            helperText={errorState.nameErrorMessage}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            fullWidth
                            value={formState.email}
                            onChange={handleInputChange}
                            name="email"
                            label="Email" 
                            variant="outlined"
                            error={errorState.emailError}
                            helperText={errorState.emailErrorMessage}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            fullWidth
                            value={formState.message}
                            onChange={handleInputChange}
                            name="message"
                            label="Message" 
                            variant="outlined"
                            error={errorState.messageError}
                            helperText={errorState.messageErrorMessage}
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