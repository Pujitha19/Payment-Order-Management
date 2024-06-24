// src/app/payment-list/payment-list.component.ts
import { Component, OnInit } from '@angular/core';
import { MockPaymentService } from '@app/mock-payment.service';
import { Payment } from '../models/payment.model';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  payments: Payment[] = [];

  constructor(private paymentService: MockPaymentService) {}

  ngOnInit(): void {
    this.fetchPayments();
  }

  fetchPayments(): void {
    this.paymentService.getPayments().subscribe((payments) => {
      this.payments = payments;
    });
  }

  deletePayment(id: string): void {
    this.paymentService.deletePayment(id).subscribe(() => {
      this.fetchPayments();
    });
  }
}
