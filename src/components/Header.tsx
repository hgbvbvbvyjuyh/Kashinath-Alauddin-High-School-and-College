import React, { useState } from 'react';
import collegeLogo from '../assets/college-logo.jpg';

export const Header: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>(collegeLogo);

  const handleImageError = () => {
    if (imgSrc !== '/college-logo.jpg') {
      setImgSrc('/college-logo.jpg');
    }
  };

  return (
    <header className="w-full bg-[#107c41] text-white shadow-md border-b-4 border-[#0c6133]">
      <div className="max-w-5xl mx-auto px-4 py-4 sm:py-6 flex items-center justify-between gap-4">
        {/* Left Side: Logo and School Credentials */}
        <div className="flex items-center gap-3 sm:gap-5 flex-1">
          {/* ========================================================================= */}
          {/* EXACT UPLOADED LOGO ELEMENT:                                              */}
          {/* Directly displaying the user-uploaded image as the logo                   */}
          {/* ========================================================================= */}
          <div
            id="college-logo-container"
            className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-md bg-white p-1 shadow-xs flex items-center justify-center border-2 border-emerald-200 overflow-hidden"
            title="Kashinath Alauddin High School and College Official Emblem"
          >
            <img
              id="college-logo"
              src={imgSrc}
              alt="Kashinath Alauddin High School and College Logo"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              onError={handleImageError}
            />
          </div>

          {/* Titles */}
          <div className="flex-1">
            <h1
              id="header-headline"
              className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight"
            >
              Kashinath Alauddin High School and College
            </h1>
            <p
              id="header-subheadline"
              className="text-xs sm:text-sm md:text-base text-emerald-100 font-medium tracking-wide mt-0.5 capitalize"
            >
              moulvibazar
            </p>
          </div>
        </div>

        {/* Right side Portal Tag / Academic Year indicator */}
        <div className="hidden sm:flex flex-col items-end text-right">
          <span className="inline-block bg-[#0d6b38] text-emerald-100 text-xs font-semibold px-3 py-1 rounded border border-[#16914e] shadow-xs">
            Student Result Portal
          </span>
          <span className="text-[11px] text-emerald-200 mt-1">Official Publication System</span>
        </div>
      </div>
    </header>
  );
};
