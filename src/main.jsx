import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // Import the ThemeProvider
import { LevelProvider } from './context/LevelContext';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function Main() {
  return (
    <ThemeProvider>
      <LevelProvider>    {/** idk if this is best practice , maybe custom hooks might be better */}
        <RouterProvider router={router} />
      </LevelProvider>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
);
