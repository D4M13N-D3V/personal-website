import React, { useEffect, useState } from 'react';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import ProjectCard, { Project } from './ProjectCard';

interface ProjectMasonryProps {
  projects: Project[];
}

const ProjectMasonry: React.FC<ProjectMasonryProps> = ({ projects }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  
  // Assign varying widths to projects
  const getProjectWidths = () => {
    return projects.map((project, index) => {
      // Create a pattern of varying widths
      // This creates a more interesting masonry layout
      if (isXs) return 12; // On mobile, all cards are full width
      
      // Create a pattern for varying widths
      const patterns = [
        // Pattern 1: [6, 6, 12, 6, 6]
        [6, 6, 12, 6, 6],
        // Pattern 2: [8, 4, 4, 8, 12]
        [8, 4, 4, 8, 12],
        // Pattern 3: [4, 8, 4, 8, 4, 8]
        [4, 8, 4, 8, 4, 8]
      ];
      
      // Select a pattern based on the index
      const patternIndex = Math.floor(index / 5) % patterns.length;
      const pattern = patterns[patternIndex];
      const positionInPattern = index % pattern.length;
      
      return pattern[positionInPattern];
    });
  };
  
  const projectWidths = getProjectWidths();
  
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        px: { xs: 1, sm: 2 }, // Add horizontal padding that scales with screen size
      }}
    >
      <Grid container spacing={3} alignItems="flex-start">
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={projectWidths[index]}
            key={project.id}
            sx={{
              mb: 3,
              opacity: 1,
              transform: 'translateY(0)',
              transition: 'all 0.4s ease-in-out',
              '&:hover': {
                zIndex: 1,
              },
              // Add animation for when items are added to the DOM
              '@keyframes fadeIn': {
                from: {
                  opacity: 0,
                  transform: 'translateY(20px)',
                },
                to: {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
              animation: 'fadeIn 0.5s ease-in-out',
              // Stagger the animation based on index
              animationDelay: `${index * 0.05}s`,
            }}
          >
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectMasonry;