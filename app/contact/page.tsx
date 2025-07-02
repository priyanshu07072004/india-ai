import { Metadata } from 'next';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Contact | INDIA-AI 2026',
  description: 'Contact information for the First International Conference on Innovations and Developments in Intelligent Applications with AI (INDIA-AI)',
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-16 bg-gradient-to-b from-blue-100 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Contact Us</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get in touch with the INDIA-AI 2026 team
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Contact Information</h2>
              <p className="mt-3 text-lg leading-8 text-gray-600">
                Feel free to reach out to us with any questions or inquiries about INDIA-AI 2026.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <EnvelopeIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-3 text-base text-gray-600">
                    <p>Email:</p>
                    <p className="mt-1 font-medium text-gray-900">
                      <a href="mailto:indiaai2026@nitra.ac.in" className="hover:underline">
                        indiaai2026@nitra.ac.in
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-3 text-base text-gray-600">
                    <p>Phone:</p>
                    <p className="mt-1 font-medium text-gray-900">+91-XXXXXXXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-3 text-base text-gray-600">
                    <p>Address:</p>
                    <p className="mt-1 font-medium text-gray-900">
                      NITRA Technical Campus<br />
                      Sector-23, Raj Nagar, Ghaziabad<br />
                      Uttar Pradesh, India - 201002
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h2 className="text-xl font-bold tracking-tight text-gray-900">For Specific Inquiries</h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Paper Submissions:</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      <a href="mailto:papers@indiaai2026.org" className="text-blue-600 hover:text-blue-500">
                        papers@indiaai2026.org
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Registration:</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      <a href="mailto:registration@indiaai2026.org" className="text-blue-600 hover:text-blue-500">
                        registration@indiaai2026.org
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Accommodation and Travel:</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      <a href="mailto:accommodation@indiaai2026.org" className="text-blue-600 hover:text-blue-500">
                        accommodation@indiaai2026.org
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Sponsorship Opportunities:</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      <a href="mailto:sponsorship@indiaai2026.org" className="text-blue-600 hover:text-blue-500">
                        sponsorship@indiaai2026.org
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h2 className="text-xl font-bold tracking-tight text-gray-900">Connect With Us</h2>
                <div className="mt-4 flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>

                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>

                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Send us a message</h2>
              <form className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
                    Subject
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="Subject of your inquiry"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="Your message"
                    />
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">FAQs</h2>
            <div className="mt-8 divide-y divide-gray-200">
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">When is the paper submission deadline?</h3>
                <p className="mt-2 text-base text-gray-600">
                  The paper submission deadline is November 15, 2025. Please check the <a href="/dates" className="text-blue-600 hover:text-blue-500">Important Dates</a> page for all deadlines.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">Can I attend the conference virtually?</h3>
                <p className="mt-2 text-base text-gray-600">
                  Yes, INDIA-AI 2026 will be held in a hybrid mode, allowing participants to join either in-person or virtually. Different registration fees apply for in-person and virtual attendance.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">What is the registration fee for the conference?</h3>
                <p className="mt-2 text-base text-gray-600">
                  Registration fees vary depending on the type of participation (in-person/virtual) and registration timing (early bird/regular). Please see the <a href="/registration" className="text-blue-600 hover:text-blue-500">Registration</a> page for details.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">Will the conference proceedings be published?</h3>
                <p className="mt-2 text-base text-gray-600">
                  Yes, all accepted papers will be published in the conference proceedings. Selected high-quality papers will be recommended for publication in special issues of reputed international journals.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">How can I get an invitation letter for visa purposes?</h3>
                <p className="mt-2 text-base text-gray-600">
                  After registration, you can request an invitation letter by emailing indiaai2026@nitra.ac.in with your registration details. Please check the <a href="/venue" className="text-blue-600 hover:text-blue-500">Venue</a> page for more visa information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
