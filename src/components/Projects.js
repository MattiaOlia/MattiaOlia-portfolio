import {React,useRef,useEffect,useState} from 'react'
import { ThemeProvider } from '@emotion/react';
import theme from "../theme"
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import ProjectCard from './ProjectCard';
import projectImage1 from "../images/ProjectImage1.png";
import projectImage2 from "../images/ProjectImage2.png";
import projectImage3 from "../images/ProjectImage3.png";
import {Fade} from "@mui/material"

export function Projects() {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const isLargeScreen = useMediaQuery('(min-width: 1200px)');
    const projectsRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              setIsVisible(true);
            }
          },
          { threshold: 0.5 } 
        );
    
        observer.observe(projectsRef.current);
    
        return () => {
          observer.disconnect();
        };
      }, []);

      return (
        <ThemeProvider theme={theme}>
          <div ref={projectsRef} id="projects">
            {isLargeScreen ? (
              <Fade in={isVisible} timeout={1000}>
                <Box>
                  <Typography variant={isSmallScreen ? 'h2' : "h1"} fontWeight={400}>My projects</Typography>
                  <Box display={'flex'} justifyContent={"center"} sx={{padding:"5em "}} gap="2em" flexWrap={"wrap"}>
                  
                  <a href="https://mattiaolia.github.io/CTrack/" target="_blank" rel="noopener noreferrer">
                    <ProjectCard 
                      project_image={projectImage1}
                      project_title={"C-Track"}
                      project_desc={"C-Track is a web-based platform that provides real-time market prices, charts, and comprehensive information for various cryptocurrencies. It allows users to stay updated with the latest market trends, analyze historical data, and make informed decisions."}
                      project_ghl={"https://github.com/MattiaOlia/CTrack"}  
                   />
                    </a>

                     <a href="https://mattiaolia.github.io/TaskTracker/" target="_blank" rel="noopener noreferrer">
                      <ProjectCard 
                      project_image={projectImage2}
                      project_title={"Task Tracker Dashboard"}
                      project_desc={" This project is a web-based task tracker dashboard that helps you manage your daily tasks efficiently.It features a dynamic calendar where you can schedule and organize your tasks based on specific dates and it provides a convenient functionality to assign members to each task."}
                      project_ghl={"https://github.com/MattiaOlia/TaskTracker"}                    
                    /></a>
                    <a href="https://mattiaolia.github.io/qr-generator/" target="_blank" rel="noopener noreferrer">
                    <ProjectCard 
                      project_image={projectImage3}
                      project_title={"QR-CODE GENERATOR"}
                      project_desc={"With QR-CODE GENERATOR users can easily generate QR codes containing different types of information, such as URLs, text, contact details, and more. One unique feature of QR-Gen is the ability to customize the colors of the QR code to match your branding or personal preferences."}
                      project_ghl={"https://github.com/MattiaOlia/qr-generator"}
                    />
                    </a>
                  </Box>
                </Box>
              </Fade>
            ) : (
              <Box>
                <Typography variant={isSmallScreen ? 'h2' : "h1"} fontWeight={400}>My Projects</Typography>
                <Box display={'flex'} justifyContent={"center"} sx={{padding:"5em "}} gap="2em" flexWrap={"wrap"}>
                  
                <a href="https://mattiaolia.github.io/CTrack/" target="_blank" rel="noopener noreferrer">
                    <ProjectCard 
                      project_image={projectImage1}
                      project_title={"C-Track"}
                      project_desc={"C-Track is a web-based platform that provides real-time market prices, charts, and comprehensive information for various cryptocurrencies. It allows users to stay updated with the latest market trends, analyze historical data, and make informed decisions."}
                      project_ghl={"https://github.com/MattiaOlia/CTrack"}  
                   />
                    </a>

                     <a href="https://mattiaolia.github.io/TaskTracker/" target="_blank" rel="noopener noreferrer">
                      <ProjectCard 
                      project_image={projectImage2}
                      project_title={"Task Tracker Dashboard"}
                      project_desc={" This project is a web-based task tracker dashboard that helps you manage your daily tasks efficiently.It features a dynamic calendar where you can schedule and organize your tasks based on specific dates and it provides a convenient functionality to assign members to each task."}
                      project_ghl={"https://github.com/MattiaOlia/TaskTracker"}                    
                    /></a>
                    <a href="https://mattiaolia.github.io/qr-generator/" target="_blank" rel="noopener noreferrer">
                    <ProjectCard 
                      project_image={projectImage3}
                      project_title={"QR-CODE GENERATOR"}
                      project_desc={"With QR-CODE GENERATOR users can easily generate QR codes containing different types of information, such as URLs, text, contact details, and more. One unique feature of QR-Gen is the ability to customize the colors of the QR code to match your branding or personal preferences."}
                      project_ghl={"https://github.com/MattiaOlia/qr-generator"}
                    />
                    </a>

                </Box>
              </Box>
            )}
          </div>
        </ThemeProvider>
      )}
      export default Projects