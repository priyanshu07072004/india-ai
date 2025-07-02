'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="bg-blue-600">
      <div className="px-6 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join us at INDIA-AI 2026
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Connect with leading researchers, share your innovations, and be part of the AI revolution
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/registration"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Register Now
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-white"
              >
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
