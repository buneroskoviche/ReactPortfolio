import React from "react";
import WorkCard from './WorkCard';
import { Container } from "@mui/material";
import works from '../resources/works';

const Work = () => {
    return (
        <div id='work'>
            <h1>Works</h1>
            <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            {
                works.map((work, index) => {
                    return (
                        <WorkCard key={index} work={work} />
                    )
                })
            }
            </Container>
        </div>
    )
}

export default Work;