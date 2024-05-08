import { Component } from '@angular/core';
import {Payment} from "../../../models/payment.model";
import {PaymentService} from "../../../services/payment.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment-creat',
  templateUrl: './payment-creat.component.html',
  styleUrls: ['./payment-creat.component.css']
})
export class PaymentCreatComponent {
  payment: Payment = {
    id: 0,
    code: '',
    date: '',
    type: '',
    status: '',
    file: '',
    student: null
  };

  constructor(private paymentService: PaymentService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.paymentService.createPayment(this.payment).subscribe(() => {
      this.router.navigate(['/payments']);
    });
  }
}
