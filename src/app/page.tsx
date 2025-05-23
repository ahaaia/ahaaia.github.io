'use client';

import { useEffect, useState, useRef } from 'react';
import { landingContent } from '@/content/landing';

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
            {landingContent.navigation.logo}
          </div>
          <button 
            className="btn-primary"
            onClick={() => waitlistRef.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            {landingContent.navigation.joinWaitlist}
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
              {landingContent.hero.title}
            </h1>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {landingContent.hero.subtitle}
            </h2>
            <p className="text-2xl mb-10 text-gray-300 max-w-2xl mx-auto">
              {landingContent.hero.description}
            </p>
            <div className="flex justify-center mb-16">
              <button 
                className="btn-primary animate-pulse-slow"
                onClick={() => waitlistRef.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                {landingContent.hero.cta}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pain Points Section - Commented out */}
      {/* <div className={`container mx-auto px-4 py-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          {landingContent.painPoints.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {landingContent.painPoints.items.map((item, index) => (
            <div key={index} className={`bg-gray-800/30 p-8 rounded-xl border border-gray-700/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 feature-card`}>
              <div className={`text-4xl mb-4 text-${item.color}-400`}>{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Value Proposition */}
      <div className={`container mx-auto px-4 py-20 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            {landingContent.valueProposition.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {landingContent.valueProposition.features.map((feature, index) => (
              <div key={index} className={`feature-card p-8 bg-gradient-to-b from-${feature.color}-500/10 to-${feature.color}-500/5 rounded-xl border border-${feature.color}-500/20`}>
                <div className={`text-5xl mb-6 bg-${feature.color}-500/20 w-20 h-20 flex items-center justify-center rounded-full mx-auto`}>{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works - Commented out */}
      {/* <div className={`container mx-auto px-4 py-20 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          {landingContent.howItWorks.title}
        </h2>
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-24">
            {landingContent.howItWorks.steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 order-2 md:order-1">
                      <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700/30 backdrop-blur-sm feature-card">
                        <h3 className={`text-2xl font-semibold mb-4 text-${step.color}-400`}>{step.number}. {step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 order-1 md:order-2 relative">
                      <div className={`absolute left-0 top-1/2 w-4 h-4 bg-${step.color}-500 rounded-full transform -translate-y-1/2 -translate-x-1/2 hidden md:block`}></div>
                      <img src={step.image} alt={step.title} className="rounded-xl shadow-lg w-full" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2">
                      <img src={step.image} alt={step.title} className="rounded-xl shadow-lg w-full" />
                    </div>
                    <div className="md:w-1/2 relative">
                      <div className={`absolute left-0 top-1/2 w-4 h-4 bg-${step.color}-500 rounded-full transform -translate-y-1/2 -translate-x-1/2 hidden md:block`}></div>
                      <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700/30 backdrop-blur-sm feature-card">
                        <h3 className={`text-2xl font-semibold mb-4 text-${step.color}-400`}>{step.number}. {step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Final CTA */}
      <div className={`container mx-auto px-4 py-20 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            {landingContent.cta.title}
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {landingContent.cta.description}
          </p>
          <div 
            ref={waitlistRef}
            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-gray-700/50"
          >
            <div id="getWaitlistContainer" data-waitlist_id={landingContent.cta.waitlistId} data-widget_type="WIDGET_1" className="waitlist-container"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-md border-t border-gray-800 mt-20 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4 md:mb-0">
              {landingContent.footer.logo}
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {landingContent.footer.logo}. {landingContent.footer.copyright}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 