import React from "react";
import { useState } from "react";
import { Container, TextField, Button } from '@mui/material';
import { validateEmail } from "../utils/helpers"; 

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
        <div sx={{ margin: '2% 0'}}>
            <h1>Send me a message</h1>
            <Container>
                <form>
                    <TextField
                        value={nameInput}
                        onChange={handleInputChange}
                        name="nameInput"
                        label="Name" 
                        variant="outlined"
                        error={nameErrorState}
                        helperText={nameErrorMessage}
                    />
                    <TextField 
                        value={email}
                        onChange={handleInputChange}
                        name="email"
                        label="Email" 
                        variant="outlined"
                        error={emailErrorState}
                        helperText={emailErrorMessage}
                    />
                    <TextField 
                        value={message}
                        onChange={handleInputChange}
                        name="message"
                        label="Message" 
                        variant="outlined"
                        error={messageErrorState}
                        helperText={messageErrorMessage}

                    />
                    <Button 
                        variant="contained" 
                        onClick={handleFormSubmit}
                    >
                        Send
                    </Button>
                </form>
            </Container>
        </div>
    )
}

export default Contact;