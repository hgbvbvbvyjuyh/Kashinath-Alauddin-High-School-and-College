import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="w-full mt-auto py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-100 rounded-md border border-gray-200 py-4 px-6 text-center text-xs text-gray-600 shadow-2xs">
          <p className="font-semibold text-gray-700">
            © Kashinath Alauddin High School and College
          </p>
          <p className="text-[11px] text-gray-500 mt-1">
            Moulvibazar, Bangladesh • Student Fee Checking Portal
          </p>
        </div>
      </div>
    </footer>
  );
};
