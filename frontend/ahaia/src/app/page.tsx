'use client';

import { useEffect } from 'react';

export default function LandingPage() {
  useEffect(() => {
    // Load the waitlist script
    const script = document.createElement('script');
    script.src = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Load the waitlist styles
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css';
    document.head.appendChild(link);

    return () => {
      // Cleanup
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Ahaia
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            Transforming Education Through AI
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-400 mb-12">
              We&apos;re building something amazing. Join our waitlist to be among the first to experience our revolutionary approach to learning.
            </p>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50">
              <div id="getWaitlistContainer" data-waitlist_id="28520" data-widget_type="WIDGET_1" className="waitlist-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 