import React from 'react';
import { GitMerge, CheckCircle, Brain, Share2 } from 'lucide-react';

const workflowSteps = [
  {
    icon: GitMerge,
    title: 'Code merge made easy',
    description: 'Seamlessly merge changes with built-in conflict resolution'
  },
  {
    icon: CheckCircle,
    title: 'Review code without worry',
    description: 'Automated code review and quality checks'
  },
  {
    icon: Brain,
    title: 'AI Assistance to reduce time',
    description: 'Get intelligent suggestions and autocompletions'
  },
  {
    icon: Share2,
    title: 'Share work in minutes',
    description: 'Instant deployment and sharing capabilities'
  }
];

function Workflow() {
  return (
    <section id="workflow" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Accelerate your coding workflow
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-gray-800 bg-gray-800/50 hover:bg-gray-800 transition-all"
            >
              <step.icon className="w-12 h-12 text-purple-500 mb-4 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Workflow;