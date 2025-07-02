'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ChatBubbleLeftRightIcon, 
  HeartIcon, 
  CogIcon,
  CameraIcon
} from '@heroicons/react/24/outline';

const tracks = [
  {
    name: 'AI in NLP',
    icon: ChatBubbleLeftRightIcon,
    description: 'Natural Language Processing applications including text processing, sentiment analysis, language modeling, and more.',
    href: '/tracks#nlp',
  },
  {
    name: 'AI in Healthcare and Smart Systems',
    icon: HeartIcon,
    description: 'Applications of AI in healthcare, medical imaging, disease prediction, smart homes, and IoT systems.',
    href: '/tracks#healthcare',
  },
  {
    name: 'AI in Industrial Applications and Optimization',
    icon: CogIcon,
    description: 'Industrial AI applications including manufacturing, optimization algorithms, predictive maintenance, and more.',
    href: '/tracks#industrial',
  },
  {
    name: 'AI in Computer Vision',
    icon: CameraIcon,
    description: 'Computer vision applications including image processing, object detection, facial recognition, and more.',
    href: '/tracks#vision',
  },
];

export default function ConferenceTracks() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conference Tracks</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore our focused areas of research and innovation
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {tracks.map((track, index) => (
              <motion.div 
                key={track.name} 
                className="relative pl-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <track.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {track.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {track.description}
                </dd>
                <div className="mt-4">
                  <Link
                    href={track.href}
                    className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
