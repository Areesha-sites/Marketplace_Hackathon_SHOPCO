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
  step: number;  // Current step in the checkout process
  billing: BillingData;  // Billing information
  shipping: ShippingData;  // Shipping information
  payment: PaymentData;  // Payment information
  setStep: (step: number) => void;  // Set the current step
  setBilling: (data: Partial<BillingData>) => void;  // Update billing data
  setShipping: (data: Partial<ShippingData>) => void;  // Update shipping data
  setPayment: (data: Partial<PaymentData>) => void;  // Update payment data
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  step: 1,  // Default to step 1 (Shipping)
  billing: { name: '', email: '', address: '' },  // Default billing info
  shipping: { name: '', address: '' },  // Default shipping info
  payment: { cardNumber: '', expiry: '' },  // Default payment info
  setStep: (step) => set({ step }),  // Function to update step
  setBilling: (data) => set((state) => ({ billing: { ...state.billing, ...data } })),  // Function to update billing data
  setShipping: (data) => set((state) => ({ shipping: { ...state.shipping, ...data } })),  // Function to update shipping data
  setPayment: (data) => set((state) => ({ payment: { ...state.payment, ...data } })),  // Function to update payment data
}));
