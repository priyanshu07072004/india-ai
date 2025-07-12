import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Registration | INDIA-AI 2026',
  description: 'Registration details and fees for INDIA-AI 2026 conference.',
};

export default function RegistrationPage() {
  return (
    <div className="pt-28 pb-16 bg-gradient-to-b from-blue-100 to-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">Registration</h1>
        <p className="text-lg leading-8 text-gray-900 mb-8">
          Register for the First International Conference on Innovations and Developments in Intelligent Applications with AI (INDIA-AI 2026).
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Early Bird Registration <span className="text-base font-normal">(Until January 25, 2026)</span></h2>
        <table className="min-w-full bg-white rounded-lg shadow-md mb-8">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-2 px-4 border-b text-left text-gray-900 font-semibold">Category</th>
              <th className="py-2 px-4 border-b text-left text-gray-900 font-semibold">INR</th>
              <th className="py-2 px-4 border-b text-left text-gray-900 font-semibold">USD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b text-gray-900">Professional/Faculty/Industry</td>
              <td className="py-2 px-4 border-b text-gray-900">₹8,000</td>
              <td className="py-2 px-4 border-b text-gray-900">$300</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b text-gray-900">Student (UG/PG/PhD)</td>
              <td className="py-2 px-4 border-b text-gray-900">₹7,000</td>
              <td className="py-2 px-4 border-b text-gray-900">$200</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">CO-AUTHOR (If one author has been registered & other Co-Authors also want to register)</h2>
        <table className="min-w-full bg-white rounded-lg shadow-md mb-8">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-2 px-4 border-b text-left text-gray-900 font-semibold">Category</th>
              <th className="py-2 px-4 border-b text-left text-gray-900 font-semibold">INR</th>
              <th className="py-2 px-4 border-b text-left text-gray-900 font-semibold">USD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b text-gray-900">Professional/Faculty/Industry</td>
              <td className="py-2 px-4 border-b text-gray-900">₹6,000</td>
              <td className="py-2 px-4 border-b text-gray-900">$200</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b text-gray-900">Student (UG/PG/PhD)</td>
              <td className="py-2 px-4 border-b text-gray-900">₹5,000</td>
              <td className="py-2 px-4 border-b text-gray-900">$150</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">NON-AUTHOR PARTICIPANTS</h2>
        <table className="min-w-full bg-white rounded-lg shadow-md mb-8">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-2 px-4 border-b text-left text-gray-900 font-semibold">Category</th>
              <th className="py-2 px-4 border-b text-left text-gray-900 font-semibold">INR</th>
              <th className="py-2 px-4 border-b text-left text-gray-900 font-semibold">USD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b text-gray-900">Professional/Faculty/Industry</td>
              <td className="py-2 px-4 border-b text-gray-900">₹5,000</td>
              <td className="py-2 px-4 border-b text-gray-900">$150</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b text-gray-900">Student (UG/PG/PhD)</td>
              <td className="py-2 px-4 border-b text-gray-900">₹4,000</td>
              <td className="py-2 px-4 border-b text-gray-900">$100</td>
            </tr>
          </tbody>
        </table>

        <p className="text-base text-gray-900 mt-8">
          For any registration queries, please contact: <a href="mailto:shilpaishu06@gmail.com" className="text-blue-600 hover:text-blue-500">shilpaishu06@gmail.com</a>
        </p>
      </div>
    </div>
  );
}