/**
 * Data types for Kashinath Alauddin High School and College Result Portal
 */

export interface SessionOption {
  value: string;
  label: string;
}

export interface FeeItem {
  code: string;
  description: string;
  status: string;
  amount: number;
}

export interface StudentFeeData {
  studentId: string;
  name: string;
  class: string;
  rollNo: string;
  group: string;
  session: string;
  amountDue: string;
  photoUrl: string;
  feeType?: string;
  totalAmount?: number;
  paidAmount?: number;
  paymentStatus?: 'Paid' | 'Partial' | 'Due';
  statementDate?: string;
  items?: FeeItem[];
  remarks?: string;
}

export interface SearchFormData {
  studentId: string;
  session: string;
}

export interface FormErrors {
  studentId?: string;
  session?: string;
}

