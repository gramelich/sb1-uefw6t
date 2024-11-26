import { create } from 'zustand';
import { Category, PaymentMethod, Transaction } from '../types';

interface Store {
  categories: Category[];
  paymentMethods: PaymentMethod[];
  transactions: Transaction[];
  addCategory: (category: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>) => void;
  addPaymentMethod: (method: Omit<PaymentMethod, 'id' | 'createdAt' | 'updatedAt'>) => void;
  addTransaction: (transaction: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateCategory: (id: string, category: Partial<Category>) => void;
  updatePaymentMethod: (id: string, method: Partial<PaymentMethod>) => void;
  updateTransaction: (id: string, transaction: Partial<Transaction>) => void;
}

export const useStore = create<Store>((set) => ({
  categories: [],
  paymentMethods: [],
  transactions: [],
  
  addCategory: (category) =>
    set((state) => ({
      categories: [
        ...state.categories,
        {
          ...category,
          id: Math.random().toString(36).substring(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    })),

  addPaymentMethod: (method) =>
    set((state) => ({
      paymentMethods: [
        ...state.paymentMethods,
        {
          ...method,
          id: Math.random().toString(36).substring(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    })),

  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [
        ...state.transactions,
        {
          ...transaction,
          id: Math.random().toString(36).substring(2),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    })),

  updateCategory: (id, category) =>
    set((state) => ({
      categories: state.categories.map((c) =>
        c.id === id ? { ...c, ...category, updatedAt: new Date() } : c
      ),
    })),

  updatePaymentMethod: (id, method) =>
    set((state) => ({
      paymentMethods: state.paymentMethods.map((m) =>
        m.id === id ? { ...m, ...method, updatedAt: new Date() } : m
      ),
    })),

  updateTransaction: (id, transaction) =>
    set((state) => ({
      transactions: state.transactions.map((t) =>
        t.id === id ? { ...t, ...transaction, updatedAt: new Date() } : t
      ),
    })),
}));