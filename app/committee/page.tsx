import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Committee | INDIA-AI 2026',
  description: 'Organizing and technical committee for INDIA-AI 2026 conference.',
};

const committeeSections = [
  {
    title: "Chief Patron(s)",
    members: [
      "Shri Vidit Jain, Chairman, NITRA Technical Campus (NTC), Ghaziabad, India",
    ],
  },
  {
    title: "Patron(s)",
    members: [
      "Prof. (Dr.) B.K Sharma, Director, NITRA Technical Campus (NTC), Ghaziabad, India",
      "Prof. (Dr.) Sanjay Kumar Singh, IIT BHU, India",
    ],
  },
  {
    title: "Honorary Chair(s)",
    members: [
      "Prof. (Dr.) Thippa Reddy Gadekallu, Zhejiang A&F University, Hangzhou, China",
      "Prof. (Dr.) Szu-Yin Lin, National Yang Ming Chiao Tung University, Hsinchu, Taiwan",
    ],
  },
  {
    title: "General Chair(s)",
    members: [
      "Dr. Ankit Vidyarthi, Jaypee Institute of Information Technology, Noida, India",
      "Dr. Rishav Singh, IIT Patna, India",
      "Prof. (Dr.) Sanjay Kumar Singh, IIT BHU, India",
    ],
  },
  {
    title: "Technical Program Chair(s)",
    members: [
      "Prof. (Dr.) Aman Singh, Universidad Europea del Atlantico, Santander, Spain",
    ],
  },
  {
    title: "Track Chair(s)",
    custom: (
      <div className="space-y-4">
        <div>
          <div className="text-gray-900 font-bold">AI in Natural Language Processing</div>
          <ul className="list-disc ml-6 text-gray-900">
            <li>Dr. K. Vimal Kumar, University of Limerick, Castletroy, Co. Limerick, Ireland</li>
            <li>Dr. Basant Agarwal, Rajasthan Technical University, Kota, India</li>
          </ul>
        </div>
        <div>
          <div className="text-gray-900 font-bold">AI in Healthcare and Smart Systems</div>
          <ul className="list-disc ml-6 text-gray-900">
            <li>Dr. Priyanka Verma, University of Galway, Ireland</li>
            <li>Dr. USN Raju, National Institute of Technology Warangal, India</li>
          </ul>
        </div>
        <div>
          <div className="text-gray-900 font-bold">AI in Industrial Applications and Optimization</div>
          <ul className="list-disc ml-6 text-gray-900">
            <li>Dr. Reham Mostafa, Mansoura University, Egypt</li>
            <li>Dr. Suresh Dara, VIT University, Hyderabad, India</li>
          </ul>
        </div>
        <div>
          <div className="text-gray-900 font-bold">AI in Computer Vision</div>
          <ul className="list-disc ml-6 text-gray-900">
            <li>Dr. Imad Rida, University of Technology of Compiègne, France</li>
            <li>Dr. Gautam Kumar, NIT Delhi, India</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Editorial Chair(s)",
    members: [
      "Punit Gupta, National College Dublin, Ireland",
    ],
  },
  {
    title: "Publication Chair(s)",
    members: [
      "Prof. (Dr.) Manish Thakur, Jaypee Institute of Information Technology, Noida, India",
    ],
  },
  {
    title: "Publicity Chair(s)",
    members: [
      "Dr. Jasmin, Jaypee Institute of Information Technology, Noida, India",
      "Dr. Rabindra Barik, Kalinga Institute of Technology, Bhuvneshwar, Odisha, India",
    ],
  },
  {
    title: "Registration Chair(s)",
    members: [
      "Dr. Shilpa Gundagatti, Jaypee Institute of Information Technology, Noida, India",
    ],
  },
  {
    title: "Organizing Team",
    members: [
      "Mr. K.K Dewan – Registrar, Nitra Technical Campus",
      "Dr. A.P Srivastava, Nitra Technical Campus",
      "Mr. Partha Basu – PRO, Nitra Technical Campus",
      "Mr. Nitin Kr. Sharma, Nitra Technical Campus",
      "Mr. Saurabh Jain, Nitra Technical Campus",
      "Ms. Divya Pachauri, Nitra Technical Campus",
      "Mr. Abhineet Suman, Nitra Technical Campus",
      "Mr. Priya Tyagi, Nitra Technical Campus",
      "Ms. Akansha Rajput, Nitra Technical Campus",
    ],
  },
  {
    title: "Hospitality Incharge",
    custom: (
      <ul className="list-disc ml-6 text-gray-900">
        <li>
          Dr. A.P Srivastava, Nitra Technical Campus<br />
          Contact: <a href="mailto:apsrivastava@nitra.ac.in" className="text-blue-600 hover:text-blue-500">apsrivastava@nitra.ac.in</a>, 9990918693
        </li>
      </ul>
    ),
  },
  {
    title: "Travel Incharge",
    custom: (
      <ul className="list-disc ml-6 text-gray-900">
        <li>
          Mr. K.K Dewan, Nitra Technical Campus<br />
          Contact: <a href="mailto:Kkdewan@nitratextile.org" className="text-blue-600 hover:text-blue-500">Kkdewan@nitratextile.org</a>, 9312286884
        </li>
      </ul>
    ),
  },
  {
    title: "Session Organizer Incharge",
    custom: (
      <ul className="list-disc ml-6 text-gray-900">
        <li>
          Mr. Partha Basu – PRO, Nitra Technical Campus<br />
          Contact: <a href="mailto:Parthabasu@nitratextile.org" className="text-blue-600 hover:text-blue-500">Parthabasu@nitratextile.org</a>, 9871338998
        </li>
      </ul>
    ),
  },
];

export default function CommitteePage() {
  return (
    <div className="pt-28 pb-16 bg-gradient-to-b from-blue-100 to-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">Committee</h1>
        <div className="grid gap-8">
          {committeeSections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-blue-700 mb-2">{section.title}</h2>
              {section.custom ? (
                section.custom
              ) : (
                <ul className="list-disc ml-6 text-gray-900">
                  {section.members.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}