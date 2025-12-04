// components/Banner.tsx
import Image from 'next/image';

export default function Banner1() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home_image/hero_banner1.webp" // or your image path
          alt="Website Banner"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>
      
      {/* Content over image */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover amazing features and services
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}