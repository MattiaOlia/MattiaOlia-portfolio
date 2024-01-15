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
import HOPE3G_3 from "../images/Hope3g/HOPE3G_3.svg"
import Hope3G from './dialogContent/Hope3G';
import HopeIS_1 from "../images/HopeIS/HopeIS_1.png"
import HopeIS from './dialogContent/HopeIS';

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
                <Box my={2} display={'flex'} justifyContent={"center"} alignItems={isLargeScreen ? "left" : "center"} gap="4em" flexDirection={" column"}>
                  
                
                  
                    <ProjectCard 
                      project_image={HOPE3G_3}
                      project_desc={"User friendly board portal software that aims to teaching safety through Augmented Reality."}
                      isMain={true}
                      dialogTitle={"HOPE 3G"}
                      dialogContent={<Hope3G />}
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
                      project_image={HopeIS_1}
                      dialogTitle={"HOPE Internal System"}
                      project_desc={"Development of HOPE's Internal System, optimizing staff management, asset storage, and organization details."}
                      project_ghl={"https://github.com/MattiaOlia/TaskTracker"}           
                      isMain={false}
                      dialogContent={<HopeIS />}
                      />        
                    
                   
                    <ProjectCard 
                      project_image={projectImage3}
                      dialogTitle={"QR-CODE GENERATOR"}
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