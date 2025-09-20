# 📝 Portfolio Customization Guide

This is a personal portfolio website built with React, TypeScript, and Vite. Follow this guide to customize it with your content.

## 🚀 Quick Start

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## 📋 Customization Guide

### 1️⃣ HERO/ME SECTION
**File:** `App.tsx` (lines 115-122)
```
Line 116: Replace [Your Name] with your name
Line 119: Replace [Your Role] with your job title (e.g., "Full-Stack Developer")
Line 119: Replace [Your City] with your location
```

### 2️⃣ PROJECTS SECTION
**File:** `constants.ts` (lines 12-36)
For each project, update:
```
Line 14/22/29: title - Your project name
Line 15/23/30: description - What the project does
Line 16/24/31: tags - Technologies used
Line 17/25/32: imageUrl - Your project screenshot URL
Line 18/26/33: liveUrl - Live demo link (remove if no demo)
Line 19/27/34: repoUrl - GitHub repo link
```

### 3️⃣ BLOG POSTS
**File:** `constants.ts` (lines 38-55)
For each blog post:
```
Line 40/48: title - Blog post title
Line 41/49: date - Publication date
Line 42/50: description - Brief summary
Line 43/51: tags - Topics covered
Line 44/52: imageUrl - Blog post thumbnail
Line 45/53: url - Link to full article
```

### 4️⃣ RECOMMENDED VIDEOS
**File:** `constants.ts` (lines 57-79)
For YouTube videos:
```
Line 59/66/73: title - Video title
Line 60/67/74: creator - Channel name
Line 61/68/75: duration - Video length
Line 62/69/76: posterUrl - YouTube thumbnail (format: https://i.ytimg.com/vi/[VIDEO_ID]/maxresdefault.jpg)
Line 63/70/77: videoUrl - Embed URL (format: https://www.youtube.com/embed/[VIDEO_ID]?autoplay=1&rel=0)
```

### 5️⃣ CONTACT LINKS
**File:** `constants.ts` (lines 81-86)
```
Line 82: GitHub - Replace [YourUsername]
Line 83: LinkedIn - Replace [YourUsername]
Line 84: X/Twitter - Replace [YourUsername]
Line 85: Email - Replace [your.email@example.com]
```

### 6️⃣ FOOTER
**File:** `App.tsx` (line 172)
```
Line 172: Replace [Your Name] with your name
```

### 7️⃣ PAGE METADATA
**File:** `metadata.json` (lines 2-3)
```
Line 2: Update site name if desired
Line 3: Update site description
```

**File:** `index.html` (line 5)
```
Line 5: Update <title> tag with your name
```

## 📸 Images Tips

- **Projects**: Use 600x400px screenshots
- **Background images**: Currently using Picsum placeholders - replace with your own or keep them
- **Videos**: YouTube thumbnails are auto-fetched with the VIDEO_ID

## ➕ Adding More Items

Just duplicate any object in the arrays and update the content. For example, to add a 4th project, copy lines 28-35 and paste after line 35.

## ➖ Removing Items

Delete the entire object from the array, including the comma.

## 🏗️ Building for Production

To build the project for deployment:
```bash
npm run build
```

This creates a `dist/` folder with optimized static files ready for deployment.

## 📦 Deploying to GitHub Pages

1. Run `npm run build`
2. Copy contents of `dist/` folder to repository root
3. Push to main branch
4. GitHub Pages will serve your portfolio at `https://[username].github.io`