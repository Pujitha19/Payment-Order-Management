export interface Payment {
    id: string;
    creditorAccount: string;
    debtorAccount: string;
    amount: number;
    currency: string;
    date: string;  // Format: DDMMYYYY
  }
  