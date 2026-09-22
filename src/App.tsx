/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { ResultSearchForm } from './components/ResultSearchForm';
import { ResultDisplay } from './components/ResultDisplay';
import { Footer } from './components/Footer';
import { fetchStudentResult } from './services/resultService';
import { SearchFormData, StudentFeeData } from './types';

export default function App() {
  const [feeData, setFeeData] = useState<StudentFeeData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (formData: SearchFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Calls our structured service function
      // (easily connectable to real backend in src/services/resultService.ts)
      const data = await fetchStudentResult(formData.studentId, formData.session);
      setFeeData(data);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'Unable to retrieve fee information. Please try again.';
      setError(errorMessage);
      setFeeData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFeeData(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Banner Header with Green Theme & Replaceable Logo */}
      <Header />

      {/* Main Centered Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8 sm:py-12 flex flex-col justify-start">
        {/* Form Container */}
        <div className="w-full">
          <ResultSearchForm
            onSearch={handleSearch}
            isLoading={isLoading}
            onReset={handleReset}
            hasResult={Boolean(feeData || error)}
          />

          {/* Clean Fee / Status Display Area */}
          <ResultDisplay data={feeData} error={error} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
