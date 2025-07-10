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

          {/* Chief Patron(s) */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Chief Patron(s)</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Shri Vidit Jain</h3>
                <p className="mt-2 text-gray-600">Chairman, NITRA Technical Campus (NTC), Ghaziabad, India</p>
              </div>
            </div>
          </section>

          {/* Patron(s) */}
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

          {/* Honorary Chair(s) */}
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

          {/* General Chair(s) */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">General Chair(s)</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Ankit Vidyarthi</h3>
                <p className="mt-2 text-gray-600">Jaypee Institute of Information Technology, Noida, India</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Rishav Singh</h3>
                <p className="mt-2 text-gray-600">IIT Patna, India</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. (Dr.) Sanjay Kumar Singh</h3>
                <p className="mt-2 text-gray-600">IIT BHU, India</p>
              </div>
            </div>
          </section>

          {/* Technical Program Chair(s) */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Technical Program Chair(s)</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. (Dr.) Aman Singh</h3>
                <p className="mt-2 text-gray-600">Universidad Europea del Atlantico, Santander, Spain</p>
              </div>
            </div>
          </section>

          {/* Track Chair(s) */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Track Chair(s)</h2>
            <div className="mt-6 space-y-8">

              {/* AI in Natural Language Processing */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">AI in Natural Language Processing</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. K. Vimal Kumar</h4>
                    <p className="text-sm text-gray-600">University of Limerick, Castletroy, Co. Limerick, Ireland</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. Basant Agarwal</h4>
                    <p className="text-sm text-gray-600">Rajasthan Technical University, Kota, India</p>
                  </div>
                </div>
              </div>

              {/* AI in Healthcare and Smart Systems */}
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

              {/* AI in Industrial Applications and Optimization */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">AI in Industrial Applications and Optimization</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. Reham Mostafa</h4>
                    <p className="text-sm text-gray-600">Mansoura University, Egypt</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. Suresh Dara</h4>
                    <p className="text-sm text-gray-600">VIT University, Hyderabad, India</p>
                  </div>
                </div>
              </div>

              {/* AI in Computer Vision */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">AI in Computer Vision</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. Imad Rida</h4>
                    <p className="text-sm text-gray-600">University of Technology of Compiègne, France</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Dr. Gautam Kumar</h4>
                    <p className="text-sm text-gray-600">NIT Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Editorial Chair(s) */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Editorial Chair(s)</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Punit Gupta</h3>
                <p className="mt-2 text-gray-600">National College Dublin, Ireland</p>
              </div>
            </div>
          </section>

          {/* Publication Chair(s) */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Publication Chair(s)</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Prof. (Dr.) Manish Thakur</h3>
                <p className="mt-2 text-gray-600">Jaypee Institute of Information Technology, Noida, India</p>
              </div>
            </div>
          </section>

          {/* Publicity Chair(s) */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Publicity Chair(s)</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Jasmin</h3>
                <p className="mt-2 text-gray-600">Jaypee Institute of Information Technology, Noida, India</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Rabindra Barik</h3>
                <p className="mt-2 text-gray-600">Kalinga Institute of Technology, Bhuvneshwar, Odisha, India</p>
              </div>
            </div>
          </section>

          {/* Registration Chair(s) */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Registration Chair(s)</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Shilpa Gundagatti</h3>
                <p className="mt-2 text-gray-600">Jaypee Institute of Information Technology, Noida, India</p>
              </div>
            </div>
          </section>

          {/* Organizing Team, Hospitality Incharge, Travel Incharge, Session Organizer Incharge, TPC members/Reviewers */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Organizing Team</h2>
            <div className="mt-6 text-gray-600">
              <p>Details to be updated soon.</p>
            </div>
          </section>
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Hospitality Incharge</h2>
            <div className="mt-6 text-gray-600">
              <p>Details to be updated soon.</p>
            </div>
          </section>
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Travel Incharge</h2>
            <div className="mt-6 text-gray-600">
              <p>Details to be updated soon.</p>
            </div>
          </section>
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Session Organizer Incharge</h2>
            <div className="mt-6 text-gray-600">
              <p>Details to be updated soon.</p>
            </div>
          </section>
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">TPC members/Reviewers</h2>
            <div className="mt-6 text-gray-600">
              <p>Details to be updated soon.</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}