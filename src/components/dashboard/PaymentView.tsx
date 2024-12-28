import React, { useState } from 'react';
import { CreditCard, CheckCircle, XCircle } from 'lucide-react';

function PaymentView() {
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handlePayment = () => {
    setPaymentStatus('success');
    setTimeout(() => {
      setPaymentStatus('idle');
    }, 3000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="flex items-center space-x-4 mb-6">
          <CreditCard className="w-8 h-8 text-purple-500" />
          <h2 className="text-2xl font-bold">Course Payment</h2>
        </div>
        
        <div className="space-y-6">
          <div className="p-4 bg-gray-700/50 rounded-lg">
            <h3 className="font-semibold mb-2">VR Development Fundamentals</h3>
            <p className="text-2xl font-bold text-purple-500">$20.00</p>
            <p className="text-sm text-gray-400">One-time payment</p>
          </div>
          
          {paymentStatus === 'idle' ? (
            <button
              onClick={handlePayment}
              className="w-full py-3 rounded-lg bg-purple-500 hover:bg-purple-600 transition-colors flex items-center justify-center space-x-2"
            >
              <CreditCard size={20} />
              <span>Process Payment</span>
            </button>
          ) : (
            <div
              className={`p-4 rounded-lg flex items-center space-x-2 ${
                paymentStatus === 'success'
                  ? 'bg-green-500/20 text-green-500'
                  : 'bg-red-500/20 text-red-500'
              }`}
            >
              {paymentStatus === 'success' ? (
                <>
                  <CheckCircle size={20} />
                  <span>Payment successful!</span>
                </>
              ) : (
                <>
                  <XCircle size={20} />
                  <span>Payment failed. Please try again.</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentView;