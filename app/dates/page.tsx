import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Important Dates | INDIA-AI 2026',
  description: 'Important Dates for the First International Conference on Innovations and Developments in Intelligent Applications with AI (INDIA-AI)',
};

const dates = [
  {
    date: 'November 15, 2025',
    description: 'Paper Submission Deadline',
    details: 'Last date to submit full papers for review.',
  },
  {
    date: 'December 20, 2025',
    description: 'Notification of Acceptance',
    details: 'Authors will be notified about the acceptance status of their submissions.',
  },
  {
    date: 'January 10, 2026',
    description: 'Camera Ready Paper Submission',
    details: 'Deadline for submitting the final version of accepted papers along with completed copyright forms.',
  },
  {
    date: 'January 25, 2026',
    description: 'Early Bird Registration Deadline',
    details: 'Last date for early bird registration at discounted rates.',
  },
  {
    date: 'February 5, 2026',
    description: 'Final Registration Deadline',
    details: 'Last date for registration to attend the conference.',
  },
  {
    date: 'February 14-15, 2026',
    description: 'Conference Dates',
    details: 'INDIA-AI 2026 Conference at NITRA Technical Campus, Ghaziabad, India.',
  },
];

export default function DatesPage() {
  return (
    <div className="mt-28 mb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Important Dates</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Key deadlines and dates for INDIA-AI 2026
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="mt-6">
            <div className="overflow-hidden bg-white shadow sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {dates.map((item, index) => (
                  <li key={index} className="px-6 py-8 sm:px-8">
                    <div className="flex items-start gap-x-4">
                      <div className="flex-shrink-0 bg-blue-600 rounded-full p-3">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-xl font-semibold text-gray-900 truncate">{item.description}</p>
                          <p className="mt-0 text-lg font-medium text-blue-600">{item.date}</p>
                        </div>
                        <p className="mt-2 text-base text-gray-600">{item.details}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Note</h2>
            <div className="mt-4 text-lg text-gray-600">
              <p className="mb-4">
                All deadlines are at 11:59 PM Anywhere on Earth (AoE) time on the date listed.
              </p>
              <p>
                Please ensure that all submissions and registrations are completed before the respective deadlines. Late submissions or registrations may not be accepted.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Conference Schedule</h2>
            <div className="mt-4 text-lg text-gray-600">
              <p>
                The detailed conference schedule will be available closer to the event date. It will include information about keynote speakers, paper presentations, panel discussions, and other activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
