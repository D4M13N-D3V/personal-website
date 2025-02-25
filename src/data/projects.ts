import { Project } from '@/components/ProjectCard';

// Sample project data
const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, shopping cart, and payment processing capabilities.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    images: [
      {
        src: 'https://source.unsplash.com/random/800x600?ecommerce',
        alt: 'E-commerce dashboard'
      },
      {
        src: 'https://source.unsplash.com/random/800x600?shopping',
        alt: 'Shopping cart interface'
      },
      {
        src: 'https://source.unsplash.com/random/800x600?payment',
        alt: 'Payment processing screen'
      }
    ],
    repositories: [
      { name: 'Frontend', url: 'https://github.com/username/ecommerce-frontend' },
      { name: 'Backend', url: 'https://github.com/username/ecommerce-api' }
    ],
    demoUrl: 'https://ecommerce-demo.example.com'
  },
  {
    id: '2',
    title: 'Weather App',
    description: 'A responsive weather application that provides real-time weather data and forecasts for locations worldwide.',
    technologies: ['JavaScript', 'React', 'OpenWeather API', 'CSS'],
    images: [
      {
        src: 'https://source.unsplash.com/random/800x600?weather',
        alt: 'Weather app interface'
      },
      {
        src: 'https://source.unsplash.com/random/800x600?forecast',
        alt: 'Forecast view'
      }
    ],
    repositories: [
      { name: 'Repo', url: 'https://github.com/username/weather-app' }
    ],
    demoUrl: 'https://weather-app-demo.example.com'
  },
  {
    id: '3',
    title: 'Task Management System',
    description: 'A comprehensive task management system with features like task assignment, progress tracking, and deadline notifications.',
    technologies: ['TypeScript', 'Angular', 'Firebase', 'Material UI'],
    images: [
      {
        src: 'https://source.unsplash.com/random/800x600?tasks',
        alt: 'Task management dashboard'
      }
    ],
    repositories: [
      { name: 'Repo', url: 'https://github.com/username/task-management' }
    ],
    demoUrl: 'https://task-app-demo.example.com'
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects, skills, and professional experience with a modern, responsive design.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    images: [
      {
        src: 'https://source.unsplash.com/random/800x600?portfolio',
        alt: 'Portfolio homepage'
      },
      {
        src: 'https://source.unsplash.com/random/800x600?website',
        alt: 'Projects section'
      },
      {
        src: 'https://source.unsplash.com/random/800x600?design',
        alt: 'Contact form'
      }
    ],
    repositories: [
      { name: 'Repo', url: 'https://github.com/username/portfolio' }
    ],
    demoUrl: 'https://portfolio-demo.example.com'
  },
  {
    id: '5',
    title: 'Recipe Finder',
    description: 'An application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine preferences.',
    technologies: ['React', 'Redux', 'Spoonacular API', 'Styled Components'],
    images: [
      {
        src: 'https://source.unsplash.com/random/800x600?recipe',
        alt: 'Recipe search interface'
      },
      {
        src: 'https://source.unsplash.com/random/800x600?food',
        alt: 'Recipe details'
      }
    ],
    repositories: [
      { name: 'Repo', url: 'https://github.com/username/recipe-finder' }
    ],
    demoUrl: 'https://recipe-finder-demo.example.com'
  },
  {
    id: '6',
    title: 'Fitness Tracker',
    description: 'A fitness tracking application that helps users monitor workouts, set goals, and track progress over time.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    images: [
      {
        src: 'https://source.unsplash.com/random/800x600?fitness',
        alt: 'Fitness tracker dashboard'
      },
      {
        src: 'https://source.unsplash.com/random/800x600?workout',
        alt: 'Workout tracking screen'
      },
      {
        src: 'https://source.unsplash.com/random/800x600?exercise',
        alt: 'Progress charts'
      }
    ],
    repositories: [
      { name: 'Repo', url: 'https://github.com/username/fitness-tracker' }
    ],
    demoUrl: 'https://fitness-app-demo.example.com'
  },
  {
    id: '7',
    title: 'Chat Application',
    description: 'A real-time chat application with features like private messaging, group chats, and file sharing capabilities.',
    technologies: ['Socket.io', 'Express', 'MongoDB', 'React'],
    images: [
      {
        src: 'https://source.unsplash.com/random/800x600?chat',
        alt: 'Chat interface'
      },
      {
        src: 'https://source.unsplash.com/random/800x600?messaging',
        alt: 'Messaging screen'
      }
    ],
    repositories: [
      { name: 'Repo', url: 'https://github.com/username/chat-app' }
    ],
    demoUrl: 'https://chat-app-demo.example.com'
  },
  // {
  //   id: '8',
  //   title: 'Budget Tracker',
  //   description: 'A financial management application that helps users track income, expenses, and savings goals with visual reports.',
  //   technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'D3.js'],
  //   images: [
  //     {
  //       src: 'https://source.unsplash.com/random/800x600?budget',
  //       alt: 'Budget dashboard'
  //     },
  //     {
  //       src: 'https://source.unsplash.com/random/800x600?finance',
  //       alt: 'Expense tracking'
  //     },
  //     {
  //       src: 'https://source.unsplash.com/random/800x600?money',
  //       alt: 'Financial reports'
  //     }
  //   ],
  //   repositories: [
  //     { name: 'Frontend', url: 'https://github.com/username/budget-tracker-ui' },
  //     { name: 'API', url: 'https://github.com/username/budget-tracker-api' }
  //   ],
  //   demoUrl: 'https://budget-app-demo.example.com'
  // }
];

export default projects;