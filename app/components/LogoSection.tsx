import Image from 'next/image';

export default function LogoSection() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-900 mb-8">Supported By</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 items-center justify-items-center">
          <div className="flex justify-center">
            <Image
              src="/nitra.webp"
              alt="NITRA Technical Campus"
              width={200}
              height={100}
              className="object-contain h-24"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/msme.jpeg"
              alt="MSME"
              width={200}
              height={100}
              className="object-contain h-24"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/ai_research.jpeg"
              alt="AI Research"
              width={200}
              height={100}
              className="object-contain h-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
