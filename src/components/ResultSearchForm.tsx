import React, { useState } from 'react';
import { Search, AlertCircle, RefreshCw } from 'lucide-react';
import { AVAILABLE_SESSIONS } from '../services/resultService';
import { SearchFormData, FormErrors } from '../types';

interface ResultSearchFormProps {
  onSearch: (data: SearchFormData) => void;
  isLoading: boolean;
  onReset?: () => void;
  hasResult?: boolean;
}

export const ResultSearchForm: React.FC<ResultSearchFormProps> = ({
  onSearch,
  isLoading,
  onReset,
  hasResult,
}) => {
  const [studentId, setStudentId] = useState('');
  const [session, setSession] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!studentId.trim()) {
      newErrors.studentId = 'Please enter search value (e.g. 129698).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSearch({
        studentId: studentId.trim(),
        session: session.trim() || '2024-2025',
      });
    }
  };

  const handleClear = () => {
    setStudentId('');
    setSession('');
    setErrors({});
    if (onReset) {
      onReset();
    }
  };

  return (
    <div
      id="search-card-container"
      className="bg-white rounded-md border border-gray-300 shadow-xs overflow-hidden transition-all duration-200"
    >
      {/* Instructional Bar Header (inspired by educational portal layout) */}
      <div className="bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm font-medium text-gray-700">
        Please provide the following information to view result
      </div>

      <form id="result-search-form" onSubmit={handleSubmit} className="p-6 sm:p-8">
        <div className="space-y-5">
          {/* Field 1: Student ID */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 sm:items-center">
            <label
              htmlFor="student-id-input"
              className="sm:col-span-4 text-sm font-semibold text-gray-800"
            >
              Student ID <span className="text-red-600 font-bold">*</span>
            </label>
            <div className="sm:col-span-8">
              <input
                id="student-id-input"
                type="text"
                value={studentId}
                onChange={(e) => {
                  setStudentId(e.target.value);
                  if (errors.studentId) setErrors((prev) => ({ ...prev, studentId: undefined }));
                }}
                placeholder="Enter Student ID"
                className={`w-full px-3.5 py-2.5 text-sm rounded border bg-white text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600/30 ${
                  errors.studentId
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-emerald-600'
                }`}
                disabled={isLoading}
                autoComplete="off"
              />
              {errors.studentId && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.studentId}
                </p>
              )}
            </div>
          </div>

          {/* Field 2: Session */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 sm:items-center">
            <label
              htmlFor="session-select"
              className="sm:col-span-4 text-sm font-semibold text-gray-800"
            >
              Session <span className="text-red-600 font-bold">*</span>
            </label>
            <div className="sm:col-span-8">
              <select
                id="session-select"
                value={session}
                onChange={(e) => {
                  setSession(e.target.value);
                  if (errors.session) setErrors((prev) => ({ ...prev, session: undefined }));
                }}
                className={`w-full px-3.5 py-2.5 text-sm rounded border bg-white text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600/30 ${
                  errors.session
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-emerald-600'
                }`}
                disabled={isLoading}
              >
                <option value="">Select One</option>
                {AVAILABLE_SESSIONS.map((sess) => (
                  <option key={sess} value={sess}>
                    {sess}
                  </option>
                ))}
              </select>
              {errors.session && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.session}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-5 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-end gap-3">
          {hasResult && (
            <button
              id="reset-search-btn"
              type="button"
              onClick={handleClear}
              className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded border border-gray-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              Reset
            </button>
          )}

          <button
            id="view-result-btn"
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto min-w-[140px] px-6 py-2.5 text-sm font-bold text-white bg-[#107c41] hover:bg-[#0c6133] active:bg-[#094d27] rounded shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Searching...
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                View Result
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
