# Premium Next.js Portfolio Collection

A highly optimized, responsive, and modern React & Next.js collection of premium portfolio templates. This project provides three distinct layouts catering to developers, designers, writers, and freelancers, serving as a unified platform to showcase projects, skills, history, and publications.

---

## 🚀 Layout Previews

The project features a sleek collection launcher at `/` that lets users preview the three layout themes:

### 1. 💻 Developer Portfolio (`/developer`)
* **Theme**: Deep Technical Dark Mode
* **Target Audience**: Software Engineers, Technical Product Builders, Full Stack Creators
* **Highlights**: Tech-stack proficiency bars, education/work interactive grids, technical blog categories.

### 2. 🎨 Freelancer Portfolio (`/freelancer`)
* **Theme**: Modern Creative Light Mode
* **Target Audience**: UI/UX Designers, Independent Contractors, Illustrators
* **Highlights**: Dynamic marquee highlights, achievement badges, pricing packages (Basic/Standard/Premium), creative publications layout.

### 3. 🌐 Main Portfolio Showcase (`/index`)
* **Theme**: Vibrant Glassmorphism Gradient Mode
* **Target Audience**: General Creative Professionals & Agency Leads
* **Highlights**: Sliding testimonial carousels, trusted brand sections, detailed achievements counters, floating widgets.

---

## 🛠️ Tech Stack & Key Features

* **Framework**: [Next.js](https://nextjs.org/) (React, App Router, Turbopack support)
* **Styling**: Vanilla CSS with custom premium tokens, smooth animations (WOW, gsap, ScrollTrigger), and full responsiveness.
* **Hydration-Safe Preloader**: State-controlled, animated pre-split loading screen that fades out smoothly once React finishes client-side mounting.
* **Crash-Safe Third Party Integrations**: Main initialization scripts wrap asynchronous plugins (Swiper, LightGallery, Typed, ScrollTrigger) inside defensive try-catch containers to guarantee stable interactivity regardless of loading order.
* **No Hardcoded Details**: The layout structures are entirely data-driven, rendering dynamic content directly from structured JSON databases.

---

## 📂 Project Structure & Architecture

```text
portfolio/
├── public/                 # Static assets (images, logos, vendor scripts)
│   └── assets/
│       ├── css/            # Style sheets (style.css, bootstrap, and plugins)
│       └── js/             # Main interactive scripts & plugins
├── src/
│   └── app/
│       ├── page.js         # Collection Dashboard Launcher
│       ├── layout.js       # Global document layout & script scripts
│       ├── globals.css     # Dashboard styling overrides
│       │
│       ├── developer/      # Developer Portfolio Route
│       │   ├── data/       # Dynamic JSON content configurations
│       │   └── page.js     
│       │
│       ├── freelancer/     # Freelancer Portfolio Route
│       │   ├── data/       # Dynamic JSON content configurations
│       │   └── page.js     
│       │
│       └── index/          # Main Home Route
│           ├── data/       # Dynamic JSON content configurations
│           └── page.js     
└── package.json            
```

---

## ⚙️ Content Customization

You can fully customize the content of any layout without touching code by editing the JSON data configurations under `src/app/[layout]/data/`:

| Layout Data File | Content Configured |
| :--- | :--- |
| `hero.json` | Profile name, titles, subtitles, socials, marquee lists, and background shapes. |
| `services.json` | Services grid details, cards description, packages list. |
| `portfolio.json` | Project list including title, images, categories, details, date, and likes. |
| `resume.json` | Job experience history, educational credentials, and skill levels (percentages). |
| `testimonials.json` | Client quotes, reviewer details, ratings, and trusted corporate brand logo arrays. |
| `blogs.json` | Recent article records, read-time data, and categorization tags. |

---

## 💻 Local Setup & Development

### 1. Install Dependencies
Run the command below inside the `portfolio` folder to install the project dependencies:
```bash
bun install
# or
npm install
```

### 2. Start the Development Server
Launch the local server:
```bash
bun run dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the collection launcher.

### 3. Build & Production Check
Generate an optimized production build:
```bash
bun run build && bun start
# or
npm run build && npm run start
```

---

## ☁️ Deployment

Deploy this template easily on **Vercel** or other static/serverless hosting platforms:

1. Import the repository into your Vercel Dashboard.
2. Select **Next.js** as the framework preset.
3. Configure the Root Directory to `portfolio`.
4. Deploy!
