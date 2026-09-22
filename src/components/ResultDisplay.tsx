import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { StudentFeeData } from '../types';
import collegeLogo from '../assets/college-logo.jpg';
import tammirPhoto from '../assets/tammir.jpg';

interface FeeDisplayProps {
  data: StudentFeeData | null;
  error?: string | null;
}

export const ResultDisplay: React.FC<FeeDisplayProps> = ({ data, error }) => {
  const [logoSrc, setLogoSrc] = useState<string>(collegeLogo);
  const [photoSrc, setPhotoSrc] = useState<string>(tammirPhoto);

  const handleLogoError = () => {
    if (logoSrc !== '/college-logo.jpg') {
      setLogoSrc('/college-logo.jpg');
    }
  };

  const handlePhotoError = () => {
    if (photoSrc !== '/tammir.jpg') {
      setPhotoSrc('/tammir.jpg');
    }
  };

  if (error) {
    return (
      <div
        id="fee-error-container"
        className="mt-6 bg-red-50 border border-red-200 rounded-md p-6 text-center shadow-xs"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-3">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h3 className="text-base font-semibold text-red-900">Record Not Found</h3>
        <p className="mt-1 text-sm text-red-700 max-w-md mx-auto">{error}</p>
        <p className="mt-2 text-xs text-red-500 font-medium">
          For this demonstration, please enter search value <strong>129698</strong>.
        </p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="mt-8 flex flex-col items-center">
      {/* ========================================================================= */}
      {/* STUDENT FEE INFORMATION CARD                                              */}
      {/* Formatted faithfully after the physical ID card reference:                 */}
      {/* - Card proportions and laminate border                                    */}
      {/* - Cyan header with official emblem and institution details                */}
      {/* - Cyan pill title: FEE INFORMATION                                        */}
      {/* - Left column: Student details + Amount Due                               */}
      {/* - Right column: Exact student photo + Principal Signature                 */}
      {/* - Bottom green footer bar with Contact Number and Email                   */}
      {/* ========================================================================= */}
      <div
        id="student-fee-information-card"
        className="w-full max-w-2xl bg-white rounded-xl border border-gray-300 shadow-md p-2 sm:p-2.5 print:shadow-none print:border-none print:m-0 print:p-0"
      >
        {/* Red Outer Framing Border matching the reference card */}
        <div className="border-2 border-red-600 rounded-lg overflow-hidden bg-white flex flex-col">
          {/* Card Header (Cyan / Sky-Blue Banner) */}
          <div className="bg-[#48cae4] border-b-2 border-red-600 px-2 sm:px-3 py-2 flex items-center gap-2 sm:gap-3">
            {/* School Emblem in White Box with Red Border */}
            <div
              id="card-school-logo-container"
              className="w-12 h-12 sm:w-16 sm:h-16 bg-white border border-red-600 rounded-xs p-1 flex items-center justify-center shrink-0 shadow-xs"
            >
              <img
                id="card-school-logo"
                src={logoSrc}
                alt="Kashinath Alauddin High School and College Emblem"
                className="w-full h-full object-contain"
                onError={handleLogoError}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* School Name & Address Header */}
            <div className="flex-1 min-w-0">
              <h2
                id="card-school-name"
                className="font-serif font-bold text-sm sm:text-lg text-[#0a3871] leading-tight tracking-tight"
              >
                Kashinath Alauddin High School and College
              </h2>
              <p
                id="card-school-address"
                className="font-sans font-bold text-[11px] sm:text-xs text-[#0a3871] mt-0.5 lining-nums tracking-normal"
              >
                Court Road, Moulvibazar-3200, EIIN: 129698
              </p>
            </div>
          </div>

          {/* Card Main Body Area */}
          <div className="p-3 sm:p-4 bg-white">
            {/* Centered Pill Badge Title: FEE INFORMATION */}
            <div className="flex justify-center mb-3 sm:mb-4">
              <span
                id="card-main-title"
                className="inline-block bg-[#0077b6] text-white font-serif font-bold text-xs sm:text-sm px-6 sm:px-8 py-1 rounded-full shadow-xs tracking-wider uppercase border border-sky-600"
              >
                FEE INFORMATION
              </span>
            </div>

            {/* Two-Column Layout: Details (Left) + Photo & Signature (Right) */}
            <div className="grid grid-cols-12 gap-3 sm:gap-4 items-start">
              {/* Left Column: Student Details */}
              <div id="card-student-details" className="col-span-7 sm:col-span-8 space-y-1.5 sm:space-y-2">
                <div className="flex items-baseline text-xs sm:text-sm">
                  <span className="w-20 sm:w-24 font-bold text-gray-900 shrink-0">Name</span>
                  <span className="font-bold text-gray-900 mr-2 sm:mr-3">:</span>
                  <span className="font-bold text-gray-900 text-sm sm:text-base">
                    {data.name}
                  </span>
                </div>

                <div className="flex items-baseline text-xs sm:text-sm">
                  <span className="w-20 sm:w-24 font-bold text-gray-900 shrink-0">Class</span>
                  <span className="font-bold text-gray-900 mr-2 sm:mr-3">:</span>
                  <span className="font-bold text-gray-900">
                    {data.class}
                  </span>
                </div>

                <div className="flex items-baseline text-xs sm:text-sm">
                  <span className="w-20 sm:w-24 font-bold text-gray-900 shrink-0">Roll No</span>
                  <span className="font-bold text-gray-900 mr-2 sm:mr-3">:</span>
                  <span className="font-bold text-gray-900">
                    {data.rollNo}
                  </span>
                </div>

                <div className="flex items-baseline text-xs sm:text-sm">
                  <span className="w-20 sm:w-24 font-bold text-gray-900 shrink-0">Group</span>
                  <span className="font-bold text-gray-900 mr-2 sm:mr-3">:</span>
                  <span className="font-bold text-gray-900">
                    {data.group}
                  </span>
                </div>

                <div className="flex items-baseline text-xs sm:text-sm">
                  <span className="w-20 sm:w-24 font-bold text-gray-900 shrink-0">Session</span>
                  <span className="font-bold text-gray-900 mr-2 sm:mr-3">:</span>
                  <span className="font-bold text-gray-900">
                    {data.session}
                  </span>
                </div>

                {/* Amount Due (Replaces Expiry Date) */}
                <div className="flex items-baseline text-xs sm:text-sm pt-1 border-t border-dashed border-gray-200">
                  <span className="w-20 sm:w-24 font-bold text-gray-900 shrink-0">Amount Due</span>
                  <span className="font-bold text-gray-900 mr-2 sm:mr-3">:</span>
                  <span className="font-bold text-red-700 text-sm sm:text-base bg-red-50 border border-red-200 px-2 py-0.5 rounded lining-nums">
                    {data.amountDue}
                  </span>
                </div>
              </div>

                {/* Right Column: Student Photograph */}
              <div className="col-span-5 sm:col-span-4 flex flex-col items-center justify-start">
                <div
                  id="card-student-photo-container"
                  className="w-28 sm:w-32 h-36 sm:h-40 bg-white border border-gray-400 rounded-xs overflow-hidden shadow-xs p-0.5"
                >
                  <img
                    id="card-student-photo"
                    src={photoSrc}
                    alt={`Photograph of ${data.name}`}
                    className="w-full h-full object-cover object-top"
                    onError={handlePhotoError}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Green Footer Banner */}
          <div
            id="card-footer-banner"
            className="bg-[#107c41] border-t-2 border-red-600 px-3 py-1.5 text-center text-white text-[11px] sm:text-xs font-medium"
          >
            <span>Contract Number: 01921-595045</span>
            <span className="mx-2 hidden sm:inline">,</span>
            <span className="block sm:inline">Email: kashinathschool@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

