import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Fade, 
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TimelineItemProps } from './types';
import MasonryGrid from './MasonryGrid';

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  item, 
  orientation, 
  isVisible = true,
  index
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isHovered, setIsHovered] = useState(false);
  
  // Force vertical orientation on mobile
  const effectiveOrientation = isMobile ? 'vertical' : orientation;
  
  // Determine if this item should be on the left or right (for vertical orientation)
  // or top or bottom (for horizontal orientation)
  const isAlternating = index % 2 === 1;
  
  // Enhanced glow effects for the marker - using deep dark blue with stronger glow
  const markerGlowEffects = {
    boxShadow: isHovered
      ? '0 0 15px rgba(10, 25, 50, 0.6), 0 0 30px rgba(10, 25, 50, 0.5)'
      : '0 0 10px rgba(10, 25, 50, 0.5), 0 0 20px rgba(10, 25, 50, 0.4)',
    filter: isHovered
      ? 'drop-shadow(0 4px 8px rgba(10, 25, 50, 0.6))'
      : 'drop-shadow(0 2px 4px rgba(10, 25, 50, 0.5))',
    transition: 'all 0.3s ease-in-out',
  };
  
  // Subtle shadow for the content without white glow
  const contentShadowEffects = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease-in-out',
  };

  // Enhanced button hover effects - using darker blue glow
  const buttonHoverEffects = {
    boxShadow: '0 0 10px rgba(10, 25, 50, 0.5), 0 0 20px rgba(10, 25, 50, 0.4)',
    filter: 'drop-shadow(0 2px 4px rgba(10, 25, 50, 0.5))',
    '&:hover': {
      transform: 'translateX(5px)',
      boxShadow: '0 0 15px rgba(10, 25, 50, 0.6), 0 0 30px rgba(10, 25, 50, 0.5)',
      filter: 'drop-shadow(0 4px 8px rgba(10, 25, 50, 0.6))',
    },
    transition: 'all 0.3s ease-in-out',
  };

  // Render the timeline marker
  const renderMarker = () => (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          width: 60,
          height: 60,
          borderRadius: '4px', // Square with slightly rounded corners
          backgroundColor: '#0a1932', // Deep dark blue
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...markerGlowEffects,
        }}
      >
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
          {item.date}
        </Typography>
      </Box>
      
      {/* Line connecting to the next item */}
      {effectiveOrientation === 'vertical' ? (
        <Box
          sx={{
            width: 3,
            height: '100%',
            backgroundColor: '#0a1932', // Deep dark blue
            opacity: 0.5,
            mt: 1,
            mb: 1,
          }}
        />
      ) : (
        <Box
          sx={{
            height: 3,
            width: '100%',
            backgroundColor: '#0a1932', // Deep dark blue
            opacity: 0.5,
            ml: 1,
            mr: 1,
          }}
        />
      )}
    </Box>
  );

  // Render the content section
  const renderContent = () => (
    <Fade 
      in={isVisible} 
      timeout={800}
      style={{ 
        transitionDelay: `${index * 200}ms`,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 2,
          backgroundColor: 'background.paper',
          width: '100%',
          ...contentShadowEffects,
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          {item.title}
        </Typography>
        
        <Typography variant="body1" paragraph>
          {item.description}
        </Typography>
        
        <MasonryGrid 
          items={item.items} 
          isVisible={isVisible}
          animationDelay={index * 200 + 200} // Delay after the content fades in
        />
        
        {item.actionUrl && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              href={item.actionUrl}
              sx={{
                backgroundColor: '#0a1932', // Deep dark blue
                color: 'white', // White text
                ...buttonHoverEffects,
                '&:hover': {
                  ...buttonHoverEffects['&:hover'],
                  backgroundColor: '#152a45', // Slightly lighter on hover
                }
              }}
            >
              {item.actionText || 'Go to'}
            </Button>
          </Box>
        )}
      </Paper>
    </Fade>
  );

  // Layout for vertical orientation
  if (effectiveOrientation === 'vertical') {
    return (
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          mb: 4,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* For alternating layout on desktop */}
        {!isMobile && isAlternating ? (
          <>
            <Box sx={{ flex: 1 }}>{renderContent()}</Box>
            <Box sx={{ width: 80, display: 'flex', justifyContent: 'center' }}>
              {renderMarker()}
            </Box>
            <Box sx={{ flex: 1 }} /> {/* Empty space for alignment */}
          </>
        ) : (
          <>
            <Box sx={{ flex: 1 }} /> {/* Empty space for alignment */}
            <Box sx={{ width: 80, display: 'flex', justifyContent: 'center' }}>
              {renderMarker()}
            </Box>
            <Box sx={{ flex: 1 }}>{renderContent()}</Box>
          </>
        )}
      </Box>
    );
  }
  
  // Layout for horizontal orientation
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 300,
        maxWidth: 400,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isAlternating ? (
        <>
          <Box sx={{ height: 80, display: 'flex', alignItems: 'center' }}>
            {renderMarker()}
          </Box>
          <Box sx={{ width: '100%' }}>{renderContent()}</Box>
        </>
      ) : (
        <>
          <Box sx={{ width: '100%' }}>{renderContent()}</Box>
          <Box sx={{ height: 80, display: 'flex', alignItems: 'center' }}>
            {renderMarker()}
          </Box>
        </>
      )}
    </Box>
  );
};

export default TimelineItem;