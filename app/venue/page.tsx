import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Venue | INDIA-AI 2026',
  description: 'Venue details for the First International Conference on Innovations and Developments in Intelligent Applications with AI (INDIA-AI)',
};

export default function VenuePage() {
  return (
    <div className="pt-28 pb-16 bg-gradient-to-b from-blue-100 to-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">Venue</h1>
        <p className="text-lg leading-8 text-gray-600 mb-8">
          The First International Conference on Innovations and Developments in Intelligent Applications with AI (INDIA-AI 2026) will be held at:
        </p>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">NITRA Technical Campus</h2>
          <p className="text-base text-gray-700">
            Sector-23, Raj Nagar, Ghaziabad<br />
            Uttar Pradesh, India - 201002
          </p>
        </div>

        <h2 className="text-xl font-bold tracking-tight text-gray-900 mt-8">Accommodation Assistance</h2>
        <p className="mt-2 text-base text-gray-600">
          Dr. A.P. Srivastava, Nitra Technical Campus<br />
          Email: <a href="mailto:apsrivastava@nitra.ac.in" className="text-blue-600 hover:text-blue-500">apsrivastava@nitra.ac.in</a><br />
          Phone: <a href="tel:+919990918693" className="text-blue-600 hover:text-blue-500">9990918693</a>
        </p>

        <h2 className="text-xl font-bold tracking-tight text-gray-900 mt-8">General Contact</h2>
        <p className="mt-2 text-base text-gray-600">
          <a href="mailto:indiaai.conf@gmail.com" className="text-blue-600 hover:text-blue-500">indiaai.conf@gmail.com</a>
        </p>

        <h2 className="text-xl font-bold tracking-tight text-gray-900 mt-8">How to Reach</h2>
        <p className="mt-2 text-base text-gray-600">
          The venue is easily accessible by road and rail. Ghaziabad is well connected to Delhi and other major cities. 
          For detailed directions and travel assistance, please contact the accommodation assistance above.
        </p>

        <div className="mt-8">
          <iframe
            title="NITRA Technical Campus Map"
            src="https://www.google.com/maps?q=NITRA+Technical+Campus,+Sector-23,+Raj+Nagar,+Ghaziabad,+Uttar+Pradesh,+India+-+201002&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}