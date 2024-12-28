import React from 'react';

const testimonials = [
  {
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100',
    name: 'Sarah Chen',
    role: 'VR Developer',
    content: 'VirtualR has completely transformed how I build VR applications. The workflow is seamless and intuitive.'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100',
    name: 'Mike Johnson',
    role: 'Technical Lead',
    content: 'The collaboration features are game-changing. Our team productivity has increased significantly.'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100',
    name: 'Emily Rodriguez',
    role: 'Indie Developer',
    content: 'As a solo developer, VirtualR gives me everything I need to create professional VR experiences.'
  }
];

function Testimonials() {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What people are saying
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-800 bg-gray-800/50"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;