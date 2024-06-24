// src/app/services/mock-payment.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Payment } from './models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class MockPaymentService {
  private payments: Payment[] = [
    {
      id: '1',
      creditorAccount: 'Creditor1',
      debtorAccount: 'Debtor1',
      amount: 100.50,
      currency: 'USD',
      date: '01/01/2024'
    },
    {
      id: '2',
      creditorAccount: 'Creditor2',
      debtorAccount: 'Debtor2',
      amount: 200.75,
      currency: 'EUR',
      date: '02/02/2024'
    }
  ];

  getPayments(): Observable<Payment[]> {
    return of(this.payments);
  }

  createPayment(payment: Payment): Observable<Payment> {
    this.payments.push(payment);
    return of(payment);
  }

  updatePayment(id: string, payment: Partial<Payment>): Observable<Payment> {
    const index = this.payments.findIndex(p => p.id === id);
    if (index !== -1) {
      this.payments[index] = { ...this.payments[index], ...payment };
    }
    return of(this.payments[index]);
  }

  deletePayment(id: string): Observable<void> {
    this.payments = this.payments.filter(p => p.id !== id);
    return of();
  }
}
