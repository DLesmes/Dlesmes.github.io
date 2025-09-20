
import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import VideoModal from './components/VideoModal';
import { GithubIcon, LinkedinIcon, XIcon, EmailIcon, LinkIcon, PlayIcon } from './components/Icons';
import { NAV_LINKS, PROJECTS_DATA, BLOG_POSTS_DATA, VIDEOS_DATA, CONTACT_LINKS_DATA } from './constants';
import type { Project, Post, Video, ContactLink } from './types';

// Helper for Section Headers
const SectionHeader: React.FC<{ title: string; emoji: string }> = ({ title, emoji }) => (
  <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 md:mb-16 tracking-tight">
    <span role="img" aria-hidden="true" className="mr-3">{emoji}</span>
    {title}
  </h2>
);

// Card Components
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-surface/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
    <img className="w-full h-48 object-cover" src={project.imageUrl} alt={project.title} loading="lazy" />
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2 text-text-primary">{project.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="bg-accent/20 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <p className="text-text-secondary text-base mb-4">{project.description}</p>
      <div className="flex items-center space-x-4 mt-auto">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-accent hover:text-accent-hover transition-colors">
            Live Demo <LinkIcon className="ml-2 w-4 h-4" />
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-text-secondary hover:text-text-primary transition-colors">
            <GithubIcon className="mr-2 w-5 h-5" /> Source
          </a>
        )}
      </div>
    </div>
  </div>
);

const BlogCard: React.FC<{ post: Post }> = ({ post }) => (
    <a href={post.url} target="_blank" rel="noopener noreferrer" className="block bg-surface/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
        <img className="w-full h-48 object-cover" src={post.imageUrl} alt="" loading="lazy"/>
        <div className="p-6">
            <p className="text-sm text-text-secondary mb-1">{post.date}</p>
            <h3 className="font-bold text-xl mb-2 text-text-primary group-hover:text-accent transition-colors">{post.title}</h3>
            <p className="text-text-secondary text-base mb-4">{post.description}</p>
            <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                    <span key={tag} className="bg-accent/20 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                ))}
            </div>
        </div>
    </a>
);


const VideoCard: React.FC<{ video: Video; onPlay: (url: string) => void }> = ({ video, onPlay }) => (
    <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => onPlay(video.videoUrl)}>
        <img src={video.posterUrl} alt={video.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors" />
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
            <div>
                <h3 className="font-bold text-lg">{video.title}</h3>
                <p className="text-sm text-white/80">{video.creator}</p>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-xs bg-black/50 px-2 py-1 rounded">{video.duration}</span>
                <div className="w-12 h-12 bg-accent/80 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                    <PlayIcon className="w-6 h-6 text-white" />
                </div>
            </div>
        </div>
    </div>
);


const ContactChip: React.FC<{ link: ContactLink }> = ({ link }) => {
  const icons = {
    GitHub: <GithubIcon />,
    LinkedIn: <LinkedinIcon />,
    X: <XIcon />,
    Email: <EmailIcon />,
  };
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-surface/80 hover:bg-surface transition-colors duration-300 text-text-primary px-6 py-3 rounded-lg shadow-md hover:shadow-accent/30 hover:-translate-y-1">
      {icons[link.name]}
      <span className="font-semibold">{link.name}</span>
    </a>
  );
};


// Main App Component
const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('me');
  const [playingVideoUrl, setPlayingVideoUrl] = useState<string | null>(null);

  const handleSectionVisible = (id: string) => {
    setActiveSection(id);
  };

  return (
    <>
      <Header navLinks={NAV_LINKS} activeSection={activeSection} />
      <main id="main-content">
        {/* Me Section */}
        <Section id="me" imageUrl="https://picsum.photos/seed/me/1920/1080" onVisible={handleSectionVisible}>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-4">
              Hi, I'm [Your Name] <span role="img" aria-label="waving hand">👋</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8">
              I'm a <span className="text-accent font-bold">[Your Role]</span> from [Your City], passionate about building beautiful, functional, and user-centric digital experiences.
            </p>
            <a href="#projects" className="inline-block bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105 shadow-lg">
              View My Work
            </a>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" imageUrl="https://picsum.photos/seed/projects/1920/1080" onVisible={handleSectionVisible}>
          <SectionHeader title="My Projects" emoji="🚀" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PROJECTS_DATA.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        {/* Blog Section */}
        <Section id="blog" imageUrl="https://picsum.photos/seed/blog/1920/1080" onVisible={handleSectionVisible}>
          <SectionHeader title="My Blog" emoji="✍️" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {BLOG_POSTS_DATA.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </Section>

        {/* Videos Section */}
        <Section id="videos" imageUrl="https://picsum.photos/seed/videos/1920/1080" onVisible={handleSectionVisible}>
          <SectionHeader title="Recommended Videos" emoji="🎬" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {VIDEOS_DATA.map((video) => (
              <VideoCard key={video.title} video={video} onPlay={setPlayingVideoUrl} />
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" imageUrl="https://picsum.photos/seed/contact/1920/1080" onVisible={handleSectionVisible}>
          <SectionHeader title="Get In Touch" emoji="🤙" />
           <div className="text-center max-w-2xl mx-auto">
                <p className="text-lg text-text-secondary mb-8">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    {CONTACT_LINKS_DATA.map(link => <ContactChip key={link.name} link={link} />)}
                </div>
            </div>
        </Section>
      </main>

      <footer className="bg-base py-6 text-center text-text-secondary text-sm">
        <p>&copy; {new Date().getFullYear()} [Your Name]. All Rights Reserved.</p>
        <p>Built with React, TypeScript, and Tailwind CSS.</p>
      </footer>

      <VideoModal videoUrl={playingVideoUrl} onClose={() => setPlayingVideoUrl(null)} />
    </>
  );
};

export default App;
