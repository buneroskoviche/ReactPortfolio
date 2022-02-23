import React from "react";
import { useParams } from "react-router-dom";
import works from '../resources/works';

const Project = () => {
    const { projIndex } = useParams();
    console.log(projIndex)
    return (
        <h1>Project title</h1>
    )
}

export default Project