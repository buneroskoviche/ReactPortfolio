import React from "react";
import { useParams } from "react-router-dom";
import { Grid, ImageList } from "@mui/material";
import works from '../resources/works';

const Project = () => {
    const { projIndex } = useParams();
    const project = works[projIndex];

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <h1>{project.title}</h1>
                    <p>{project.proj.description}</p>
                </Grid>
                <Grid item xs={12}>
                    <ImageList>
                        screenshots go here
                    </ImageList>
                </Grid>
                <Grid item xs={6}>
                    <h2>Techs used in this project</h2>
                    <ul>
                        {
                            project.proj.techs.map((tech, index) => {
                                return (
                                    <li key={index} >{tech}</li>
                                )
                            })
                        }
                    </ul>
                </Grid>
                <Grid item xs={6}>
                    <h2>What I did for the project</h2>
                    <ul>
                        {
                            project.proj.role.map((role, index) => {
                                return (
                                    <li key={index} >{role}</li>
                                )
                            })
                        }
                    </ul>
                </Grid>
            </Grid>

        </>
    )
}

export default Project