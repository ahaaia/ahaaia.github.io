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
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Ahaia
          </h1>
          {/* <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Learning Made Effortless
          </h1> */}
          <p className="text-2xl mb-8 text-gray-300">
            Reach the Aha! moment faster than ever before
          </p>

        </div>

        {/* Pain Points Section */}
        {/* <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700/30">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Limited Access to Quality Education?</h3>
            <p className="text-gray-300">Everyone deserves access to top-tier learning resources. Ahaia breaks down barriers by bringing expert knowledge and personalized guidance to learners everywhere.</p>
          </div>
          <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700/30">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Struggling to Focus?</h3>
            <p className="text-gray-300">We&apos;ve all been there - endless tabs, scattered notes, and zero progress. Ahaia brings everything together in one engaging platform.</p>
          </div>
          <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700/30">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Complex Content?</h3>
            <p className="text-gray-300">Break down difficult concepts with our AI-powered learning system that adapts to your pace and learning style.</p>
          </div>
          <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700/30">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Need Guidance?</h3>
            <p className="text-gray-300">Get personalized support from AI tutors and expert professors who understand your learning journey.</p>
          </div>
          <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700/30">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Distracted Learning?</h3>
            <p className="text-gray-300">Transform your social media experience into a focused, engaging learning experience that keeps you motivated.</p>
          </div>
          <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700/30">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Tired of Outdated Learning Methods?</h3>
            <p className="text-gray-300">Break free from traditional text-heavy lectures and embrace a modern approach that leverages the latest in AI and technology to ensure high retention rates.</p>
          </div>

        </div> */}

        {/* Value Proposition */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Why Ahaia is Different
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="text-gray-400">Adapts to your unique learning style and pace</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">🎧</div>
              <h3 className="text-xl font-semibold mb-2">Engaging Content</h3>
              <p className="text-gray-400">Multimedia learning that keeps you focused</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Support</h3>
              <p className="text-gray-400">24/7 guidance when you need it most</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Be Among the First to Experience Ahaia</h2>
          <p className="text-gray-300 mb-8">
            Join our waitlist for early access and special launch benefits.
          </p>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50">
            <div id="getWaitlistContainer" data-waitlist_id="28520" data-widget_type="WIDGET_1" className="waitlist-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 