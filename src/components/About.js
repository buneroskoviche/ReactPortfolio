import React from "react";
import { Avatar, Container } from '@mui/material';

const About = () => {
    return (
        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Avatar
                alt="Daniel Kinser"
                src="/static/images/avatar/avatar.jpg"
                sx={{ width: 250, height: 250}}
            />
            <div width="auto"> 
                <p>
                    Hello! My name is Daniel Kinser.
                </p>
                <p>
                    Currently I am employed full-time performing data entry at an education company. The company goal is to inspire confidence in others by teaching leadership and public speaking skills.
                    I have developed many of these skills in this role as well as knowledge of software systems, customer service and team communication.
                    I am confident that I am a strong asset to my team, but I feel that I have reached the limits of the position and I am ready to move on to the next step up.
                </p>
                <p>
                    I have always had an affinity for entertainment and media so I pursued a creative career in my early adult life.
                    After four years of college, I received my Bachelor's degree in Media Arts with a specialization in 3D Animation. 
                    During the course I gained deep knowledge and immense appreciation for the arts, but felt that I had a stronger aptitude for the technical side of the work.
                </p>
                <p>
                    The concept of organizing simple letters and numbers into something exiciting and interactive was intriguing.
                    It seemed that coding would allow me to be creative in a way that played to my innate strengths.
                    Coding could be the step up that I have been looking for!
                </p>
            </div>
        </Container>
    )
}

export default About;