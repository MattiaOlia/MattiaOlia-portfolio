import {React,useRef,useEffect,useState} from 'react'
import { ThemeProvider } from '@emotion/react';
import theme from "../theme"
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import ProjectCard from './ProjectCard';
import projectImage1 from "../images/ProjectImage1.png";
import projectImage2 from "../images/ProjectImage2.webp";
import projectImage3 from "../images/ProjectImage3.webp";
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
          { threshold: 0.5 } // Modifica questo valore per adattarlo alle tue esigenze
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
                  <Typography variant={isSmallScreen ? 'h2' : "h1"} fontWeight={400}>Projects</Typography>
                  <Box display={'flex'} justifyContent={"center"} sx={{padding:"5em "}} gap="2em" flexWrap={"wrap"}>
                    <ProjectCard 
                      project_image={projectImage1}
                      project_title={"Management Dashboard"}
                      project_desc={"dnsmndmnsmnmd dbdsn d  dn d sd nsnns"}
                    />
                    <ProjectCard 
                      project_image={projectImage2}
                      project_title={"QR code Generator"}
                      project_desc={"Lormendmnmsd snmdsnmdns  d smnmdnsmnd"}
                    />
                    <ProjectCard 
                      project_image={projectImage3}
                      project_title={"Cripto"}
                      project_desc={"dsmnm sdndmsnmdns dnsmndms snmnma mndnsmns dsnmsn  dmmdsmnds"}
                    />
                  </Box>
                </Box>
              </Fade>
            ) : (
              <Box>
                <Typography variant={isSmallScreen ? 'h2' : "h1"} fontWeight={400}>Projects</Typography>
                <Box display={'flex'} justifyContent={"center"} sx={{padding:"5em "}} gap="2em" flexWrap={"wrap"}>
                  <ProjectCard 
                    project_image={projectImage1}
                    project_title={"Management Dashboard"}
                    project_desc={"dnsmndmnsmnmd dbdsn d  dn d sd nsnns"}
                  />
                  <ProjectCard 
                    project_image={projectImage2}
                    project_title={"QR code Generator"}
                    project_desc={"Lormendmnmsd snmdsnmdns  d smnmdnsmnd"}
                  />
                  <ProjectCard 
                    project_image={projectImage3}
                    project_title={"Cripto"}
                    project_desc={"dsmnm sdndmsnmdns dnsmndms snmnma mndnsmns dsnmsn  dmmdsmnds"}
                  />
                </Box>
              </Box>
            )}
          </div>
        </ThemeProvider>
      )}
      export default Projects