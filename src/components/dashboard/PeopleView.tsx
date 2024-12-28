import React from 'react';
import { Users } from 'lucide-react';

function PeopleView() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="flex items-center space-x-4 mb-6">
          <Users className="w-8 h-8 text-purple-500" />
          <h2 className="text-2xl font-bold">Online Learning Community</h2>
        </div>
        
        <p className="text-lg text-gray-300 mb-4">
          Large amount of people using Online Learning and prefer Online Learning
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-700/50 rounded-lg">
            <h3 className="font-semibold mb-2">Active Students</h3>
            <p className="text-3xl font-bold text-purple-500">2,547</p>
            <p className="text-sm text-gray-400">Currently enrolled</p>
          </div>
          
          <div className="p-4 bg-gray-700/50 rounded-lg">
            <h3 className="font-semibold mb-2">Course Completion</h3>
            <p className="text-3xl font-bold text-purple-500">89%</p>
            <p className="text-sm text-gray-400">Average completion rate</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Top Performing Students</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={`https://images.unsplash.com/photo-${1500 + index}?auto=format&fit=crop&w=50&h=50`}
                  alt={`Student ${index}`}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">Student {index}</p>
                  <p className="text-sm text-gray-400">Completed 5 courses</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-purple-500">98%</p>
                <p className="text-sm text-gray-400">Average Score</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PeopleView;