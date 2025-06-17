import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  logoSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaText, logoSrc }) => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/construction.jpg"
          alt="Modern construction site with skyscrapers"
          fill
          className="object-cover object-center brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <Image
          src={logoSrc}
          alt="SmartGuard AI Logo"
          width={120}
          height={120}
          className="mb-8"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl">
          {subtitle}
        </p>
        <Button variant="primary" size="large">
          {ctaText}
        </Button>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>
    </section>
  );
};

export default HeroSection;

