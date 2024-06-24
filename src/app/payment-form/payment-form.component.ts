// src/app/payment-form/payment-form.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockPaymentService } from '@app/mock-payment.service';
import { Payment } from '../models/payment.model';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  @Input() payment: Payment | null = null;
  @Output() formSubmit = new EventEmitter<void>();
  paymentForm!: FormGroup;

  constructor(private fb: FormBuilder, private paymentService: MockPaymentService) {}

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      creditorAccount: [this.payment?.creditorAccount || '', [Validators.required, Validators.maxLength(34)]],
      debtorAccount: [this.payment?.debtorAccount || '', [Validators.required, Validators.maxLength(34)]],
      amount: [this.payment?.amount || '', [Validators.required]],
      currency: [this.payment?.currency || '', [Validators.required, Validators.maxLength(3)]],
      date: [this.payment?.date || '', [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.paymentForm.valid) {
      const formValue = this.paymentForm.value;
      if (this.payment) {
        this.paymentService.updatePayment(this.payment.id, formValue).subscribe(() => {
          this.formSubmit.emit();
        });
      } else {
        const newPayment: Payment = {
          id: Math.random().toString(36).substr(2, 9),  // Generate a random ID
          ...formValue
        };
        this.paymentService.createPayment(newPayment).subscribe(() => {
          this.formSubmit.emit();
        });
      }
      this.paymentForm.reset();
    }
  }
}
