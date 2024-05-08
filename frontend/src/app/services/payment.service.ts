import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Payment } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private payments: any[] = [
    {
      id: 1,
      code: "CODE1",
      date: "2024-04-25T11:56:24.931+00:00",
      type: "CASH",
      status: "CREATED",
      file: "path/to/file1.pdf",
      student:1
    },
    {
      id: 2,
      code: "CODE2",
      date: "2024-04-25T11:56:24.931+00:00",
      type: "CHECK",
      status: "VALIDATED",
      file: "path/to/file2.pdf",
      studentId: 2
    }
  ];

  constructor() { }

  getPayments(): Observable<Payment[]> {
    return of(this.payments);
  }

  getPaymentById(id: number): Observable<Payment> {
    const payment = this.payments.find(p => p.id === id);
    return of(payment);
  }

  createPayment(payment: Payment): Observable<Payment> {
    this.payments.push(payment);
    return of(payment);
  }

  updatePayment(id: number, updatedPayment: Payment): Observable<Payment> {
    const index = this.payments.findIndex(p => p.id === id);
    if (index !== -1) {
      this.payments[index] = updatedPayment;
      return of(updatedPayment);
    }
    return of();
  }

  deletePayment(id: number): Observable<boolean> {
    const index = this.payments.findIndex(p => p.id === id);
    if (index !== -1) {
      this.payments.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
