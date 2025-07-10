'use client';

import { motion } from 'framer-motion';

const dates = [
  {
    date: 'October 30, 2025',
    description: 'Submission date',
  },
  {
    date: 'December 05, 2025',
    description: 'Acceptance Notification',
  },
  {
    date: 'December 15, 2025',
    description: 'Final paper submission',
  },
];

export default function ImportantDates() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Important Dates</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Mark your calendar with these key deadlines
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {dates.map((item, index) => (
              <motion.li
                key={item.date}
                className="py-6 flex flex-col-reverse sm:flex-row sm:justify-between sm:gap-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mt-3 sm:mt-0">
                  <p className="text-lg font-semibold leading-6 text-gray-900">{item.description}</p>
                </div>
                <time
                  dateTime={item.date}
                  className="flex-none text-md font-semibold leading-6 text-blue-600"
                >
                  {item.date}
                </time>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}