import { Metadata } from 'next';
import { ChatBubbleLeftRightIcon, HeartIcon, CogIcon, CameraIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Conference Tracks | INDIA-AI 2026',
  description: 'Research Tracks of the First International Conference on Innovations and Developments in Intelligent Applications with AI (INDIA-AI)',
};

export default function TracksPage() {
  return (
    <div className="mt-28 mb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Conference Tracks</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore the research tracks for INDIA-AI 2026
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <section id="nlp" className="scroll-mt-24">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">AI in NLP</h2>
            </div>
            <div className="mt-6 text-lg leading-8 text-gray-600">
              <p className="mb-4">
                The AI in Natural Language Processing (NLP) track focuses on advances in computational techniques for analyzing, understanding, and generating human language. This track welcomes papers on a wide range of NLP topics and applications.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Topics of Interest</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Language Models and Transformers</li>
                <li>Text Classification and Sentiment Analysis</li>
                <li>Named Entity Recognition and Information Extraction</li>
                <li>Machine Translation</li>
                <li>Question Answering Systems</li>
                <li>Text Summarization</li>
                <li>Dialogue Systems and Chatbots</li>
                <li>Speech Recognition and Processing</li>
                <li>Multilingual NLP</li>
                <li>Low-resource Language Processing</li>
                <li>Ethics and Bias in NLP Systems</li>
              </ul>
            </div>
          </section>
          
          <section id="healthcare" className="mt-16 scroll-mt-24">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <HeartIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">AI in Healthcare and Smart Systems</h2>
            </div>
            <div className="mt-6 text-lg leading-8 text-gray-600">
              <p className="mb-4">
                This track explores the application of AI in healthcare, medical diagnostics, and smart systems. It aims to highlight innovations that enhance patient care, improve diagnostic accuracy, and advance smart healthcare infrastructures.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Topics of Interest</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Medical Image Analysis and Processing</li>
                <li>Clinical Decision Support Systems</li>
                <li>Predictive Analytics in Healthcare</li>
                <li>Electronic Health Records Analysis</li>
                <li>Wearable Health Technologies</li>
                <li>Smart Hospitals and Healthcare Infrastructure</li>
                <li>Remote Patient Monitoring</li>
                <li>Drug Discovery and Development</li>
                <li>Personalized Medicine</li>
                <li>Healthcare Robotics</li>
                <li>IoT in Healthcare</li>
                <li>Smart Home and Ambient Assisted Living</li>
              </ul>
            </div>
          </section>
          
          <section id="industrial" className="mt-16 scroll-mt-24">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <CogIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">AI in Industrial Applications and Optimization</h2>
            </div>
            <div className="mt-6 text-lg leading-8 text-gray-600">
              <p className="mb-4">
                This track focuses on the integration of AI technologies in industrial processes, manufacturing systems, and optimization techniques. It aims to highlight innovations that improve industrial efficiency, productivity, and sustainability.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Topics of Interest</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Intelligent Manufacturing Systems</li>
                <li>Industrial Internet of Things (IIoT)</li>
                <li>Predictive Maintenance</li>
                <li>Supply Chain Optimization</li>
                <li>Quality Control and Assurance</li>
                <li>Energy Management and Optimization</li>
                <li>Process Optimization</li>
                <li>Robotics in Manufacturing</li>
                <li>Digital Twins and Simulation</li>
                <li>Smart Factories</li>
                <li>Industrial Cybersecurity</li>
                <li>Evolutionary Algorithms and Optimization Techniques</li>
              </ul>
            </div>
          </section>
          
          <section id="vision" className="mt-16 scroll-mt-24">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <CameraIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">AI in Computer Vision</h2>
            </div>
            <div className="mt-6 text-lg leading-8 text-gray-600">
              <p className="mb-4">
                The AI in Computer Vision track focuses on advances in techniques for analyzing, understanding, and generating visual data. This track welcomes papers on a wide range of computer vision topics and applications.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Topics of Interest</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Object Detection and Recognition</li>
                <li>Image and Video Segmentation</li>
                <li>Visual Tracking and Motion Analysis</li>
                <li>3D Computer Vision</li>
                <li>Scene Understanding</li>
                <li>Image and Video Generation</li>
                <li>Visual Question Answering</li>
                <li>Action and Activity Recognition</li>
                <li>Facial Recognition and Analysis</li>
                <li>Autonomous Vehicles and Vision</li>
                <li>Surveillance and Security</li>
                <li>Augmented and Virtual Reality</li>
                <li>Medical Image Analysis</li>
              </ul>
            </div>
          </section>
          
          <div className="mt-16 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Submission Guidelines</h2>
            <div className="mt-6 text-lg leading-8 text-gray-600">
              <p className="mb-4">
                All submissions must adhere to the conference formatting guidelines and be submitted through the conference submission system. For more details on the submission process and requirements, please visit the Call for Papers page.
              </p>
              <div className="mt-6">
                <a
                  href="/call-for-papers"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  View Call for Papers
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
