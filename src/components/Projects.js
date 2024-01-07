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
import { motion } from 'framer-motion';
import Modal from './Modal';
import { Button } from 'react-scroll';


export function Projects() {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');;
    const isLargeScreen = useMediaQuery('(min-width: 900px)');
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
           
             {/* <Fade in={isVisible} timeout={1000}> */}
               
              <Box p={2}>

                <Typography my={2} ml={5} variant={isSmallScreen ? 'h2' : "h1"} fontWeight={400}>Work</Typography>
                <Box display={'flex'} justifyContent={"center"} alignItems={isLargeScreen ? "left" : "center"} gap="4em" flexDirection={" column"}>
                  
                
                  
                    <ProjectCard 
                      project_image={projectImage1}
                      project_title={"C-Track"}
                      project_desc={"C-Track is a web-based platform that provides bfgfg nbbnbn bnnvv bnbnvhgh nmnm"}
                      project_ghl={"https://github.com/MattiaOlia/CTrack"}  
                      isMain={true}
                   />
                   
                
                  

                     <Box display={"flex"}  >
                     {isLargeScreen && <Box  sx={{
        height: '100',
        width: '5px', 
        backgroundColor: "#1b5e20",  
        borderRadius: '5px',
        marginRight:"3em"  
                      }}></Box>}
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} alignSelf={"center"} gap="4em" >
                      <ProjectCard 
                      project_image={projectImage2}
                      project_title={"Task Tracker Dashboard"}
                      project_desc={" This project is a web-based task tracker dashboard that helps you manage your daily tasks efficiently"}
                      project_ghl={"https://github.com/MattiaOlia/TaskTracker"}           
                      isMain={false}
                      />        
                    
                   
                    <ProjectCard 
                      project_image={projectImage3}
                      project_title={"QR-CODE GENERATOR"}
                      project_desc={"With QR-CODE GENERATOR users can easily generate QR codes containing different types of information, such as URLs, text, contact details, and more. One unique feature of QR-Gen is the ability to customize the colors of the QR code to match your branding or personal preferences."}
                      project_ghl={false}
                    />
                  </Box>
                    
                    </Box>
                </Box>
              </Box>
             {/* </Fade> */}
             
            
          </div>
        </ThemeProvider>
      )}
      export default Projects