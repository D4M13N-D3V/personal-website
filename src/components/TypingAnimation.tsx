import React, { useState, useEffect } from 'react';
import { Box, Typography, Fade, Stack } from '@mui/material';

interface TypingAnimationProps {
  titleText: string;
  subtitleText: string;
  typingSpeed?: number;
  delayBeforeRemoval?: number;
  onComplete?: () => void;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  titleText,
  subtitleText,
  typingSpeed = 100,
  delayBeforeRemoval = 2000,
  onComplete
}) => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTitleComplete, setIsTitleComplete] = useState(false);
  const [isSubtitleComplete, setIsSubtitleComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [cursorPosition, setCursorPosition] = useState('title'); // 'title' or 'subtitle'

  // Start cursor blinking immediately
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  // Handle the title typing animation
  useEffect(() => {
    if (!isTitleComplete) {
      setCursorPosition('title');
      if (displayedTitle.length < titleText.length) {
        const timeout = setTimeout(() => {
          setDisplayedTitle(titleText.substring(0, displayedTitle.length + 1));
        }, typingSpeed);
        
        return () => clearTimeout(timeout);
      } else {
        setIsTitleComplete(true);
      }
    }
  }, [displayedTitle, titleText, typingSpeed, isTitleComplete]);

  // Handle the subtitle typing animation (starts after title is complete)
  useEffect(() => {
    if (isTitleComplete && !isSubtitleComplete) {
      setCursorPosition('subtitle');
      if (displayedSubtitle.length < subtitleText.length) {
        const timeout = setTimeout(() => {
          setDisplayedSubtitle(subtitleText.substring(0, displayedSubtitle.length + 1));
        }, typingSpeed);
        
        return () => clearTimeout(timeout);
      } else {
        setIsSubtitleComplete(true);
      }
    }
  }, [displayedSubtitle, subtitleText, typingSpeed, isTitleComplete, isSubtitleComplete]);

  // Handle fade out after both animations are complete
  useEffect(() => {
    if (isSubtitleComplete) {
      // Start fade out animation
      const fadeOutTimeout = setTimeout(() => {
        setIsFadingOut(true);
      }, delayBeforeRemoval);
      
      // Set a timeout to remove the animation after fade out
      const removalTimeout = setTimeout(() => {
        setIsVisible(false);
        if (onComplete) {
          onComplete();
        }
      }, delayBeforeRemoval + 1000); // Add 1000ms for fade out duration
      
      return () => {
        clearTimeout(fadeOutTimeout);
        clearTimeout(removalTimeout);
      };
    }
  }, [isSubtitleComplete, delayBeforeRemoval, onComplete]);

  if (!isVisible) {
    return null;
  }

  // Cursor component that can be reused
  const Cursor = () => (
    <Box
      component="span"
      sx={{
        opacity: showCursor ? 1 : 0,
        transition: 'opacity 0.5s',
        ml: 0.5,
        display: 'inline-block'
      }}
    >
      |
    </Box>
  );

  // Default text shadow and glow styles
  const defaultTextEffects = {
    textShadow: '0 0 10px rgba(255, 255, 255, 0.25), 0 0 20px rgba(255, 255, 255, 0.15)',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))'
  };

  // Blue glow for "Damien"
  const blueGlowEffects = {
    textShadow: '0 0 10px rgba(25, 118, 210, 0.35), 0 0 20px rgba(25, 118, 210, 0.25)',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))'
  };

  // Red glow for exclamation mark
  const redGlowEffects = {
    textShadow: '0 0 10px rgba(244, 67, 54, 0.35), 0 0 20px rgba(244, 67, 54, 0.25)',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))'
  };

  // Function to render the title with "Damien" in blue
  const renderStyledTitle = () => {
    // The full text we're typing
    const fullTitleText = titleText;
    
    // Find where "Damien" starts in the full text
    const damienStartIndex = fullTitleText.toLowerCase().indexOf('damien');
    
    // If "Damien" isn't in the text (shouldn't happen, but just in case)
    if (damienStartIndex === -1) {
      return (
        <>
          {displayedTitle}
          {cursorPosition === 'title' && <Cursor />}
        </>
      );
    }
    
    // The end index of "Damien" in the full text
    const damienEndIndex = damienStartIndex + 6; // "Damien" is 6 characters
    
    // Now we need to check what parts of the displayed text correspond to each section
    const result = [];
    
    // Add each character with appropriate styling
    for (let i = 0; i < displayedTitle.length; i++) {
      // If this character is part of "Damien"
      if (i >= damienStartIndex && i < damienEndIndex) {
        result.push(
          <Box
            key={i}
            component="span"
            sx={{
              color: '#1976d2', /* Material UI primary blue */
              ...blueGlowEffects
            }}
          >
            {displayedTitle[i]}
          </Box>
        );
      } else {
        // Regular character
        result.push(displayedTitle[i]);
      }
    }
    
    return (
      <>
        {result}
        {cursorPosition === 'title' && <Cursor />}
      </>
    );
  };

  // Function to render the subtitle with red exclamation mark
  const renderStyledSubtitle = () => {
    // If there's no exclamation mark yet in the displayed text
    if (!displayedSubtitle.includes('!')) {
      return (
        <>
          {displayedSubtitle}
          {cursorPosition === 'subtitle' && <Cursor />}
        </>
      );
    }
    
    // Find the exclamation mark
    const exclamationIndex = displayedSubtitle.indexOf('!');
    
    // Split the displayed text into parts
    const beforeExclamation = displayedSubtitle.substring(0, exclamationIndex);
    const exclamationMark = displayedSubtitle.substring(exclamationIndex, exclamationIndex + 1); // "!"
    
    return (
      <>
        {beforeExclamation}
        <Box
          component="span"
          sx={{
            color: '#f44336', /* Material UI red */
            ...redGlowEffects
          }}
        >
          {exclamationMark}
        </Box>
        {cursorPosition === 'subtitle' && <Cursor />}
      </>
    );
  };

  return (
    <Fade in={!isFadingOut} timeout={1000}>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'background.default',
          zIndex: 1000
        }}
      >
        <Stack spacing={1} alignItems="center">
          <Typography
            variant="h2"
            component="div"
            sx={{
              fontWeight: 'bold',
              ...defaultTextEffects
            }}
          >
            {renderStyledTitle()}
          </Typography>
          
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: 'text.secondary',
              ...defaultTextEffects
            }}
          >
            {renderStyledSubtitle()}
          </Typography>
        </Stack>
      </Box>
    </Fade>
  );
};

export default TypingAnimation;