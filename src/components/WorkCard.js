import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Tooltip } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import YouTubeIcon from '@mui/icons-material/YouTube';


const WorkCard = ({ work }) => {
    return (
        <Card sx={{ maxWidth: 345, marginBottom: "2%" }}>
          <CardMedia
            component="img"
            height="140"
            image={work.img}
            alt={work.title}
            onClick={() => window.location.assign(`/projects/${work.index}`)}
            sx={{ cursor: 'pointer' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {work.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {work.description}
            </Typography>
          </CardContent>
          <CardActions>
                <Tooltip title="Github repository">
                    <IconButton 
                        onClick={() => window.open(work.github, '_blank')}
                    >
                        <GitHubIcon/>
                    </IconButton>
                </Tooltip>
                {
                    work.activeLink &&
                    <Tooltip title="See it in action">
                        <IconButton 
                            onClick={() => window.open(work.activeLink, '_blank')}
                        >
                            <OpenInNewIcon/>
                        </IconButton>
                    </Tooltip>
                }
                {
                    work.tutorial &&
                    <Tooltip title="Watch a tutorial">
                        <IconButton 
                            onClick={() => window.open(work.tutorial, '_blank')}
                        >
                            <YouTubeIcon/>
                        </IconButton>
                    </Tooltip>
                }
          </CardActions>
        </Card>
    )
}

export default WorkCard;