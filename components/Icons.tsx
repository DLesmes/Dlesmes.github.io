
import React from 'react';

// A helper component to manage common SVG props
const IconWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className || "w-6 h-6"}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}>
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
      clipRule="evenodd"
    />
  </IconWrapper>
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </IconWrapper>
);

export const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </IconWrapper>
);

export const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}>
    <path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5c0 .966-.784 1.75-1.75 1.75H1.75C.784 21 0 20.216 0 19.25V4.75C0 3.784.784 3 1.75 3zM22 5.511l-9.43 6.345a1.75 1.75 0 01-2.14 0L2 5.51V19.25c0 .138.112.25.25.25h21.5a.25.25 0 00.25-.25V5.511zM3.23 5h17.54l-8.77 5.895L3.23 5z" />
  </IconWrapper>
);

export const LinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}>
        <path d="M13.41,10.59a2,2,0,0,0-2.82,0l-3,3a2,2,0,0,0,2.82,2.82l1.41-1.42a1,1,0,1,0-1.41-1.41L9,15a1,1,0,1,0,1.41,1.41l3-3a1,1,0,0,0,0-1.41A1,1,0,0,0,13.41,10.59Z" /><path d="M10.59,13.41a2,2,0,0,0,2.82,0l3-3a2,2,0,0,0-2.82-2.82L12.18,9a1,1,0,1,0,1.41,1.41L15,9a1,1,0,1,1-1.41,1.41l-3,3a1,1,0,0,0,0,1.41A1,1,0,0,0,10.59,13.41Z" />
    </IconWrapper>
);

export const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
    <IconWrapper className={className}>
        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.349 2.76-1.643l11.54 6.648c1.295.748 1.295 2.538 0 3.286L7.26 20.99c-1.23.706-2.76-.217-2.76-1.643V5.653z" clipRule="evenodd" />
    </IconWrapper>
);
