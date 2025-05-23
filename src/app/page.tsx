'use client';

import { useEffect, useState, useRef } from 'react';

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const waitlistRef = useRef<HTMLDivElement>(null);

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

    // Set loaded state after a short delay to trigger animations
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      // Cleanup
      document.body.removeChild(script);
      document.head.removeChild(link);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0c0a20] to-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 bg-gray-900/80 backdrop-blur-md py-4 px-6 transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Ahaia
          </div>
          <button 
            className="btn-primary"
            onClick={() => waitlistRef.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-4">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 leading-tight">
              Ahaia
            </h1>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Learning Made Effortless
            </h2>
            <p className="text-2xl mb-10 text-gray-300 max-w-2xl mx-auto">
              Reach the Aha! moment faster than ever before with our revolutionary AI-powered learning platform
            </p>
            <div className="flex justify-center mb-16">
              <button 
                className="btn-primary animate-pulse-slow"
                onClick={() => waitlistRef.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pain Points Section */}
      <div className={`container mx-auto px-4 py-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Solving Your Learning Challenges
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="feature-card bg-gray-800/30 p-8 rounded-xl border border-gray-700/30 backdrop-blur-sm">
            <div className="text-blue-400 text-3xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Limited Access to Quality Education?</h3>
            <p className="text-gray-300">Everyone deserves access to top-tier learning resources. Ahaia breaks down barriers by bringing expert knowledge to learners everywhere.</p>
          </div>
          <div className="feature-card bg-gray-800/30 p-8 rounded-xl border border-gray-700/30 backdrop-blur-sm">
            <div className="text-purple-400 text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Struggling to Focus?</h3>
            <p className="text-gray-300">We've all been there - endless tabs, scattered notes, and zero progress. Ahaia brings everything together in one engaging platform.</p>
          </div>
          <div className="feature-card bg-gray-800/30 p-8 rounded-xl border border-gray-700/30 backdrop-blur-sm">
            <div className="text-pink-400 text-3xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-4 text-pink-400">Complex Content?</h3>
            <p className="text-gray-300">Break down difficult concepts with our AI-powered learning system that adapts to your pace and learning style.</p>
          </div>
          <div className="feature-card bg-gray-800/30 p-8 rounded-xl border border-gray-700/30 backdrop-blur-sm">
            <div className="text-blue-400 text-3xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Need Guidance?</h3>
            <p className="text-gray-300">Get personalized support from AI tutors and expert professors who understand your learning journey.</p>
          </div>
          <div className="feature-card bg-gray-800/30 p-8 rounded-xl border border-gray-700/30 backdrop-blur-sm">
            <div className="text-purple-400 text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Distracted Learning?</h3>
            <p className="text-gray-300">Transform your social media experience into a focused, engaging learning experience that keeps you motivated.</p>
          </div>
          <div className="feature-card bg-gray-800/30 p-8 rounded-xl border border-gray-700/30 backdrop-blur-sm">
            <div className="text-pink-400 text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-4 text-pink-400">Tired of Outdated Learning Methods?</h3>
            <p className="text-gray-300">Break free from traditional text-heavy lectures and embrace a modern approach that leverages the latest in AI technology.</p>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className={`container mx-auto px-4 py-20 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Why Ahaia is Different
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="feature-card p-8 bg-gradient-to-b from-blue-500/10 to-blue-500/5 rounded-xl border border-blue-500/20">
              <div className="text-5xl mb-6 bg-blue-500/20 w-20 h-20 flex items-center justify-center rounded-full mx-auto">🎯</div>
              <h3 className="text-xl font-semibold mb-4">Personalized Learning</h3>
              <p className="text-gray-300">Adapts to your unique learning style and pace, ensuring you grasp concepts effectively</p>
            </div>
            <div className="feature-card p-8 bg-gradient-to-b from-purple-500/10 to-purple-500/5 rounded-xl border border-purple-500/20">
              <div className="text-5xl mb-6 bg-purple-500/20 w-20 h-20 flex items-center justify-center rounded-full mx-auto">🎧</div>
              <h3 className="text-xl font-semibold mb-4">Engaging Content</h3>
              <p className="text-gray-300">Multimedia learning that keeps you focused and makes complex topics accessible</p>
            </div>
            <div className="feature-card p-8 bg-gradient-to-b from-pink-500/10 to-pink-500/5 rounded-xl border border-pink-500/20">
              <div className="text-5xl mb-6 bg-pink-500/20 w-20 h-20 flex items-center justify-center rounded-full mx-auto">🤖</div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Support</h3>
              <p className="text-gray-300">24/7 guidance when you need it most, answering questions and providing feedback</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className={`container mx-auto px-4 py-20 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          How Ahaia Works
        </h2>
        <div className="max-w-5xl mx-auto relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Steps */}
          <div className="space-y-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700/30 backdrop-blur-sm feature-card">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">1. Personalized Assessment</h3>
                  <p className="text-gray-300">We analyze your learning style, goals, and current knowledge to create a tailored learning path just for you.</p>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 relative">
                <div className="absolute left-0 top-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-y-1/2 -translate-x-1/2 hidden md:block"></div>
                <img src="https://placehold.co/600x400/2563eb/FFFFFF/png?text=Assessment" alt="Assessment" className="rounded-xl shadow-lg w-full" />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img src="https://placehold.co/600x400/8b5cf6/FFFFFF/png?text=AI+Learning" alt="AI Learning" className="rounded-xl shadow-lg w-full" />
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute left-0 top-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-y-1/2 -translate-x-1/2 hidden md:block"></div>
                <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700/30 backdrop-blur-sm feature-card">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-400">2. AI-Powered Learning</h3>
                  <p className="text-gray-300">Our AI tutors guide you through concepts, providing real-time feedback and adapting to your progress.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700/30 backdrop-blur-sm feature-card">
                  <h3 className="text-2xl font-semibold mb-4 text-pink-400">3. Track & Improve</h3>
                  <p className="text-gray-300">Monitor your progress with detailed analytics and insights, helping you identify strengths and areas for improvement.</p>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 relative">
                <div className="absolute left-0 top-1/2 w-4 h-4 bg-pink-500 rounded-full transform -translate-y-1/2 -translate-x-1/2 hidden md:block"></div>
                <img src="https://placehold.co/600x400/ec4899/FFFFFF/png?text=Progress+Tracking" alt="Progress Tracking" className="rounded-xl shadow-lg w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className={`container mx-auto px-4 py-20 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Be Among the First to Experience Ahaia
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join our exclusive waitlist for early access and special launch benefits. Limited spots available!
          </p>
          <div 
            ref={waitlistRef}
            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-gray-700/50"
          >
            <div id="getWaitlistContainer" data-waitlist_id="28520" data-widget_type="WIDGET_1" className="waitlist-container"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-md border-t border-gray-800 mt-20 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4 md:mb-0">
              Ahaia
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ahaia. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 