import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentUpdateComponent } from './payment-update.component';

describe('PaymentUpdateComponent', () => {
  let component: PaymentUpdateComponent;
  let fixture: ComponentFixture<PaymentUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentUpdateComponent]
    });
    fixture = TestBed.createComponent(PaymentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
