import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Registration | INDIA-AI 2026',
  description: 'Registration information for the First International Conference on Innovations and Developments in Intelligent Applications with AI (INDIA-AI)',
};

export default function RegistrationPage() {
  return (
    <div className="pt-28 pb-16 bg-gradient-to-b from-blue-100 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Registration</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Register to attend INDIA-AI 2026
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-2xl font-bold text-gray-900">Registration Information</h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Registration for INDIA-AI 2026 will open on December 20, 2025
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <div className="text-lg text-gray-600">
                <p className="mb-4">
                  Registration is required for all participants, including authors, presenters, and attendees. At least one author of each accepted paper must register and present the paper at the conference to have it included in the proceedings.
                </p>
                <p>
                  The conference will be held in a hybrid mode, allowing participants to join either in-person or virtually. Different registration fees apply for in-person and virtual attendance.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Registration Fees</h2>
            <div className="mt-6">
              <div className="overflow-hidden bg-white shadow sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  <li>
                    <div className="px-4 py-5 sm:px-6">
                      <h3 className="text-xl font-semibold text-gray-900">Early Bird Registration (Until January 25, 2026)</h3>
                    </div>
                    <div className="border-t border-gray-200">
                      <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">Regular (In-person)</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">₹15,000 / $200 USD</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">Student (In-person)</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">₹10,000 / $125 USD</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">Regular (Virtual)</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">₹10,000 / $125 USD</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">Student (Virtual)</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">₹7,000 / $90 USD</dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                  
                  <li>
                    <div className="px-4 py-5 sm:px-6">
                      <h3 className="text-xl font-semibold text-gray-900">Regular Registration (After January 25, 2026)</h3>
                    </div>
                    <div className="border-t border-gray-200">
                      <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">Regular (In-person)</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">₹18,000 / $240 USD</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">Student (In-person)</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">₹12,000 / $150 USD</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">Regular (Virtual)</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">₹12,000 / $150 USD</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">Student (Virtual)</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">₹8,000 / $100 USD</dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">What's Included</h2>
            <div className="mt-6 text-lg text-gray-600">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">In-Person Registration</h3>
                  <ul className="mt-4 space-y-2 list-disc pl-6">
                    <li>Access to all conference sessions</li>
                    <li>Conference kit (including printed proceedings)</li>
                    <li>Certificate of participation</li>
                    <li>Lunch and refreshments during the conference</li>
                    <li>Conference dinner (on February 14, 2026)</li>
                    <li>Access to recorded sessions after the conference</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Virtual Registration</h3>
                  <ul className="mt-4 space-y-2 list-disc pl-6">
                    <li>Access to all conference sessions via online platform</li>
                    <li>Digital conference kit</li>
                    <li>Digital certificate of participation</li>
                    <li>Access to recorded sessions after the conference</li>
                    <li>Opportunity to interact with speakers and attendees virtually</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Registration Process</h2>
            <div className="mt-6 text-lg text-gray-600">
              <p className="mb-4">
                The registration process will open on December 20, 2025. Please follow these steps to register:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Fill out the online registration form (available from December 20, 2025)</li>
                <li>Make the payment using one of the available payment methods</li>
                <li>Receive confirmation email with registration details</li>
                <li>For authors, link your registration to your accepted paper(s)</li>
              </ol>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Registration Link</h3>
                <p className="mt-2 text-gray-600">
                  Registration will open on December 20, 2025. The registration link will be available here.
                </p>
                <div className="mt-4">
                  <button
                    disabled
                    className="rounded-md bg-gray-300 px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm cursor-not-allowed"
                  >
                    Registration Not Yet Open
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Cancellation Policy</h2>
            <div className="mt-6 text-lg text-gray-600">
              <p className="mb-4">
                Cancellation requests must be made in writing and sent to <a href="mailto:indiaai2026@nitra.ac.in" className="text-blue-600 hover:text-blue-500">indiaai2026@nitra.ac.in</a>.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellations received before January 15, 2026: 70% refund</li>
                <li>Cancellations received between January 16-31, 2026: 50% refund</li>
                <li>No refunds will be issued for cancellations after January 31, 2026</li>
              </ul>
              <p className="mt-4">
                Registration can be transferred to another person at no additional cost.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Contact</h2>
            <div className="mt-6 text-lg text-gray-600">
              <p>
                For any queries related to registration, please contact:
              </p>
              <p className="mt-2 font-medium">
                Email: <a href="mailto:indiaai2026@nitra.ac.in" className="text-blue-600 hover:text-blue-500">indiaai2026@nitra.ac.in</a>
              </p>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Link
              href="/dates"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View Important Dates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
