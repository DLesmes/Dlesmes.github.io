
import type { NavLink, Project, Post, Video, ContactLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { id: 'me', title: 'Me' },
  { id: 'projects', title: 'Projects' },
  { id: 'blog', title: 'Blog' },
  { id: 'videos', title: 'Videos' },
  { id: 'contact', title: 'Contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge data visualization platform built with React, D3, and TypeScript. Transforms complex datasets into interactive narratives.',
    tags: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'E-commerce Fusion',
    description: 'Scalable e-commerce backend with a headless architecture using Node.js and GraphQL, powering a seamless shopping experience.',
    tags: ['Node.js', 'GraphQL', 'PostgreSQL', 'Docker'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    repoUrl: '#',
  },
    {
    title: 'Project Beta',
    description: 'A serverless micro-frontend application that handles user authentication and profiles with AWS Lambda and React.',
    tags: ['React', 'Serverless', 'AWS', 'Micro-frontends'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    liveUrl: '#',
    repoUrl: '#',
  },
];

export const BLOG_POSTS_DATA: Post[] = [
  {
    title: 'Mastering State Management in Modern React',
    date: 'Oct 12, 2023',
    description: 'A deep dive into Zustand, Jotai, and how they compare to Redux and Context API for building scalable applications.',
    tags: ['React', 'State Management', 'Architecture'],
    imageUrl: 'https://picsum.photos/seed/blog1/600/400',
    url: '#',
  },
  {
    title: 'The Art of Minimal UI/UX Design',
    date: 'Sep 05, 2023',
    description: 'Principles of creating clean, intuitive, and beautiful user interfaces that prioritize content and user experience.',
    tags: ['UI/UX', 'Design', 'Frontend'],
    imageUrl: 'https://picsum.photos/seed/blog2/600/400',
    url: '#',
  },
];

export const VIDEOS_DATA: Video[] = [
  {
    title: 'The Primeagen: "The Last Data Structure You\'ll Ever Need"',
    creator: 'The Primeagen',
    duration: '21:43',
    posterUrl: 'https://i.ytimg.com/vi/1locyv_2vKY/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/1locyv_2vKY?autoplay=1&rel=0',
  },
  {
    title: 'Fireship: "100+ Computer Science Concepts Explained"',
    creator: 'Fireship',
    duration: '12:51',
    posterUrl: 'https://i.ytimg.com/vi/zOjov-2OZ0E/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/zOjov-2OZ0E?autoplay=1&rel=0',
  },
   {
    title: 'Lex Fridman: "Sam Altman: OpenAI, GPT-5, Sora, and the Future of AGI"',
    creator: 'Lex Fridman',
    duration: '2:49:15',
    posterUrl: 'https://i.ytimg.com/vi/DYzT-Pk6Ogw/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/DYzT-Pk6Ogw?autoplay=1&rel=0',
  },
];

export const CONTACT_LINKS_DATA: ContactLink[] = [
    { name: 'GitHub', url: 'https://github.com/[YourUsername]' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/[YourUsername]' },
    { name: 'X', url: 'https://x.com/[YourUsername]' },
    { name: 'Email', url: 'mailto:[your.email@example.com]' },
];
