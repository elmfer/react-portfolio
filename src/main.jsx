import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

// Import fontawesome (for icons)
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const router = createBrowserRouter([
  {
    path: '/react-portfolio',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/react-portfolio',
        element: <HomePage />,
      },
      {
        path: '/react-portfolio/about',
        element: <AboutPage />,
      },
      {
        path: '/react-portfolio/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/react-portfolio/contact',
        element: <ContactPage />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
