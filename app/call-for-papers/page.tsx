import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Call for Papers | INDIA-AI 2026',
  description: 'Call for Papers for the First International Conference on Innovations and Developments in Intelligent Applications with AI (INDIA-AI)',
};

export default function CallForPapersPage() {
  return (
    <div className="mt-28 mb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Call for Papers</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Submit your research for INDIA-AI 2026
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-2xl font-bold text-gray-900">
                First International Conference on Innovations and Developments in Intelligent Applications with AI (INDIA-AI)
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                February 14-15, 2026 | NITRA Technical Campus, Ghaziabad, India
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <div className="text-lg text-gray-600">
                <p className="mb-4">
                  The First International Conference on Innovations and Developments in Intelligent Applications with AI (INDIA-AI) 2026 invites high-quality original research papers on innovations, developments, and applications of Artificial Intelligence across various domains.
                </p>
                <p className="mb-4">
                  INDIA-AI 2026 aims to bring together researchers, practitioners, and industry experts to share their knowledge, experiences, and research findings on various aspects of AI and its applications. The conference provides an ideal platform for networking, collaboration, and knowledge exchange among participants from academia and industry.
                </p>
                <p>
                  We invite submissions in the following tracks (but not limited to):
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-gray-900">AI in NLP</dt>
                  <dd className="mt-1 text-base text-gray-600 sm:col-span-2 sm:mt-0">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Language Models and Transformers</li>
                      <li>Text Classification and Sentiment Analysis</li>
                      <li>Named Entity Recognition and Information Extraction</li>
                      <li>Machine Translation and Multilingual NLP</li>
                      <li>Question Answering and Dialogue Systems</li>
                    </ul>
                    <Link href="/tracks#nlp" className="text-blue-600 hover:text-blue-500 text-sm font-medium mt-2 inline-block">
                      View more details →
                    </Link>
                  </dd>
                </div>
                
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-gray-900">AI in Healthcare and Smart Systems</dt>
                  <dd className="mt-1 text-base text-gray-600 sm:col-span-2 sm:mt-0">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Medical Image Analysis and Diagnostics</li>
                      <li>Clinical Decision Support Systems</li>
                      <li>Predictive Analytics in Healthcare</li>
                      <li>Smart Hospitals and Healthcare IoT</li>
                      <li>Wearable Health Technologies</li>
                    </ul>
                    <Link href="/tracks#healthcare" className="text-blue-600 hover:text-blue-500 text-sm font-medium mt-2 inline-block">
                      View more details →
                    </Link>
                  </dd>
                </div>
                
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-gray-900">AI in Industrial Applications and Optimization</dt>
                  <dd className="mt-1 text-base text-gray-600 sm:col-span-2 sm:mt-0">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Intelligent Manufacturing Systems</li>
                      <li>Predictive Maintenance and Quality Control</li>
                      <li>Supply Chain and Process Optimization</li>
                      <li>Industrial IoT and Smart Factories</li>
                      <li>Energy Management and Optimization</li>
                    </ul>
                    <Link href="/tracks#industrial" className="text-blue-600 hover:text-blue-500 text-sm font-medium mt-2 inline-block">
                      View more details →
                    </Link>
                  </dd>
                </div>
                
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-gray-900">AI in Computer Vision</dt>
                  <dd className="mt-1 text-base text-gray-600 sm:col-span-2 sm:mt-0">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Object Detection and Recognition</li>
                      <li>Image and Video Segmentation</li>
                      <li>3D Computer Vision and Scene Understanding</li>
                      <li>Action and Activity Recognition</li>
                      <li>Autonomous Vehicles and Vision Systems</li>
                    </ul>
                    <Link href="/tracks#vision" className="text-blue-600 hover:text-blue-500 text-sm font-medium mt-2 inline-block">
                      View more details →
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Submission Guidelines</h2>
            <div className="mt-6 text-lg text-gray-600">
              <p className="mb-4">
                All submissions must be original and not simultaneously submitted to another journal or conference.
              </p>
              <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Paper Format</h3>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Paper Length</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        Full papers: 6-8 pages (including references)<br />
                        Short papers: 4-6 pages (including references)
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Template</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        All submissions must follow the IEEE conference template. Templates are available for Microsoft Word and LaTeX formats.
                        <div className="mt-2">
                          <a href="#" className="text-blue-600 hover:text-blue-500">
                            Download IEEE Conference Template
                          </a>
                        </div>
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Submission System</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        All papers must be submitted through the conference submission system.
                        <div className="mt-2">
                          <a href="#" className="text-blue-600 hover:text-blue-500">
                            Go to Submission System
                          </a>
                        </div>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Review Process</h2>
            <div className="mt-6 text-lg text-gray-600">
              <p className="mb-4">
                All submissions will undergo a double-blind peer-review process by at least three reviewers from the technical program committee. Papers will be evaluated based on originality, technical quality, clarity of presentation, and relevance to the conference tracks.
              </p>
              <p>
                The review process will focus on:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Originality and novelty of the work</li>
                <li>Technical soundness and correctness</li>
                <li>Clarity of presentation</li>
                <li>Significance and relevance to the conference</li>
                <li>Adequate literature review and references</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Publication</h2>
            <div className="mt-6 text-lg text-gray-600">
              <p className="mb-4">
                All accepted papers will be published in the conference proceedings. Selected high-quality papers will be recommended for publication in special issues of reputed international journals.
              </p>
              <p>
                Authors of accepted papers must register for the conference and present their work during the conference to have their papers included in the proceedings.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Important Dates</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-gray-500">Paper Submission Deadline</p>
                <p className="text-base font-semibold text-gray-900">November 15, 2025</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Notification of Acceptance</p>
                <p className="text-base font-semibold text-gray-900">December 20, 2025</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Camera Ready Submission</p>
                <p className="text-base font-semibold text-gray-900">January 10, 2026</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Conference Dates</p>
                <p className="text-base font-semibold text-gray-900">February 14-15, 2026</p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/dates" className="text-blue-600 hover:text-blue-500 font-medium">
                View all important dates →
              </Link>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Contact</h2>
            <div className="mt-6 text-lg text-gray-600">
              <p>
                For any queries related to paper submissions, please contact:
              </p>
              <p className="mt-2 font-medium">
                Email: <a href="mailto:indiaai2026@nitra.ac.in" className="text-blue-600 hover:text-blue-500">indiaai2026@nitra.ac.in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
