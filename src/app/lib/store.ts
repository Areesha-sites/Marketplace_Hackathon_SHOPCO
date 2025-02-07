import { create } from 'zustand';

interface BillingData {
  name: string;
  email: string;
  address: string;
}

interface ShippingData {
  name: string;
  address: string;
}

interface PaymentData {
  cardNumber: string;
  expiry: string;
}

interface CheckoutState {
  step: number; 
  billing: BillingData;  
  shipping: ShippingData;  
  payment: PaymentData;  
  setStep: (step: number) => void; 
  setBilling: (data: Partial<BillingData>) => void;  
  setShipping: (data: Partial<ShippingData>) => void; 
  setPayment: (data: Partial<PaymentData>) => void; 
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  step: 1, 
  billing: { name: '', email: '', address: '' }, 
  shipping: { name: '', address: '' }, 
  payment: { cardNumber: '', expiry: '' },  
  setStep: (step) => set({ step }), 
  setBilling: (data) => set((state) => ({ billing: { ...state.billing, ...data } })), 
  setShipping: (data) => set((state) => ({ shipping: { ...state.shipping, ...data } })),  
  setPayment: (data) => set((state) => ({ payment: { ...state.payment, ...data } })),  
}));
