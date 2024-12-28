import React from 'react';
import { User } from 'lucide-react';

interface HeaderProps {
  onAuthClick: () => void;
}

function Header({ onAuthClick }: HeaderProps) {
  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            VirtualR
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#workflow" className="text-gray-300 hover:text-white transition-colors">Workflow</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <button
            onClick={onAuthClick}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
          >
            <User size={18} />
            <span>Sign In</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
export default Header;
