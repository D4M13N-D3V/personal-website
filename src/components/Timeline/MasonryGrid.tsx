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

  // Determine column count based on screen size
  const getColumnCount = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  // Distribute items into columns for masonry layout
  const getColumns = () => {
    const columnCount = getColumnCount();
    const columns: React.ReactNode[][] = Array.from({ length: columnCount }, () => []);
    
    items.forEach((item, index) => {
      const columnIndex = index % columnCount;
      columns[columnIndex].push(
        <MasonryItem 
          key={item.id} 
          item={item} 
          isVisible={visibleItems[index]}
          animationDelay={0} // Already handled by parent staggering
        />
      );
    });
    
    return columns;
  };

  const columns = getColumns();
  const columnCount = getColumnCount();

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        width: '100%',
        mt: 2,
        mb: 2
      }}
    >
      {columns.map((column, index) => (
        <Box 
          key={`column-${index}`}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: `calc(${100 / columnCount}% - ${(columnCount - 1) * 8 / columnCount}px)`,
          }}
        >
          {column}
        </Box>
      ))}
    </Box>
  );
};

export default MasonryGrid;