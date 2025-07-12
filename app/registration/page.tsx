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
        <p className="text-lg leading-8 text-gray-600 mb-8">
          Register for the First International Conference on Innovations and Developments in Intelligent Applications with AI (INDIA-AI 2026).
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Early Bird Registration <span className="text-base font-normal">(Until January 25, 2026)</span></h2>
        <table className="min-w-full bg-white rounded-lg shadow-md mb-8">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Category</th>
              <th className="py-2 px-4 border-b text-left">INR</th>
              <th className="py-2 px-4 border-b text-left">USD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Professional/Faculty/Industry</td>
              <td className="py-2 px-4 border-b">₹8,000</td>
              <td className="py-2 px-4 border-b">$300</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Student (UG/PG/PhD)</td>
              <td className="py-2 px-4 border-b">₹7,000</td>
              <td className="py-2 px-4 border-b">$200</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">CO-AUTHOR (If one author has been registered & other Co-Authors also want to register)</h2>
        <table className="min-w-full bg-white rounded-lg shadow-md mb-8">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Category</th>
              <th className="py-2 px-4 border-b text-left">INR</th>
              <th className="py-2 px-4 border-b text-left">USD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Professional/Faculty/Industry</td>
              <td className="py-2 px-4 border-b">₹6,000</td>
              <td className="py-2 px-4 border-b">$200</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Student (UG/PG/PhD)</td>
              <td className="py-2 px-4 border-b">₹5,000</td>
              <td className="py-2 px-4 border-b">$150</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">NON-AUTHOR PARTICIPANTS</h2>
        <table className="min-w-full bg-white rounded-lg shadow-md mb-8">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Category</th>
              <th className="py-2 px-4 border-b text-left">INR</th>
              <th className="py-2 px-4 border-b text-left">USD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Professional/Faculty/Industry</td>
              <td className="py-2 px-4 border-b">₹5,000</td>
              <td className="py-2 px-4 border-b">$150</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Student (UG/PG/PhD)</td>
              <td className="py-2 px-4 border-b">₹4,000</td>
              <td className="py-2 px-4 border-b">$100</td>
            </tr>
          </tbody>
        </table>

        <p className="text-base text-gray-600 mt-8">
          For any registration queries, please contact: <a href="mailto:shilpaishu06@gmail.com" className="text-blue-600 hover:text-blue-500">shilpaishu06@gmail.com</a>
        </p>
      </div>
    </div>
  );
}