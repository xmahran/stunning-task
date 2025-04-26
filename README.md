# stunning-task

A modern, interactive hero section built with React, TypeScript, and Tailwind CSS. Features a clean design with dark/light mode support and editable content.

## Features

- **Dynamic Theme Switching**

- Light/Dark mode with smooth transitions
- System theme detection
- Persistent theme preference

- **Inline Editable Content**

- Edit text directly on the page
- Smooth hover effects
- Keyboard support (Enter to save)

- **Modern Design**
- Responsive layout
- Modern gradients (Cyberpunk inspiration)
- Smooth animations
- Glassmorphism effects

## Getting Started

1. **Clone and Install**

   ```bash
   git clone [repository-url]
   cd [project-directory]
   git checkout dev
   npm install
   ```

2. **Run Development Server**

   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Built With

- [React](https://reactjs.org/) - UI Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vite](https://vitejs.dev/) - Build Tool
- [Lucide Icons](https://lucide.dev/) - Icons

## Project Structure

```
src/
├── components/
│   ├── hero-section/
│   │   └── HeroSection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── EditableText.tsx
│       └── ThemeToggle.tsx
├── hooks/
│    ├── useContentGenerator.tsx
│    ├── useTheme.tsx
└── utils/
    └── contentData.ts
```

## Key Components

- **HeroSection**: Main container with responsive layout
- **EditableText**: Reusable component for editable text fields
- **ThemeToggle**: Theme switcher with smooth transitions
- **useTheme**: Custom hook for theme management
- **useContentGeneration**: Custom hook for dummy content generation

## Customization

The project uses a customized Tailwind configuration for colors and themes. Modify public/assets to modify images and `tailwind.config.js` to adjust:

- Color schemes
- Theme variations
- Transitions
- Responsive breakpoints

