import React from 'react';
import { GripHorizontal, Monitor, Layout, Eye, Users, BarChart } from 'lucide-react';

const features = [
  {
    icon: GripHorizontal, // Changed from DragDropHorizontal to GripHorizontal
    title: 'Drag-and-Drop Interface',
    description: 'Build VR experiences without writing code using our intuitive interface'
  },
  {
    icon: Monitor,
    title: 'Multi-Platform Compatibility',
    description: 'Deploy to all major VR platforms with a single codebase'
  },
  {
    icon: Layout,
    title: 'Built-in Templates',
    description: 'Start quickly with pre-built templates for common VR scenarios'
  },
  {
    icon: Eye,
    title: 'Real-Time Preview',
    description: 'See your changes instantly in the VR preview window'
  },
  {
    icon: Users,
    title: 'Collaboration Tools',
    description: 'Work together in real-time with your team members'
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Track user engagement and performance metrics'
  }
];

function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Easily build your code
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-800 bg-gray-800/50 hover:bg-gray-800 transition-all transform hover:-translate-y-1 hover:shadow-xl"
            >
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;