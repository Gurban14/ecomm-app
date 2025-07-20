- **React 18** - React version with improved rendering and concurrent features
- **Vite** - Lightning-fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework with extensive customization
- **React Router** - Declarative routing for React applications

## 📋 Prerequisites

- Node.js
- npm or yarn


## 🛠️ Installation

1. Install dependencies:
  ```bash
  npm install
  # or
  yarn install
  ```

2. Start the server:
  ```bash
  npm run start
  # or
  yarn start
  ```

## 📁 Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── styles/          # Global styles and Tailwind configuration
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── Routes.jsx       # Application routes
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration for Tailwind
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
```

<<<<<<< HEAD
## 🧩 Adding Routes

To add new routes to the application, update the `Routes.jsx` file:

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration includes:

- Utility-first approach for rapid development
- Custom theme configuration
- Responsive design utilities
- PostCSS and Autoprefixer integration

```bash
npm run build
```
=======

## 🎨 Styling

This project uses Tailwind CSS for styling.
>>>>>>> 90642c5d69cb2426cb1e8ba60eef6230109cfa37
