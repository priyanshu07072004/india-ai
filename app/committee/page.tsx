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
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Chief Patron(s)</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Shri Vidit Jain</h3>
                <p className="mt-2 text-gray-600">Chairman, NITRA Technical Campus (NTC), Ghaziabad, India</p>
              </div>
            </div>
          </section>
          
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Patron(s)</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. (Dr.) B.K Sharma</h3>
                <p className="mt-2 text-gray-600">Director, NITRA Technical Campus (NTC), Ghaziabad, India</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. (Dr.) Sanjay Kumar Singh</h3>
                <p className="mt-2 text-gray-600">IIT BHU, India</p>
              </div>
            </div>
          </section>
          
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Honorary Chair(s)</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. (Dr.) Thippa Reddy Gadekallu</h3>
                <p className="mt-2 text-gray-600">Zhejiang A&F University, Hangzhou, China</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. (Dr.) Szu-Yin Lin</h3>
                <p className="mt-2 text-gray-600">National Yang Ming Chiao Tung University, Hsinchu, Taiwan</p>
              </div>
            </div>
          </section>
          
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Technical Program Chair(s)</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. (Dr.) Aman Singh</h3>
                <p className="mt-2 text-gray-600">Universidad Europea del Atlantico, Santander, Spain</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Pratheepan Yogarajah</h3>
                <p className="mt-2 text-gray-600">Ulster University, United Kingdom</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Priyanka Chaurasia</h3>
                <p className="mt-2 text-gray-600">Ulster University, United Kingdom</p>
              </div>
            </div>
          </section>
          
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Track Chair(s)</h2>
            <div className="mt-6 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">AI in Natural Language Processing</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. K. Vimal Kumar</h4>
                    <p className="text-sm text-gray-600">University of Limerick, Castletroy, Co. Limerick, Ireland</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">AI in Healthcare and Smart Systems</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. Priyanka Verma</h4>
                    <p className="text-sm text-gray-600">University of Galway, Ireland</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. USN Raju</h4>
                    <p className="text-sm text-gray-600">National Institute of Technology Warangal, India</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">AI in Industrial Applications and Optimization</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. Reham Mostafa</h4>
                    <p className="text-sm text-gray-600">Mansoura University, Egypt</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. Imad Rida</h4>
                    <p className="text-sm text-gray-600">University of Technology of Compiègne, France</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">AI in Computer Vision</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. Gautam Kumar</h4>
                    <p className="text-sm text-gray-600">NIT Delhi, India</p>
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
                <h3 className="text-lg font-semibold text-gray-900">Prof. (Dr.) Hemant Kumar Rath</h3>
                <p className="mt-2 text-gray-600">Senior Researcher, TCS Research, Tata Consultancy Services, India</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Shally</h3>
                <p className="mt-2 text-gray-600">National Institute of Technology, Delhi, India</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. (Dr.) V. K. Panchal</h3>
                <p className="mt-2 text-gray-600">Head of Department, School of Advanced Sciences, VIT Bhopal University, India</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. (Dr.) Wen-Huang Cheng</h3>
                <p className="mt-2 text-gray-600">National Yang Ming Chiao Tung University, Hsinchu, Taiwan</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Rojalina Priyadarshini</h3>
                <p className="mt-2 text-gray-600">Asst. Professor, Computer Science Department, KIIT University, Bhubaneswar, India</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Ghanshyam Sharma</h3>
                <p className="mt-2 text-gray-600">National Institute of Technology, Delhi, India</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. (Dr.) Srikanta Patnaik</h3>
                <p className="mt-2 text-gray-600">Professor, Department of Computer Science, SOA University, Bhubaneswar, India</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Sabina Jeschke</h3>
                <p className="mt-2 text-gray-600">Professor, Machine Elements and Technical Logistics, Helmut Schmidt University, Hamburg, Germany</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. (Dr.) Doo-Soon Park</h3>
                <p className="mt-2 text-gray-600">Department of Computer Software Engineering, Soonchunhyang University, Asan, South Korea</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
