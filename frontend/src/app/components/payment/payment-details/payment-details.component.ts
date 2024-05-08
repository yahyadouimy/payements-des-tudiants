import {Component, OnInit} from '@angular/core';
import {Payment} from "../../../models/payment.model";
import {ActivatedRoute} from "@angular/router";
import {PaymentService} from "../../../services/payment.service";

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit{
  payment: Payment = {
    id: 0,
    code: '',
    date: '',
    type: '',
    status: '',
    file: '',
    student: null
  };
  constructor(private route: ActivatedRoute,
              private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.getPaymentDetails();
  }

  getPaymentDetails(): void {
    this.paymentService.getPaymentById(1)
      .subscribe(payment => {
        this.payment = payment;
      });
  }
}
