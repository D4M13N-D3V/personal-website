'use client';

import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TypingAnimation from '@/components/TypingAnimation';
import ProjectMasonry from '@/components/ProjectMasonry';
import SocialIcons from '@/components/SocialIcons';
import Timeline from '@/components/Timeline/Timeline';
import projects from '@/data/projects';
import timelineData from '@/data/timeline';

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <>
      {!showContent && (
        <TypingAnimation
          titleText="My name is D4m13n."
          subtitleText="Welcome to my website!"
          typingSpeed={80}
          delayBeforeRemoval={3000}
          onComplete={() => setShowContent(true)}
        />
      )}
      
      {/* Social Icons */}
      {showContent && <SocialIcons />}
      
      <Fade in={showContent} timeout={1000} style={{ transitionDelay: showContent ? '500ms' : '0ms' }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          p: { xs: 2, sm: 3, md: 4 },
          visibility: showContent ? 'visible' : 'hidden'
        }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 4
            }}
          >
            <Box
              component="span"
              sx={{
                color: '#4fd1ff',
                textShadow: '0 0 10px rgba(79, 209, 255, 0.15), 0 0 20px rgba(79, 209, 255, 0.1)',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))'
              }}
            >
              d4m13n
            </Box>
            <Box
              component="span"
              sx={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.25), 0 0 20px rgba(255, 255, 255, 0.15)',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))'
              }}
            >
              .dev
            </Box>
          </Typography>
          
          <Box sx={{ width: '100%', mb: 4 }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              centered
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: '#4fd1ff',
                  height: 3,
                  boxShadow: '0px 0px 15px rgba(79, 209, 255, 0.3)',
                },
                '& .MuiTab-root': {
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    color: '#4fd1ff',
                    textShadow: '0px 0px 15px rgba(79, 209, 255, 0.3)',
                  },
                },
                '& .Mui-selected': {
                  color: '#4fd1ff !important',
                  textShadow: '0px 0px 15px rgba(79, 209, 255, 0.3)',
                }
              }}
            >
              <Tab label={
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row'
                }}>
                  <Box sx={{ display: { xs: 'block', sm: 'none' } }}>Software</Box>
                  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Software Dev Projects</Box>
                </Box>
              } />
              <Tab label={
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row'
                }}>
                  <Box sx={{ display: { xs: 'block', sm: 'none' } }}>Game Dev</Box>
                  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Game Dev Projects</Box>
                </Box>
              } />
              <Tab label="Resume" />
              <Tab
                label="Contact"
                sx={{
                  display: { xs: 'none', sm: 'flex' }
                }}
              />
            </Tabs>
          </Box>
          
          {activeTab === 0 && (
            <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto' }}>
              <ProjectMasonry projects={projects} />
            </Box>
          )}
          
          {activeTab === 1 && (
            <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', p: 2 }}>
              <ProjectMasonry projects={projects} />
            </Box>
          )}
          
          {activeTab === 2 && (
            <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', p: 2 }}>
              <Timeline items={timelineData} orientation="vertical" />
            </Box>
          )}
          
          {activeTab === 3 && (
            <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto', p: 2 }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2 }}>
                About Me
              </Typography>
              <Typography variant="body1" paragraph>
                I'm a passionate developer with expertise in modern web technologies.
                I love creating responsive, user-friendly applications that solve real-world problems.
              </Typography>
              <Typography variant="body1">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities.
              </Typography>
            </Box>
          )}
          
          {activeTab === 3 && (
            <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto', p: 2 }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2 }}>
                Contact
              </Typography>
              <Typography variant="body1" paragraph>
                Feel free to reach out to me for collaboration opportunities or just to say hello!
              </Typography>
              <Button
                variant="contained"
                href="mailto:contact@example.com"
                sx={{
                  backgroundColor: '#1a365d',
                  color: '#ffffff',
                  boxShadow: '0px 4px 8px rgba(0,0,0,0.3)',
                  '&:hover': {
                    backgroundColor: '#2a466d',
                    boxShadow: '0px 0px 15px rgba(79, 209, 255, 0.3)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                Email Me
              </Button>
            </Box>
          )}
        </Box>
      </Fade>
    </>
  );
}
