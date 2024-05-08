import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PaymentService} from "../../../services/payment.service";
import {Payment} from "../../../models/payment.model";

@Component({
  selector: 'app-payment-update',
  templateUrl: './payment-update.component.html',
  styleUrls: ['./payment-update.component.css']
})
export class PaymentUpdateComponent implements OnInit {
  payment: Payment = {
    id: 0,
    code: '',
    date: '',
    type: '',
    status: '',
    file: '',
    student: null
  };

  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paymentService.getPaymentById(1)
      .subscribe(payment => {
        this.payment = payment;
      });
  }

  updatePayment(): void {
    this.paymentService.updatePayment(this.payment.id,this.payment)
      .subscribe(updatedPayment => {
        if (updatedPayment) {
          console.log('Payment updated successfully:', updatedPayment);
          this.router.navigate(['/payments']);
        } else {
          console.error('Failed to update payment');
        }
      });
  }
}
