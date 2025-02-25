import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { MasonryGridProps } from './types';
import MasonryItem from './MasonryItem';

const MasonryGrid: React.FC<MasonryGridProps> = ({ 
  items, 
  isVisible = true,
  animationDelay = 0 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    Array(items.length).fill(false)
  );

  // Staggered animation for items
  useEffect(() => {
    if (isVisible) {
      const timers: NodeJS.Timeout[] = [];
      
      items.forEach((_, index) => {
        const timer = setTimeout(() => {
          setVisibleItems(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, animationDelay + (index * 150)); // Stagger each item by 150ms
        
        timers.push(timer);
      });
      
      return () => timers.forEach(timer => clearTimeout(timer));
    } else {
      setVisibleItems(Array(items.length).fill(false));
    }
  }, [isVisible, items.length, animationDelay]);

  // Filter to only show image items
  const imageItems = items.filter(item => item.type === 'image');

  return (
    <Box
      sx={{
        width: '100%',
        mt: 2,
        mb: 2
      }}
    >
      {imageItems.map((item, index) => (
        <MasonryItem
          key={item.id}
          item={item}
          isVisible={visibleItems[index]}
          animationDelay={0} // Already handled by parent staggering
        />
      ))}
    </Box>
  );
};

export default MasonryGrid;