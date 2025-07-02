'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutConference() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div 
            className="lg:pr-8 lg:pt-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">INDIA-AI 2026</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                First International Conference on Innovations and Developments in Intelligent Applications with AI
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                INDIA-AI 2026 is a premier forum for researchers, academicians, industry professionals, and students to share their innovative ideas, experiences, and research findings in the field of Artificial Intelligence and its applications.
              </p>
              <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-white" />
                    </div>
                    Knowledge Sharing.
                  </dt>{' '}
                  <dd>
                    INDIA-AI provides a platform for exchanging cutting-edge ideas and fostering collaboration among AI researchers and practitioners from around the world.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-white" />
                    </div>
                    Hybrid Format.
                  </dt>{' '}
                  <dd>
                    The conference will be held in a hybrid mode, allowing participants to join either in-person at NITRA Technical Campus or virtually from anywhere in the world.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-white" />
                    </div>
                    Publication Opportunity.
                  </dt>{' '}
                  <dd>
                    All accepted papers will be published in reputable indexed journals and conference proceedings.
                  </dd>
                </div>
              </div>
              
              <div className="mt-10">
                <Link
                  href="/about"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Learn more about the conference
                </Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative isolate overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-8 sm:pt-12 lg:pt-24"
          >
            <div className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" />
            
            <div
              className="absolute -inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-13rem)] aspect-[1155/678] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            
            <div className="mt-6 space-y-6 text-base leading-7 text-gray-300">
              <h3 className="text-2xl font-bold tracking-tight text-white">Call for Papers</h3>
              <p>
                We invite researchers and practitioners to submit original research papers in the following areas:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-x-3">
                  <span className="text-blue-400">→</span>
                  <span>Natural Language Processing and Text Analytics</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-400">→</span>
                  <span>Healthcare AI and Medical Diagnostics</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-400">→</span>
                  <span>Smart Systems and IoT Applications</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-400">→</span>
                  <span>Industrial AI and Optimization Techniques</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-400">→</span>
                  <span>Computer Vision and Image Processing</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-400">→</span>
                  <span>And many more...</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link
                  href="/call-for-papers"
                  className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  View submission guidelines
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
