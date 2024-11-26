export type Category = {
  id: string;
  description: string;
  type: 'INCOME' | 'EXPENSE';
  parentId?: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type PaymentMethod = {
  id: string;
  description: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Transaction = {
  id: string;
  date: Date;
  effectiveDate?: Date;
  amount: number;
  categoryId: string;
  paymentMethodId: string;
  description: string;
  status: 'PENDING' | 'COMPLETED';
  type: 'INCOME' | 'EXPENSE';
  recurrent: boolean;
  recurrenceInfo?: {
    frequency: 'MONTHLY' | 'WEEKLY' | 'YEARLY';
    endDate?: Date;
  };
  attachments: string[];
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
};