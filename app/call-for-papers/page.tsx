import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Call for Papers | INDIA-AI 2026',
  description: 'Call for papers and submission guidelines for INDIA-AI 2026 conference.',
};

export default function CallForPapersPage() {
  return (
    <div className="pt-28 pb-16 bg-gradient-to-b from-blue-100 to-white min-h-screen">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">Call for Papers</h1>
        
        {/* Important Dates Section */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-blue-100 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Dates</h2>
          <ul className="space-y-6">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <span className="text-lg font-semibold text-gray-900">Submission date</span>
              <span className="text-lg text-blue-700 font-bold mt-2 sm:mt-0">October 30, 2025</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <span className="text-lg font-semibold text-gray-900">Acceptance Notification</span>
              <span className="text-lg text-blue-700 font-bold mt-2 sm:mt-0">December 05, 2025</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <span className="text-lg font-semibold text-gray-900">Final paper submission</span>
              <span className="text-lg text-blue-700 font-bold mt-2 sm:mt-0">December 15, 2025</span>
            </li>
          </ul>
        </div>

        {/* Submission Guidelines */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Submission Guidelines</h2>
          <p className="text-gray-900 mb-2">
            All submissions must follow the <span className="font-semibold">Springer Template</span>. Templates are available for Microsoft Word and LaTeX formats.
          </p>
        </section>

        {/* Submission System */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Submission System</h2>
          <p className="text-gray-900 mb-2">
            All papers must be submitted through the Microsoft CMT conference submission system. The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </section>

        {/* Publication */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Publication</h2>
          <p className="text-gray-900">
            Paragraph will be updated after Springer approval.
          </p>
        </section>
      </div>
    </div>
  );
}