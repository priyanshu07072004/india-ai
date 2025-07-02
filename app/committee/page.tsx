import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Committee | INDIA-AI 2026',
  description: 'Committee Members of First International Conference on Innovations and Developments in Intelligent Applications with AI (INDIA-AI)',
};

export default function CommitteePage() {
  return (
    <div className="pt-28 pb-16 bg-gradient-to-b from-blue-100 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Committee</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the organizing team behind INDIA-AI 2026
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Chief Patrons</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* These are placeholder names. Replace with actual committee members */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. Anand Kumar</h3>
                <p className="mt-2 text-gray-600">Vice-Chancellor, University Name</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Rajesh Sharma</h3>
                <p className="mt-2 text-gray-600">Director, NITRA Technical Campus</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. Sunita Patel</h3>
                <p className="mt-2 text-gray-600">Chairperson, AI Technical and Educational Community for Research</p>
              </div>
            </div>
          </section>
          
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">General Chairs</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Vikram Singh</h3>
                <p className="mt-2 text-gray-600">Professor, Computer Science Department, NITRA Technical Campus</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Priya Gupta</h3>
                <p className="mt-2 text-gray-600">Associate Professor, AI Research Division, University Name</p>
              </div>
            </div>
          </section>
          
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Technical Program Chairs</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Amit Verma</h3>
                <p className="mt-2 text-gray-600">Professor, AI and Machine Learning, International University</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Nisha Sharma</h3>
                <p className="mt-2 text-gray-600">Associate Professor, Computer Vision, Technology Institute</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Deepak Mishra</h3>
                <p className="mt-2 text-gray-600">Professor, NLP Research, NITRA Technical Campus</p>
              </div>
            </div>
          </section>
          
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Track Chairs</h2>
            <div className="mt-6 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">AI in NLP</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. Rahul Jain</h4>
                    <p className="text-sm text-gray-600">Professor, NLP Department, University Name</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. Manisha Patel</h4>
                    <p className="text-sm text-gray-600">Associate Professor, Computational Linguistics, Institute Name</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">AI in Healthcare and Smart Systems</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. Sanjay Kumar</h4>
                    <p className="text-sm text-gray-600">Professor, Healthcare Informatics, Medical Institute</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. Ananya Singh</h4>
                    <p className="text-sm text-gray-600">Associate Professor, Smart Healthcare Systems, Technology University</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">AI in Industrial Applications and Optimization</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. Ajay Mehta</h4>
                    <p className="text-sm text-gray-600">Professor, Industrial AI, Engineering Institute</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. Prachi Gupta</h4>
                    <p className="text-sm text-gray-600">Associate Professor, Optimization Algorithms, NITRA Technical Campus</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">AI in Computer Vision</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. Mohan Sharma</h4>
                    <p className="text-sm text-gray-600">Professor, Computer Vision, Vision Research Institute</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. Ritu Agarwal</h4>
                    <p className="text-sm text-gray-600">Associate Professor, Image Processing, Technology University</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Organizing Committee</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Ravi Kumar</h3>
                <p className="mt-2 text-gray-600">Professor, Department of Computer Science, NITRA Technical Campus</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Neha Singh</h3>
                <p className="mt-2 text-gray-600">Associate Professor, Department of Information Technology, NITRA Technical Campus</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Siddharth Verma</h3>
                <p className="mt-2 text-gray-600">Assistant Professor, AI Research Division, NITRA Technical Campus</p>
              </div>
            </div>
          </section>
          
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">International Advisory Committee</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. John Smith</h3>
                <p className="mt-2 text-gray-600">Stanford University, USA</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. Maria Rodriguez</h3>
                <p className="mt-2 text-gray-600">University of Cambridge, UK</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. Hiroshi Tanaka</h3>
                <p className="mt-2 text-gray-600">University of Tokyo, Japan</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. Sophie Chen</h3>
                <p className="mt-2 text-gray-600">Tsinghua University, China</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. Klaus Mueller</h3>
                <p className="mt-2 text-gray-600">Technical University of Munich, Germany</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. Sarah Johnson</h3>
                <p className="mt-2 text-gray-600">University of Melbourne, Australia</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
