import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard(props) {
  return (
    <Card sx={{ maxWidth: 345, width:"100%" }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={props.project_image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.project_title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.project_desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
           <GitHubIcon />
      </CardActions>
    </Card>
  );
}