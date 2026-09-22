import { StudentFeeData } from '../types';

/**
 * ============================================================================
 * CONFIGURATION: SESSIONS LIST
 * You can easily add, remove, or modify available sessions here.
 * ============================================================================
 */
export const AVAILABLE_SESSIONS = [
  '2024-2025',
  '2023-2024',
  '2022-2023',
  '2021-2022',
] as const;

/**
 * ============================================================================
 * BACKEND / API INTEGRATION HOOK
 * ============================================================================
 * When your backend API is ready:
 * 1. Replace the mock return below with a real fetch() or axios request.
 * 2. Example:
 *    const response = await fetch(`/api/fees?studentId=${encodeURIComponent(studentId)}&session=${encodeURIComponent(session)}`);
 *    if (!response.ok) throw new Error('Fee record not found or server error');
 *    return await response.json();
 * ============================================================================
 */
export async function fetchStudentResult(
  studentId: string,
  session: string
): Promise<StudentFeeData> {
  // Simulate a brief network latency for realistic feel (250ms)
  await new Promise((resolve) => setTimeout(resolve, 250));

  const cleanId = studentId.trim();

  // For this demonstration, there is ONLY ONE student record.
  // Treat "129698" as the search/lookup value for this specific student.
  if (cleanId !== '129698') {
    throw new Error(
      'No student fee record found for the entered ID. For this demonstration, please enter search value: 129698.'
    );
  }

  // Configured fee breakdown for Tammir Miah
  const feeItems = [
    { code: 'F-101', description: 'Monthly Tuition Fee (Term 1 & 2)', status: 'Paid', amount: 3000 },
    { code: 'F-102', description: 'Annual Session & Development Fee', status: 'Paid', amount: 1500 },
    { code: 'F-103', description: 'ICT & Smart Classroom Charges', status: 'Paid', amount: 550 },
    { code: 'F-104', description: 'Current Term Tuition & Examination Fee', status: 'Due', amount: 15500 },
  ];

  return {
    studentId: '129698',
    name: 'Tammir Miah',
    class: 'XI-XII',
    rollNo: '87',
    group: 'Humanities',
    session: '2024-2025',
    amountDue: '৳ 15,500',
    photoUrl: '/tammir.jpg',
    feeType: 'General Academic & Examination Fees',
    totalAmount: 20550,
    paidAmount: 5050,
    paymentStatus: 'Due',
    statementDate: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    items: feeItems,
    remarks: 'Current term fee due. Please clear at the college accounts section.',
  };
}

