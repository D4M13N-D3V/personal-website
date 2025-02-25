import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button, 
  IconButton,
  Chip,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Define the project image interface
interface ProjectImage {
  src: string;
  alt: string;
}

// Define the repository interface
interface Repository {
  name: string;
  url: string;
}

// Define the project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images: ProjectImage[];
  repositories?: Repository[]; // Multiple repositories with names
  demoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Colors and effects based on specifications
  const cardBgColor = theme.palette.grey[900]; // Dark grey from theme
  const textColor = '#ffffff'; // Crisp white
  const dropShadow = '0px 4px 8px rgba(0,0,0,0.3)';
  const ambientGlow = '0px 0px 15px rgba(255, 255, 255, 0.15)'; // White glow
  const enhancedGlow = '0px 0px 20px rgba(255, 255, 255, 0.3)'; // Enhanced white glow
  const titleColor = '#4fd1ff'; // Same blue as active tab
  const titleGlow = '0px 0px 10px rgba(255, 255, 255, 0.15), 0px 0px 20px rgba(255, 255, 255, 0.1)'; // White glow for title
  
  // Handle image navigation
  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };
  
  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        backgroundColor: cardBgColor, // Use the deep blue background color
        color: textColor,
        boxShadow: isHovered ? enhancedGlow : dropShadow,
        transition: 'all 0.3s ease-in-out',
        height: '100%', // Ensure card takes full height
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: enhancedGlow,
        },
      }}
    >
      {project.images.length > 0 && (
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            image={project.images[currentImageIndex].src}
            alt={project.images[currentImageIndex].alt}
            sx={{
              objectFit: 'cover',
              height: { xs: '180px', sm: '220px', md: '240px' }, // Responsive height
              loading: 'lazy', // Enable lazy loading for performance
              transition: 'all 0.3s ease-in-out'
            }}
          />
          
          {/* Image navigation controls - only show if there are multiple images */}
          {project.images.length > 1 && (
            <>
              <IconButton
                size="small"
                onClick={handlePrevImage}
                sx={{
                  position: 'absolute',
                  left: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: textColor,
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    boxShadow: ambientGlow,
                  },
                  transition: 'all 0.3s ease-in-out',
                  opacity: isHovered || isMobile ? 1 : 0,
                }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
              
              <IconButton
                size="small"
                onClick={handleNextImage}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: textColor,
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    boxShadow: ambientGlow,
                  },
                  transition: 'all 0.3s ease-in-out',
                  opacity: isHovered || isMobile ? 1 : 0,
                }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
              
              {/* Image counter indicator */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  right: 8,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: textColor,
                  padding: '2px 8px',
                  borderRadius: '10px',
                  fontSize: '0.75rem',
                  opacity: isHovered || isMobile ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out',
                }}
              >
                {currentImageIndex + 1} / {project.images.length}
              </Box>
            </>
          )}
        </Box>
      )}
      
      <CardContent sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        p: { xs: 2, sm: 3 }, // Responsive padding
        '&:last-child': { pb: { xs: 2, sm: 3 } } // Override MUI's default padding-bottom
      }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 'bold',
            color: titleColor,
            textShadow: titleGlow,
            mb: 1.5,
            lineHeight: 1.2
          }}
        >
          {project.title}
        </Typography>
        
        <Typography
          variant="body2"
          sx={{
            mb: 2.5,
            flexGrow: 1,
            opacity: 0.9,
            lineHeight: 1.6,
            letterSpacing: '0.015em'
          }}
        >
          {project.description}
        </Typography>
        
        <Box
          sx={{
            mb: 3,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 0.75
          }}
        >
          {project.technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                backgroundColor: 'rgba(79, 209, 255, 0.4)',
                color: textColor,
                borderRadius: '6px',
                padding: '4px 12px',
                minWidth: '80px',
                boxShadow: '0 0 10px rgba(10, 25, 50, 0.5), 0 0 20px rgba(10, 25, 50, 0.4)',
                filter: 'drop-shadow(0 2px 4px rgba(10, 25, 50, 0.5))',
                '&:hover': {
                  backgroundColor: 'rgba(79, 209, 255, 0.5)',
                  boxShadow: '0 0 15px rgba(10, 25, 50, 0.6), 0 0 30px rgba(10, 25, 50, 0.5)',
                  filter: 'drop-shadow(0 4px 8px rgba(10, 25, 50, 0.6))',
                },
                transition: 'all 0.3s ease-in-out',
              }}
            />
          ))}
        </Box>
        
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
            justifyContent: 'flex-end',
            mt: 'auto', // Push buttons to bottom of card
            pt: 1 // Add some padding at the top
          }}
        >
          {/* Repository buttons */}
          {project.repositories && project.repositories.length > 0 && (
            <>
              {project.repositories.map((repo, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  size="small"
                  startIcon={<GitHubIcon />}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: textColor,
                    borderColor: 'rgba(255,255,255,0.3)',
                    borderRadius: '6px',
                    padding: '4px 12px',
                    minWidth: '80px',
                    boxShadow: '0 0 5px rgba(10, 25, 50, 0.3), 0 0 10px rgba(10, 25, 50, 0.2)',
                    '&:hover': {
                      borderColor: '#4fd1ff',
                      backgroundColor: 'rgba(79, 209, 255, 0.1)',
                      boxShadow: '0 0 10px rgba(10, 25, 50, 0.5), 0 0 20px rgba(10, 25, 50, 0.4)',
                      filter: 'drop-shadow(0 2px 4px rgba(10, 25, 50, 0.5))',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  {repo.name}
                </Button>
              ))}
            </>
          )}
          
          {/* Demo button */}
          {project.demoUrl && (
            <Button
              variant="contained"
              size="small"
              startIcon={<LaunchIcon />}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: 'rgba(79, 209, 255, 0.4)',
                color: textColor,
                borderRadius: '6px',
                padding: '4px 12px',
                minWidth: '80px',
                boxShadow: '0 0 10px rgba(10, 25, 50, 0.5), 0 0 20px rgba(10, 25, 50, 0.4)',
                filter: 'drop-shadow(0 2px 4px rgba(10, 25, 50, 0.5))',
                '&:hover': {
                  backgroundColor: 'rgba(79, 209, 255, 0.5)',
                  boxShadow: '0 0 15px rgba(10, 25, 50, 0.6), 0 0 30px rgba(10, 25, 50, 0.5)',
                  filter: 'drop-shadow(0 4px 8px rgba(10, 25, 50, 0.6))',
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              Demo
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;