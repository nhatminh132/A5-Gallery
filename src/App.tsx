import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ClassMembers from './pages/ClassMembers';
import Albums from './pages/Albums';
import Upload from './pages/Upload';
import Donate from './pages/Donate';
import About from './pages/About';

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? 'bg-blue-500/20 text-blue-300 shadow-[0_0_10px_rgba(0,136,255,0.3)]'
          : 'text-blue-200/70 hover:text-blue-300 hover:bg-blue-500/10'
      }`}
    >
      {children}
    </Link>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,136,255,0.15),rgba(0,0,0,1))]">
        <nav className="border-b border-blue-900/30 backdrop-blur-xl bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                <img
                  src="https://img.icons8.com/nolan/64/photo-gallery.png"
                  alt="A5 Gallery Logo"
                  className="w-8 h-8 animate-pulse"
                />
                <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 animate-hologram">
                  A5 Gallery
                </Link>
              </div>
              <div className="flex space-x-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/class-members">Class Members</NavLink>
                <NavLink to="/albums">Albums</NavLink>
                <NavLink to="/upload">Upload</NavLink>
                <NavLink to="/donate">Donate</NavLink>
                <NavLink to="/about">About</NavLink>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/class-members" element={<ClassMembers />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;