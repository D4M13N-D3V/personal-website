import React from 'react';
import { Box, IconButton, Tooltip, SvgIcon } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SvgIconProps } from '@mui/material/SvgIcon';

// Custom icons for platforms without MUI icons
const GiteaIcon = (props: SvgIconProps) => (
  
  <SvgIcon {...props} viewBox="0 0 512 512">
  <rect rx="15%" height="512" width="512"  />
  <path d="M419 150c-98 7-186 2-276-1-27 0-63 19-61 67 3 75 71 82 99 83 3 14 35 62 59 65h104c63-5 109-213 75-214zm-311 67c-3-21 7-42 42-42 3 39 10 61 22 96-32-5-59-15-64-54z" fill="#592" />
  <path d="m293 152v70"  strokeWidth="9" />
  <g transform="rotate(25.7 496 -423)" strokeWidth="7" fill="#592">
    <path d="M561 246h97"  />
    <rect x="561" y="246" width="97" height="97" rx="16" />
    <path d="M592 245v75"  />
    <path d="M592 273c45 0 38-5 38 48" fill="none"  />
    <circle cx="592" cy="320" r="10" />
    <circle cx="630" cy="320" r="10" />
    <circle cx="592" cy="273" r="10" />
  </g>
</SvgIcon>
);

const DiscordIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
  </SvgIcon>
);

const XIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </SvgIcon>
);

const FilesIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
  </SvgIcon>
);

const AIIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
    <path d="M10 7H8v6h2zm6 0h-2v6h2z" />
  </SvgIcon>
);

// Interface for social media links
export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}

// Default social links
const defaultSocialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/damien-ostler-254663110/',
    icon: LinkedInIcon,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/d4m13n-d3v',
    icon: GitHubIcon,
  },
  {
    name: 'Gitea',
    url: 'https://git.d4m13n.dev',
    icon: GiteaIcon,
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/8dHnaarghJ',
    icon: DiscordIcon,
  },
  {
    name: 'X',
    url: 'https://x.com/d4m13n_d3v',
    icon: XIcon,
  },
  {
    name: 'Files',
    url: 'https://files.d4m13n.dev',
    icon: FilesIcon,
  },
  {
    name: 'AI',
    url: 'https://ai.d4m13n.dev',
    icon: AIIcon,
  },
];

// Glow effects
const whiteGlowEffects = {
  textShadow: '0 0 10px rgba(255, 255, 255, 0.25), 0 0 20px rgba(255, 255, 255, 0.15)',
  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))'
};

const blueGlowEffects = {
  textShadow: '0 0 10px rgba(79, 209, 255, 0.15), 0 0 20px rgba(79, 209, 255, 0.1)',
  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))'
};

interface SocialIconsProps {
  links?: SocialLink[];
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const SocialIcons: React.FC<SocialIconsProps> = ({ 
  links = defaultSocialLinks,
  position = 'top-right'
}) => {
  // Determine position styling
  const getPositionStyling = () => {
    switch (position) {
      case 'top-right':
        return { top: 16, right: 16 };
      case 'top-left':
        return { top: 16, left: 16 };
      case 'bottom-right':
        return { bottom: 16, right: 16 };
      case 'bottom-left':
        return { bottom: 16, left: 16 };
      default:
        return { top: 16, right: 16 };
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        zIndex: 1000,
        display: { xs: 'none', sm: 'flex' }, // Hide on mobile (xs), show on sm and up
        gap: 1,
        ...getPositionStyling()
      }}
    >
      {links.map((link) => (
        <Tooltip key={link.name} title={link.name} arrow>
          <IconButton
            component="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              color: 'white',
              ...whiteGlowEffects,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                color: '#4fd1ff',
                ...blueGlowEffects
              }
            }}
          >
            <link.icon />
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default SocialIcons;