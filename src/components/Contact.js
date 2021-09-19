import React from "react";
import { useState, setState } from "react";
import { Container, TextField, Button } from '@mui/material';
import { validateEmail } from "../utils/helpers"; 

const Contact = () => {
    const [message, setMessage] = useState('');
    const [messageErrorMessage, setMessageErrorMessage] = useState('');
    const [messageErrorState, setMessageErrorState] = useState(false);

    const [email, setEmail] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [emailErrorState, setEmailErrorState] = useState(false);
    
    const [nameInput, setNameInput] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [nameErrorState, setNameErrorState] = useState(false);

    const [activeBtn, setActiveBtn] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // determine the input selected
        if (name === 'message') {
            setMessage(value);
            // Check if the message field is empty
            if(!value) {
                // if so, change to error state and display a message
                setMessageErrorMessage('This field is required');
                setMessageErrorState(true);
                return;
            }
            // if not, remove the error state
            setMessageErrorMessage('');
            setMessageErrorState(false);

        } else if (name === 'nameInput') {
            setNameInput(value);
            // Check if the name field is empty too
            if(!value) {
                setNameErrorMessage('This field is required');
                setNameErrorState(true);
                return;
            }
            setNameErrorMessage('');
            setNameErrorState(false);

        } else {
            setEmail(value);
            // Check if the email field is empty
            if(!value) {
                setEmailErrorMessage('This field is required');
                setEmailErrorState(true);
                return;
            }
            // Check for a valid email address
            if(!validateEmail(value)) {
                setEmailErrorMessage('Please enter a valid email address');
                setEmailErrorState(true);
                return;
            }
            setEmailErrorMessage('');
            setEmailErrorState(false);
        }
        // Check to see if all fields are filled and not errored
        if(messageErrorState === false && message
            && nameErrorState === false && name
            && emailErrorState === false && email) {
                // if so, activate the send button
                return setActiveBtn(true);
        }
        return setActiveBtn(false);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(nameInput, email, message);
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
                        disabled={true}
                    >
                        Send
                    </Button>
                </form>
            </Container>
        </div>
    )
}

export default Contact;