import React from 'react';
import About from './About';
import Work from './Work';
import { Divider, Container, Button } from '@mui/material';
import allWorks from '../resources/works' ;
import { Link } from 'react-router-dom';
import WorkCard from './WorkCard';

const selectWorks = [];
for (let i = 0; i < 3; i++) {
    selectWorks.push(allWorks[i]);
}

function Home() {
    return(
        <React.Fragment>
            <About/>
            <Divider/>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <h1>Work Samples</h1>
                <Link to='/work' style={{textDecoration: 'none'}}>
                    <Button variant='contained'>
                        See More
                    </Button>
                </Link>
            </div>
            <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', margin: '2% 0' }}>
                {
                    selectWorks.map((work, index) => {
                        return (
                            <WorkCard key={index} work={{...work, index}} />
                        )
                    })
                }
            </Container>
        </React.Fragment>
    )
}

export default Home;