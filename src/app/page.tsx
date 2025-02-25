'use client';

import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import TypingAnimation from '@/components/TypingAnimation';

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && (
        <TypingAnimation
          titleText="My name is Damien."
          subtitleText="Welcome to my website!"
          typingSpeed={80}
          delayBeforeRemoval={3000}
          onComplete={() => setShowContent(true)}
        />
      )}
      
      <Fade in={showContent} timeout={1000} style={{ transitionDelay: showContent ? '500ms' : '0ms' }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          p: 4,
          visibility: showContent ? 'visible' : 'hidden'
        }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Damien's Website
          </Typography>
          <Typography variant="body1" paragraph>
          This is a test sentence.
          </Typography>
          {/* Add more content here */}
        </Box>
      </Fade>
    </>
  );
}
