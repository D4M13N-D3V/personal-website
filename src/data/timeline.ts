import { TimelineItemData } from '@/components/Timeline/types';

// Timeline data representing career/project milestones
const timelineData: TimelineItemData[] = [
  {
    id: 'timeline-1',
    date: '2023',
    title: 'Full Stack Developer',
    description: 'Led development of a comprehensive e-commerce platform with advanced product management, shopping cart functionality, and secure payment processing.',
    actionUrl: 'https://github.com/username/ecommerce-platform',
    actionText: 'View Project',
    items: [
      {
        id: 'masonry-1-1',
        type: 'image',
        content: 'E-commerce dashboard',
        imageUrl: 'https://source.unsplash.com/random/800x600?ecommerce',
        width: 100,
        height: 200
      },
      {
        id: 'masonry-1-2',
        type: 'card',
        title: 'Payment Processing',
        content: 'Implemented secure payment processing with Stripe integration, supporting multiple payment methods and currencies.',
        backgroundColor: '#f5f5f5',
        width: 100
      },
      {
        id: 'masonry-1-3',
        type: 'text',
        title: 'Tech Stack',
        content: 'Technologies: React, Node.js, MongoDB, Express, Stripe API',
        backgroundColor: '#e3f2fd',
        width: 100
      }
    ]
  },
  {
    id: 'timeline-2',
    date: '2022',
    title: 'Frontend Developer',
    description: 'Designed and developed a responsive weather application providing real-time forecasts and historical weather data for locations worldwide.',
    actionUrl: 'https://github.com/username/weather-app',
    actionText: 'View Code',
    items: [
      {
        id: 'masonry-2-1',
        type: 'image',
        content: 'Weather app interface',
        imageUrl: 'https://source.unsplash.com/random/800x600?weather',
        width: 100,
        height: 180
      },
      {
        id: 'masonry-2-2',
        type: 'card',
        content: 'Created an intuitive UI with interactive maps and data visualizations for weather patterns.',
        backgroundColor: '#e8f5e9',
        width: 100
      }
    ]
  },
  {
    id: 'timeline-3',
    date: '2021',
    title: 'Backend Developer',
    description: 'Developed a scalable task management system with features for task assignment, progress tracking, and automated notifications.',
    actionUrl: 'https://github.com/username/task-management',
    actionText: 'Explore Project',
    items: [
      {
        id: 'masonry-3-1',
        type: 'image',
        content: 'Task management dashboard',
        imageUrl: 'https://source.unsplash.com/random/800x600?tasks',
        width: 100,
        height: 200
      },
      {
        id: 'masonry-3-2',
        type: 'text',
        content: 'Implemented real-time notifications and collaborative features using WebSockets.',
        backgroundColor: '#fff3e0',
        width: 100
      },
      {
        id: 'masonry-3-3',
        type: 'card',
        content: 'Technologies: TypeScript, Node.js, MongoDB, Socket.io',
        backgroundColor: '#f5f5f5',
        width: 100
      }
    ]
  },
  {
    id: 'timeline-4',
    date: '2020',
    title: 'UI/UX Designer',
    description: 'Created a personal portfolio website with modern design principles, responsive layouts, and interactive elements.',
    actionUrl: 'https://github.com/username/portfolio',
    actionText: 'View Portfolio',
    items: [
      {
        id: 'masonry-4-1',
        type: 'image',
        content: 'Portfolio homepage',
        imageUrl: 'https://source.unsplash.com/random/800x600?portfolio',
        width: 100,
        height: 180
      },
      {
        id: 'masonry-4-2',
        type: 'card',
        content: 'Designed with a focus on accessibility and performance optimization.',
        backgroundColor: '#e0f7fa',
        width: 100
      }
    ]
  },
  {
    id: 'timeline-5',
    date: '2019',
    title: 'Mobile Developer',
    description: 'Developed a cross-platform fitness tracking application that helps users monitor workouts, set goals, and track progress.',
    actionUrl: 'https://github.com/username/fitness-tracker',
    actionText: 'See Project',
    items: [
      {
        id: 'masonry-5-1',
        type: 'image',
        content: 'Fitness tracker dashboard',
        imageUrl: 'https://source.unsplash.com/random/800x600?fitness',
        width: 100,
        height: 200
      },
      {
        id: 'masonry-5-2',
        type: 'text',
        content: 'Implemented data visualization for workout statistics and progress tracking.',
        backgroundColor: '#f3e5f5',
        width: 100
      },
      {
        id: 'masonry-5-3',
        type: 'card',
        content: 'Technologies: React Native, Firebase, Redux, Chart.js',
        backgroundColor: '#f5f5f5',
        width: 100
      }
    ]
  }
];

export default timelineData;