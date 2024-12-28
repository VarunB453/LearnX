import React from 'react';
import { Package } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'VR Development Fundamentals',
    description: 'Learn the basics of VR development and create your first VR application',
    duration: '6 weeks',
    level: 'Beginner'
  },
  {
    id: 2,
    title: 'Advanced VR Interactions',
    description: 'Master complex VR interactions and user experience design',
    duration: '8 weeks',
    level: 'Intermediate'
  },
  {
    id: 3,
    title: 'VR Performance Optimization',
    description: 'Optimize your VR applications for better performance',
    duration: '4 weeks',
    level: 'Advanced'
  }
];

function ProductsView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <Package className="w-8 h-8 text-purple-500" />
        <h2 className="text-2xl font-bold">Available Courses</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700/80 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-400 mb-4">{course.description}</p>
            <div className="flex justify-between text-sm text-gray-400">
              <span>{course.duration}</span>
              <span>{course.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsView