import React from 'react';

const footerSections = {
  Resources: ['Documentation', 'API Reference', 'Examples', 'Blog'],
  Platform: ['Features', 'Pricing', 'Enterprise', 'Security'],
  Community: ['Discord', 'GitHub', 'Twitter', 'Events']
};

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VirtualR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;