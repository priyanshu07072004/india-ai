'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CountdownTimer from './CountdownTimer';

export default function Hero() {
  return (
    <div className="relative isolate pt-10 min-h-[90vh] flex flex-col justify-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 -z-10 overflow-hidden w-full h-full"
        style={{
          backgroundImage: 'url("/iit.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.9',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/60 to-black/70"></div>
      </div>
      
      {/* Background decorations */}
      <div
        className="absolute inset-x-0 top-20 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="py-16 sm:py-20 lg:py-24 flex-grow flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                2026 First International Conference on 
                <span className="text-blue-300 block mt-1">
                  Innovations and Developments in Intelligent Applications with AI
                </span>
                <span className="text-2xl sm:text-3xl mt-2 block text-white">(INDIA-AI)</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                February 14–15, 2026 | NITRA Technical Campus, Ghaziabad, India | Hybrid Mode
              </p>
              
              <div className="mt-10">
                <CountdownTimer />
              </div>
              
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/call-for-papers"
                  className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Submit Paper
                </Link>
                <Link
                  href="/about"
                  className="rounded-md bg-white/80 px-6 py-3 text-base font-semibold text-gray-800 shadow-sm hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100"
                >
                  Learn More
                </Link>
              </div>
              
              <div className="mt-12 border-t border-white/30 pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="text-center">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-200">Organized by</h2>
                  <div className="mt-1 flex flex-wrap justify-center gap-4">
                    <div className="h-12 w-32 bg-white/80 flex items-center justify-center rounded shadow-md">
                      <span className="font-semibold text-gray-800">NITRA Tech</span>
                    </div>
                    <div className="h-12 w-32 bg-white/80 flex items-center justify-center rounded shadow-md">
                      <span className="font-semibold text-gray-800">AI Tech Community</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-200">Mode</h2>
                  <p className="mt-1 text-lg font-medium text-white">Hybrid (Online & Offline)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
