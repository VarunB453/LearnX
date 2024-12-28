import React, { useState } from 'react';
import { Video, Users, ClipboardCheck, CreditCard, Package, Award } from 'lucide-react';
import ClassroomView from './dashboard/ClassroomView';
import AssessmentView from './dashboard/AssessmentView';
import PeopleView from './dashboard/PeopleView';
import PaymentView from './dashboard/PaymentView';
import ProductsView from './dashboard/ProductsView';
import CertificateView from './dashboard/CertificateView';

const tabs = [
  { id: 'classrooms', label: 'Classrooms', icon: Video },
  { id: 'assessment', label: 'Assessment', icon: ClipboardCheck },
  { id: 'people', label: 'People', icon: Users },
  { id: 'payment', label: 'Payment', icon: CreditCard },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'certificate', label: 'Certificate', icon: Award }
];

function Dashboard() {
  const [activeTab, setActiveTab] = useState('classrooms');

  const renderContent = () => {
    switch (activeTab) {
      case 'classrooms':
        return <ClassroomView />;
      case 'assessment':
        return <AssessmentView />;
      case 'people':
        return <PeopleView />;
      case 'payment':
        return <PaymentView />;
      case 'products':
        return <ProductsView />;
      case 'certificate':
        return <CertificateView />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-500'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
}
export default Dashboard;