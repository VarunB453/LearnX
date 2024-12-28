import React, { useState } from "react";
import { Menu, X, Code2, Layers, Boxes, Zap, Users, BarChart3 } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (credentials: { email: string; password: string }) => {
    // Simulate login
    console.log('Login:', credentials);
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
  };

  const handleSignup = (credentials: { email: string; password: string }) => {
    // Simulate signup
    console.log('Signup:', credentials);
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <>
          <Header onAuthClick={() => setIsAuthModalOpen(true)} />
          <Hero />
          <Features />
          <Workflow />
          <Pricing />
          <Testimonials />
          <Footer />
        </>
      )}
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
        onSignup={handleSignup}
      />
    </div>
  );
}

export default App;