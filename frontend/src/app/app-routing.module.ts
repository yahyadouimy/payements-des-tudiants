import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {StudentComponent} from "./components/student/student.component";
import {StudentCreatComponent} from "./components/student/student-creat/student-creat.component";
import {StudentUpdateComponent} from "./components/student/student-update/student-update.component";
import {StudentDetailsComponent} from "./components/student/student-details/student-details.component";
import {PaymentComponent} from "./components/payment/payment.component";
import {PaymentCreatComponent} from "./components/payment/payment-creat/payment-creat.component";
import {PaymentUpdateComponent} from "./components/payment/payment-update/payment-update.component";
import {PaymentDetailsComponent} from "./components/payment/payment-details/payment-details.component";
import {PaymentTableComponent} from "./components/payment/payment-table/payment-table.component";
import {PaymentListComponent} from "./components/payment/payment-list/payment-list.component";
import {StudentListComponent} from "./components/student/student-list/student-list.component";



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"student",component:StudentComponent ,children:
      [
        {path:"",component:StudentListComponent},
        {path:"creat",component:StudentCreatComponent},
        {path:"edit",component:StudentUpdateComponent},
        {path:"details",component:StudentDetailsComponent},
      ]
  },
  {path:"payment",component:PaymentComponent ,children:
      [
        {path:"",component:PaymentListComponent},
        {path:"creat",component:PaymentCreatComponent},
        {path:"edit",component:PaymentUpdateComponent},
        {path:"details",component:PaymentDetailsComponent},
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
