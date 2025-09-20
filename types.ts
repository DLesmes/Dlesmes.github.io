
export interface NavLink {
  id: string;
  title: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Post {
  title: string;
  date: string;
  description: string;
  tags: string[];
  imageUrl: string;
  url: string;
}

export interface Video {
  title: string;
  creator: string;
  duration: string;
  posterUrl: string;
  videoUrl: string;
}

export interface ContactLink {
  name: 'GitHub' | 'LinkedIn' | 'X' | 'Email';
  url: string;
}
