import React from 'react';
import { Code2 } from 'lucide-react';

function Hero() {
  return (
    <div className="pt-24 pb-16 px-4 min-h-screen flex items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-gray-900 to-gray-900">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              VirtualR
            </span>
            <br />
            <span className="text-gray-100">
              build tools for developers
            </span>
          </h1>
          
          <p className="text-xl text-gray-400">
            Empower your creativity and bring your VR app ideas to life
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
              Start for free
            </button>
            <button className="px-8 py-3 rounded-full border border-gray-700 hover:border-purple-500 hover:text-purple-500 transition-all">
              Documentation
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl"></div>
          <div className="relative bg-gray-800 p-6 rounded-lg border border-gray-700">
            <pre className="text-sm text-gray-300 font-mono">
              <code>{`import VirtualR from '@virtualr/core';

const vr = new VirtualR();

vr.scene.add({
  type: 'model',
  source: './assets/world.glb',
  position: { x: 0, y: 1.6, z: -1 },
  animation: 'idle'
});

vr.start();`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;