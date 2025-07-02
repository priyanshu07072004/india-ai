import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Venue | INDIA-AI 2026',
  description: 'Venue information for the First International Conference on Innovations and Developments in Intelligent Applications with AI (INDIA-AI)',
};

export default function VenuePage() {
  return (
    <div className="pt-28 pb-16 bg-gradient-to-b from-blue-100 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Venue</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            INDIA-AI 2026 Conference Location
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-2xl font-bold text-gray-900">Conference Venue</h2>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <div className="text-lg text-gray-600">
                <p className="font-semibold text-xl text-gray-900">NITRA Technical Campus</p>
                <p className="mt-2">Sector-23, Raj Nagar, Ghaziabad</p>
                <p>Uttar Pradesh, India - 201002</p>
                
                <div className="mt-6 aspect-w-16 aspect-h-9">
                  <div className="h-96 w-full bg-gray-200 flex items-center justify-center">
                    {/* This would be replaced with an actual map iframe in production */}
                    <p className="text-gray-500">Interactive Map Will Be Embedded Here</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="https://maps.google.com/?q=NITRA+Technical+Campus+Ghaziabad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-500"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div id="travel" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">How to Reach</h2>
            <div className="mt-6 text-lg text-gray-600">
              <h3 className="text-xl font-semibold text-gray-900">By Air</h3>
              <p className="mt-2 mb-4">
                The nearest international airport is Indira Gandhi International Airport (DEL), New Delhi, which is approximately 35 km from the conference venue. The airport is well connected with major cities across the world.
              </p>
              <p className="mb-4">
                From the airport, you can take:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Taxi services (Uber, Ola, or prepaid taxis available at the airport)</li>
                <li>Delhi Metro (Airport Express Line to New Delhi, then change to Blue Line towards Vaishali/Noida)</li>
                <li>Conference shuttle service (will be arranged from select locations on conference days)</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8">By Train</h3>
              <p className="mt-2 mb-4">
                Ghaziabad Railway Station is well connected to major cities across India. From the railway station, the venue is approximately 10 km away and can be reached by taxi or auto-rickshaw.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8">By Road</h3>
              <p className="mt-2 mb-4">
                Ghaziabad is well connected by road to Delhi and other major cities in North India. Regular bus services are available from Delhi ISBT Anand Vihar to Ghaziabad.
              </p>
              <p className="mb-4">
                If you are driving, the venue is easily accessible via NH-24 and NH-58.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8">Local Transportation</h3>
              <p className="mt-2">
                Local transportation options in Ghaziabad include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>App-based taxi services (Uber, Ola)</li>
                <li>Auto-rickshaws</li>
                <li>Local buses</li>
                <li>Delhi Metro (Blue Line connects Delhi to Ghaziabad)</li>
              </ul>
            </div>
          </div>
          
          <div id="accommodation" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Accommodation</h2>
            <div className="mt-6 text-lg text-gray-600">
              <p className="mb-4">
                We have arranged special rates for conference participants at the following hotels near the venue:
              </p>
              
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="bg-white shadow overflow-hidden rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-xl font-semibold text-gray-900">Hotel Name 1</h3>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <div className="text-sm text-gray-600">
                      <p>Distance from venue: 1.5 km</p>
                      <p className="mt-2">Rate: ₹5,000 per night (special conference rate)</p>
                      <p className="mt-2">
                        Facilities: WiFi, Restaurant, Business Center, Gym
                      </p>
                      <div className="mt-4">
                        <a href="#" className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white shadow overflow-hidden rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-xl font-semibold text-gray-900">Hotel Name 2</h3>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <div className="text-sm text-gray-600">
                      <p>Distance from venue: 2.2 km</p>
                      <p className="mt-2">Rate: ₹3,500 per night (special conference rate)</p>
                      <p className="mt-2">
                        Facilities: WiFi, Restaurant, Swimming Pool
                      </p>
                      <div className="mt-4">
                        <a href="#" className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="mt-6">
                To avail the special conference rates, please mention "INDIA-AI 2026" while booking. The special rates are valid for bookings made before January 15, 2026, subject to availability.
              </p>
              
              <div className="mt-6 bg-blue-50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-900">Accommodation Assistance</h3>
                <p className="mt-2">
                  For assistance with accommodation or for more options, please contact our accommodation coordinator at <a href="mailto:accommodation@indiaai2026.org" className="text-blue-600 hover:text-blue-500">accommodation@indiaai2026.org</a>.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Visa Information</h2>
            <div className="mt-6 text-lg text-gray-600">
              <p className="mb-4">
                International participants may require a visa to enter India. Please check the visa requirements for your country well in advance of the conference dates.
              </p>
              <p className="mb-4">
                The conference organizers can provide an invitation letter to facilitate your visa application process. To request an invitation letter, please register for the conference and then contact <a href="mailto:indiaai2026@nitra.ac.in" className="text-blue-600 hover:text-blue-500">indiaai2026@nitra.ac.in</a> with your registration details.
              </p>
              <p>
                For more information on Indian visa requirements and to apply online, please visit the <a href="https://indianvisaonline.gov.in/visa/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500">Official Indian Visa Online Portal</a>.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Local Attractions</h2>
            <div className="mt-6 text-lg text-gray-600">
              <p className="mb-4">
                While in Ghaziabad/Delhi, you might want to explore some of the famous attractions in the region:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Taj Mahal, Agra (approx. 200 km from Ghaziabad)</li>
                <li>Red Fort, Delhi</li>
                <li>Qutub Minar, Delhi</li>
                <li>India Gate, Delhi</li>
                <li>Akshardham Temple, Delhi</li>
                <li>Chandni Chowk, Delhi (for shopping and food)</li>
                <li>Connaught Place, Delhi</li>
              </ul>
              <p className="mt-4">
                The conference organizers can help arrange group tours to some of these attractions after the conference. Details will be provided closer to the conference dates.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Contact</h2>
            <div className="mt-6 text-lg text-gray-600">
              <p>
                For any queries related to the venue, accommodation, or travel, please contact:
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
