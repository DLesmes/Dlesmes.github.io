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
    title: 'ETA Agent System',
    description: 'The ETA Agent System is an AI-driven logistics anomaly handling and ETA optimization platform. It provides intelligent chat-based interactions for both logistics users and drivers, with real-time integration to weather and traffic APIs for accurate ETA predictions.',
    tags: ['Streamlit', 'FastAPI', 'SQLite', 'OpenAI GPT-4', 'LangChain', 'Docker'],
    imageUrl: '/images/eta-agent-system.png',
    liveUrl: 'https://github.com/DLesmes/tt_hk_lai/tree/main',
    repoUrl: 'https://github.com/DLesmes/tt_hk_lai/tree/main',
  },
  {
    title: 'Jobbot',
    description: 'Is a Telegram LLM-powered chatbot designed to simplify your job search. It scrapes the latest job postings from LinkedIn based on your specified keywords, then uses a hybrid recommendation system to identify the most relevant opportunities. This system leverages vector databases, business heuristics, and NLP techniques like keyword extraction and language identification, enhanced with Open CLIP embeddings for state-of-the-art semantic understanding. JobBot delivers personalized job recommendations directly to your Telegram, streamlining your job hunt and connecting you with the best-matched roles.',
    tags: ['Python 3.12', 'Docker', 'Telegram API', 'NLP', 'Open CLIP', 'Vector DB'],
    imageUrl: '/images/jobbot.png',
    repoUrl: 'https://github.com/DLesmes/jobbot/blob/main/README.md',
  },
  {
    title: 'Gemma Python Chatbot',
    description: 'Gemma Python Chatbot 🚀🚀 to answer common questions about the 🐍 Python programming language. This code is generated for the kaggel competition Google – AI Assistants for Data Tasks with Gemma Build tools to assist Kaggle developers',
    tags: ['Google Gemma', 'PyTorch', 'Python', 'Kaggle', 'AI/ML'],
    imageUrl: 'https://i.postimg.cc/Nfpn7mxR/gemma.png',
    liveUrl: 'https://www.kaggle.com/competitions/data-assistants-with-gemma/overview',
    repoUrl: 'https://www.kaggle.com/code/dlesmes/gemma-python-chat-gpc',
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
    title: 'Fei-Fei Li: Spatial Intelligence is the Next Frontier in AI',
    creator: 'Y Combinator',
    duration: '44:21',
    posterUrl: 'https://i.ytimg.com/vi/_PioN-CpOP0/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/_PioN-CpOP0?autoplay=1&rel=0',
  },
  {
    title: 'Introducing GPT-5',
    creator: 'OpenAI',
    duration: '1:29',
    posterUrl: 'https://i.ytimg.com/vi/boJG84Jcf-4/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/boJG84Jcf-4?autoplay=1&rel=0',
  },
  {
    title: '12-Factor Agents: Patterns of reliable LLM applications — Dex Horthy, HumanLayer',
    creator: 'AI Engineer',
    duration: '17:05',
    posterUrl: 'https://i.ytimg.com/vi/8kMaTybvDUw/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/8kMaTybvDUw?autoplay=1&rel=0',
  },
];

export const CONTACT_LINKS_DATA: ContactLink[] = [
    { name: 'GitHub', url: 'https://github.com/DLesmes' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/diegolesmes-lnkdn' },
    { name: 'X', url: 'https://x.com/Dalejmez' },
    { name: 'Email', url: 'mailto:dalejandro25201@gmail.com' },
];