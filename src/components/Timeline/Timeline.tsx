import React, { useState, useEffect, useRef } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { TimelineProps, TimelineOrientation } from './types';
import TimelineItem from './TimelineItem';

const Timeline: React.FC<TimelineProps> = ({ 
  items, 
  orientation = 'vertical',
  className 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Force vertical orientation on mobile
  const effectiveOrientation: TimelineOrientation = isMobile ? 'vertical' : orientation;
  
  // Track which items are visible based on scroll position
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    Array(items.length).fill(false)
  );

  // Handle scroll-based animations
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const timelineItems = timelineRef.current.querySelectorAll('[data-timeline-item]');
        
        timelineItems.forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          const isVisible = 
            rect.top <= window.innerHeight * 0.8 && 
            rect.bottom >= window.innerHeight * 0.2;
          
          setVisibleItems(prev => {
            if (prev[index] !== isVisible) {
              const newState = [...prev];
              newState[index] = isVisible;
              return newState;
            }
            return prev;
          });
        });
      }
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items.length]);

  return (
    <Box
      ref={timelineRef}
      className={className}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: effectiveOrientation === 'vertical' ? 'column' : 'row',
        alignItems: effectiveOrientation === 'vertical' ? 'stretch' : 'flex-start',
        overflowX: effectiveOrientation === 'horizontal' ? 'auto' : 'visible',
        overflowY: 'visible',
        p: 2,
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          height: 8,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          borderRadius: 4,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: theme.palette.primary.main,
          borderRadius: 4,
        },
      }}
    >
      {items.map((item, index) => (
        <Box
          key={item.id}
          data-timeline-item
          sx={{
            ...(effectiveOrientation === 'horizontal' && {
              minWidth: 300,
              maxWidth: 400,
              mr: index < items.length - 1 ? 4 : 0,
            }),
          }}
        >
          <TimelineItem
            item={item}
            orientation={effectiveOrientation}
            isVisible={visibleItems[index]}
            index={index}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Timeline;