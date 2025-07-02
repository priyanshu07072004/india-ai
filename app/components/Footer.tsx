'use client';

import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Committee', href: '/committee' },
    { name: 'Tracks', href: '/tracks' },
    { name: 'Important Dates', href: '/dates' },
    { name: 'Call for Papers', href: '/call-for-papers' },
    { name: 'Registration', href: '/registration' },
    { name: 'Venue', href: '/venue' },
    { name: 'Contact', href: '/contact' },
  ],
  useful: [
    { name: 'Visa Information', href: 'https://indianvisaonline.gov.in/visa/index.html' },
    { name: 'Travel Guidelines', href: '/venue#travel' },
    { name: 'Accommodation', href: '/venue#accommodation' },
    { name: 'Copyright Form', href: '/resources/copyright-form.pdf' },
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: FaTwitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: FaLinkedin,
    },
    {
      name: 'Facebook',
      href: '#',
      icon: FaFacebook,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Useful Links</h3>
            <ul className="mt-4 space-y-2">
              {navigation.useful.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Contact Info</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm leading-6 text-gray-300">
                NITRA Technical Campus
              </li>
              <li className="text-sm leading-6 text-gray-300">
                Ghaziabad, India
              </li>
              <li className="text-sm leading-6 text-gray-300">
                Email: indiaai2026@nitra.ac.in
              </li>
              <li className="mt-6">
                <div className="flex space-x-6">
                  {navigation.social.map((item) => (
                    <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 border-t border-gray-700 pt-8">
          <p className="text-xs leading-5 text-gray-400 text-center">
            &copy; {new Date().getFullYear()} First International Conference on Innovations and Developments in Intelligent Applications with AI (INDIA-AI). All rights reserved.
          </p>
          <p className="text-xs leading-5 text-gray-400 text-center mt-2">
            Organized by NITRA Technical Campus, Ghaziabad, India and AI Technical and Educational Community for Research, India.
          </p>
        </div>
      </div>
    </footer>
  );
}
