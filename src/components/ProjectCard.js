import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useMediaQuery } from '@mui/material';


export default function ProjectCard(props) {
  const isLargeScreen = useMediaQuery('(min-width: 1200px)');
  return (
    <Card sx={{ maxWidth: isLargeScreen ? 400 : 600, width:"100%" }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={props.project_image}
          alt="image"
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
      <CardActions mt={2}>
      <a href={props.project_ghl} target="_blank" rel="noopener noreferrer"> <GitHubIcon color="primary" fontSize="large"  /> </a>
      </CardActions>
    </Card>
  );
}