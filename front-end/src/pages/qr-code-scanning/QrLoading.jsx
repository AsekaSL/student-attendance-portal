import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const QrLoading = () => {
  const [status, setStatus] = useState<'loading' | 'approved' | 'declined'>('loading');
  const [message, setMessage] = useState("Verifying attendance...");
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate verification process
    const timer = setTimeout(() => {
      // Randomly approve or decline for demo (in real app, this would be from QR scan result)
      const isApproved = Math.random() > 0.2; // 80% success rate

      if (isApproved) {
        setStatus('approved');
        setMessage("Attendance marked successfully!");
        // Redirect to student dashboard after showing success
        setTimeout(() => {
          navigate("/student");
        }, 3000);
      } else {
        setStatus('declined');
        setMessage("Attendance verification failed. Please try again.");
        // Redirect back to scan page after showing error
        setTimeout(() => {
          navigate("/student"); // In real app, this might go back to scan page
        }, 3000);
      }
    }, 3000); // 3 second verification

    return () => clearTimeout(timer);
  }, [navigate, setStatus]);

  const getStatusIcon = () => {
    switch (status) {
      case 'loading':
        return <i className="fas fa-spinner fa-spin text-4xl text-blue-500"></i>;
      case 'approved':
        return <i className="fas fa-check-circle text-4xl text-green-500"></i>;
      case 'declined':
        return <i className="fas fa-times-circle text-4xl text-red-500"></i>;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'loading':
        return 'text-blue-600';
      case 'approved':
        return 'text-green-600';
      case 'declined':
        return 'text-red-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 shadow-md rounded w-full max-w-md text-center">
        {/* Status Icon */}
        <div className="flex justify-center mb-6">
          {getStatusIcon()}
        </div>

        {/* Title */}
        <h1 className={`text-2xl font-bold mb-4 ${getStatusColor()}`}>
          {status === 'loading' ? 'Verifying Attendance' : status === 'approved' ? 'Success!' : 'Failed'}
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          {message}
        </p>

        {/* Loading Bar for loading state */}
        {status === 'loading' && (
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        )}

        {/* Additional Info */}
        <div className="text-sm text-gray-500">
          {status === 'loading' && "Please wait while we process your scan."}
          {status === 'approved' && "Your attendance has been recorded."}
          {status === 'declined' && "Please contact your professor if you believe this is an error."}
        </div>

        {/* Auto-redirect notice */}
        {status !== 'loading' && (
          <div className="mt-4 text-xs text-gray-400">
            Redirecting to dashboard in a few seconds...
          </div>
        )}
      </div>
    </div>
  );
};

export default QrLoading;