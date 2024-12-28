import React from 'react';
import { Award, Download } from 'lucide-react';

function CertificateView() {
  const certificateData = {
    studentName: 'Varun',
    courseName: 'VR Development Fundamentals',
    completionDate: new Date().toLocaleDateString(),
    score: '95/100'
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <Award className="w-8 h-8 text-purple-500" />
        <h2 className="text-2xl font-bold">Course Certificate</h2>
      </div>
      
      <div className="bg-gray-800 p-8 rounded-lg">
        <div className="border-4 border-purple-500 p-8 rounded-lg text-center space-y-6">
          <div className="space-y-2">
            <Award className="w-16 h-16 text-purple-500 mx-auto" />
            <h3 className="text-3xl font-bold">Certificate of Completion</h3>
          </div>
          
          <p className="text-xl">This is to certify that</p>
          <p className="text-2xl font-bold text-purple-500">
            {certificateData.studentName}
          </p>
          <p className="text-xl">has successfully completed</p>
          <p className="text-2xl font-bold">{certificateData.courseName}</p>
          
          <div className="grid grid-cols-2 gap-4 text-gray-400">
            <div>
              <p>Completion Date</p>
              <p className="font-semibold text-white">
                {certificateData.completionDate}
              </p>
            </div>
            <div>
              <p>Final Score</p>
              <p className="font-semibold text-white">{certificateData.score}</p>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={handlePrint}
        className="w-full py-3 rounded-lg bg-purple-500 hover:bg-purple-600 transition-colors flex items-center justify-center space-x-2"
      >
        <Download size={20} />
        <span>Download Certificate</span>
      </button>
    </div>
  );
}

// Add the default export here
export default CertificateView;
