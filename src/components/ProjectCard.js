import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useMediaQuery, useTheme } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import theme from "../theme";



export default function ProjectCard(props) {
  const isLargeScreen = useMediaQuery('(min-width: 900px)');
  const fullScreen = useMediaQuery(useTheme().breakpoints.down('md'));

  const [open, setOpen] = React.useState(false);
  const isMain = props.isMain
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
          <Card 
          onClick={handleClickOpen}
          sx={{
            display: 'flex',
            maxWidth: isLargeScreen && isMain ? "80%" : 600,
            width: '100%',
            boxShadow:"none",
            height: isLargeScreen && isMain ? "350px" : "250px",
            
            
          }}
        >
          <CardActionArea sx={{
            display: 'flex',
            width: '100%',
            
          }}>
            <Box display={"flex"} alignSelf={isLargeScreen && isMain ? "flex-end" : "center"}>
          <CardContent sx={{width:"80%", display:"flex", flexDirection:"column", justifyContent:"space-evenly", height:"100%", padding:isLargeScreen && isMain  ? "2em" : "2em 1em"}} >
              <Typography gutterBottom variant="h5" fontWeight={400} component="div">
                {props.dialogTitle}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {props.project_desc}
              </Typography>
              <Typography color="primary" mt={2} variant="h6" sx={{ transition: 'fade in 0.5s ease',
                '&:hover': {
                  textDecoration: "underline"}}}>
                 
                      VIEW PROJECT
                    
                  </Typography>
            </CardContent>
            </Box>
            <CardMedia
              component="img"
              image={props.project_image}
              alt="image"
              sx={{ maxWidth: isLargeScreen && isMain ? "60%" : '25%', objectFit: 'cover', minHeight: "100%" }}
            />
          </CardActionArea>
          
        </Card>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          fullWidth={true}
          maxWidth={"md"}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        > 
        <Box maxWidth={'700px'} display="flex" flexDirection={"column"} margin={'auto'} overflow={''}>
          <DialogTitle>
            <Box display={"flex"} justifyContent={"space-between"} sx={{ width: "100%" }} alignItems={"flex-end"}>
              <IconButton
                color="primary"
                onClick={handleClose}
              >
                <ArrowBackIcon sx={{ fontSize: "3rem" }} />
              </IconButton>
            </Box>
            <Typography gutterBottom textAlign="end" variant="h4" fontWeight={400} component="div">{props.dialogTitle}</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText color={"black"}>
              {props.dialogContent}
            </DialogContentText>
          </DialogContent>
          </Box>
        </Dialog>
      </React.Fragment>
    </ThemeProvider>
  );
}

  