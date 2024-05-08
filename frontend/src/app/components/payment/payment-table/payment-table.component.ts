import {Component, OnInit} from '@angular/core';
import {Payment} from "../../../models/payment.model";
import {PaymentService} from "../../../services/payment.service";

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.css']
})
export class PaymentTableComponent implements OnInit{
  payments: Payment[] = [];

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
     this.paymentService.getPayments().subscribe((payments: Payment[]) => {
      this.payments = payments;
    });
  }


  deletePayment(id: number) {

  }
}
