# Portfolio — Daniil Tymofieiev

Personal portfolio website showcasing my skills, projects, and contact information.
Live demo [portfolio-timmdann.vercel.app](https://portfolio-timmdann.vercel.app)

---

## Features

- Animated WebGL aurora background
- Light / dark theme with system preference detection
- **Skills** section with category filtering
- **Projects** section with preview cards
- Responsive layout + mobile navigation menu
- **Contact form** with [EmailJS](https://www.emailjs.com/) integration and mailto fallback
- CI via GitHub Actions (lint + typecheck + build)

---

## Tech Stack

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS v4](https://tailwindcss.com/)
- [OGL](https://github.com/oframe/ogl) — WebGL background animation
- [Radix UI](https://www.radix-ui.com/) — toast notifications
- [EmailJS](https://www.emailjs.com/) — contact form
- [Vercel](https://vercel.com/) — deployment

---

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/timmdann/portfolio-site.git
cd portfolio-site

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in your EmailJS credentials in .env

# 4. Start development server
npm run dev
# → http://localhost:5173/
```

---

## Scripts

| Command             | Description              |
| ------------------- | ------------------------ |
| `npm run dev`       | Start development server |
| `npm run build`     | Production build         |
| `npm run typecheck` | TypeScript type check    |
| `npm run lint`      | ESLint                   |
| `npm run preview`   | Preview production build |

---

## Environment Variables

Copy `.env.example` to `.env` and fill in your [EmailJS](https://www.emailjs.com/) credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
