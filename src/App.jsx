import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalLoader from './components/GlobalLoader';

// Code-split pages — loaded only when needed
const Home         = React.lazy(() => import('./pages/Home'));
const About        = React.lazy(() => import('./pages/About'));
const Portfolio    = React.lazy(() => import('./pages/Portfolio'));
const Contact      = React.lazy(() => import('./pages/Contact'));
const ProjectDetails = React.lazy(() => import('./pages/ProjectDetails'));
const NotFound     = React.lazy(() => import('./pages/NotFound'));

const MainPage = () => (
  <div className="min-h-screen flex flex-col bg-space-primary w-full overflow-hidden">
    <Navbar />
    {/* pt-16 = 64px — matches fixed navbar height */}
    <main className="flex-1 pt-16 w-full overflow-hidden">
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main>
    <Footer />
  </div>
);

const App = () => {
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    // Wait only for fonts — no artificial delay
    const waitForFonts = async () => {
      try {
        if (document.fonts?.ready) {
          await document.fonts.ready;
        }
      } catch {
        // fonts API not supported — continue anyway
      } finally {
        if (mounted) setFontsReady(true);
      }
    };

    waitForFonts();
    return () => { mounted = false; };
  }, []);

  if (!fontsReady) return <GlobalLoader />;

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<GlobalLoader />}>
          <Routes>
            <Route path="/"           element={<MainPage />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="*"           element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
