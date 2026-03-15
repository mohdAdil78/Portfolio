import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';

const MainPage = () => (
  <div
    className="min-h-screen flex flex-col"
    style={{ backgroundColor: '#05070F', overflowX: 'hidden', width: '100%' }}
  >
    <Navbar />
    {/* pt-16 = 64px — exactly the height of the fixed navbar */}
    <main className="flex-1 pt-16" style={{ overflowX: 'hidden', width: '100%', minWidth: 0 }}>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main>
    <Footer />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
