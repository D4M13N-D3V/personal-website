import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Fade } from '@mui/material';
import { MasonryItemProps } from './types';

const MasonryItem: React.FC<MasonryItemProps> = ({
  item,
  isVisible = true,
  animationDelay = 0
}) => {
  // Define colors and effects
  const purpleBackground = 'rgba(128, 0, 255, 0.4)'; // Purple background
  const titleColor = '#8000ff'; // Purple color
  const titleGlow = '0 0 10px rgba(128, 0, 255, 0.175), 0 0 20px rgba(128, 0, 255, 0.125)'; // Purple glow (half intensity)
  
  // Enhanced shadow effects with purple glow (half intensity)
  const shadowEffects = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 0 10px rgba(128, 0, 255, 0.175), 0 0 20px rgba(128, 0, 255, 0.125)',
    filter: 'drop-shadow(0 2px 4px rgba(128, 0, 255, 0.15))',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3), 0 0 15px rgba(128, 0, 255, 0.25), 0 0 30px rgba(128, 0, 255, 0.175)',
      filter: 'drop-shadow(0 4px 8px rgba(128, 0, 255, 0.2))',
      transform: 'translateY(-5px)'
    }
  };

  // Render different content based on the item type
  const renderContent = () => {
    switch (item.type) {
      case 'image':
        return (
          <Card
            sx={{
              height: item.height || 'auto',
              width: '100%',
              backgroundColor: purpleBackground,
              ...shadowEffects
            }}
          >
            <CardMedia
              component="img"
              image={item.imageUrl || 'https://via.placeholder.com/300'}
              alt={item.content}
              sx={{
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Card>
        );
      
      case 'card':
        return (
          <Card
            sx={{
              height: item.height || 'auto',
              width: '100%',
              backgroundColor: purpleBackground,
              ...shadowEffects
            }}
          >
            <CardContent>
              <Typography variant="body1">{item.content}</Typography>
            </CardContent>
            {item.imageUrl && (
              <CardMedia
                component="img"
                image={item.imageUrl}
                alt="Card image"
                sx={{ height: 140 }}
              />
            )}
          </Card>
        );
      
      case 'text':
      default:
        return (
          <Box
            sx={{
              p: 2,
              height: item.height || 'auto',
              width: '100%',
              backgroundColor: purpleBackground,
              borderRadius: 1,
              ...shadowEffects
            }}
          >
            <Typography variant="body1">{item.content}</Typography>
          </Box>
        );
    }
  };

  return (
    <Fade
      in={isVisible}
      timeout={800}
      style={{
        transitionDelay: `${animationDelay}ms`,
      }}
    >
      <Box
        sx={{
          mb: 2,
          width: '100%', // Always take full width
          height: item.height || 'auto',
          opacity: isVisible ? 1 : 0,
        }}
      >
        {renderContent()}
      </Box>
    </Fade>
  );
};

export default MasonryItem;