import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | INDIA-AI 2026',
  description: 'About the First International Conference on Innovations and Developments in Intelligent Applications with AI (INDIA-AI)',
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 bg-gradient-to-b from-blue-100 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About INDIA-AI</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            First International Conference on Innovations and Developments in Intelligent Applications with AI
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">About the Conference</h2>
          <div className="mt-6 text-lg leading-8 text-gray-600">
            <p className="mb-4">
              The First International Conference on Innovations and Developments in Intelligent Applications with AI (INDIA-AI) 2026 is a premier forum for the presentation and exchange of recent innovations and developments in the field of Artificial Intelligence and its applications.
            </p>
            <p className="mb-4">
              INDIA-AI provides an international platform for researchers, academicians, professionals, and students to share their research findings, innovations, and experiences with the global AI community. The conference aims to foster collaboration and knowledge exchange among participants from diverse backgrounds and expertise.
            </p>
            <p className="mb-4">
              The conference will be held in a hybrid mode, allowing participants to join either in-person at NITRA Technical Campus, Ghaziabad, India, or virtually from anywhere in the world.
            </p>
          </div>
          
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Conference Themes</h2>
          <div className="mt-6 text-lg leading-8 text-gray-600">
            <p className="mb-4">
              INDIA-AI 2026 will focus on various aspects of Artificial Intelligence and its applications, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Natural Language Processing and Text Analytics</li>
              <li>AI in Healthcare and Medical Diagnostics</li>
              <li>Smart Systems and IoT Applications</li>
              <li>Industrial AI and Optimization Techniques</li>
              <li>Computer Vision and Image Processing</li>
              <li>Machine Learning Algorithms and Applications</li>
              <li>Deep Learning and Neural Networks</li>
              <li>AI Ethics and Responsible AI</li>
              <li>AI for Social Good</li>
              <li>AI in Education</li>
              <li>AI for Sustainable Development</li>
            </ul>
          </div>
          
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Organizers</h2>
          <div className="mt-6 text-lg leading-8 text-gray-600">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">NITRA Technical Campus</h3>
                <p className="mt-2">
                  NITRA Technical Campus, Ghaziabad, India is a leading technical institution known for its cutting-edge research and educational programs in the field of technology and engineering.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">AI Technical and Educational Community for Research</h3>
                <p className="mt-2">
                  AI Technical and Educational Community for Research, India is a community of AI researchers, educators, and practitioners dedicated to advancing the field of AI through collaborative research and educational initiatives.
                </p>
              </div>
            </div>
          </div>
          
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Publication Opportunity</h2>
          <div className="mt-6 text-lg leading-8 text-gray-600">
            <p>
              All accepted papers will be published in reputable indexed journals and conference proceedings. Selected high-quality papers will be recommended for publication in special issues of renowned international journals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
