import {Payment} from "./payment.model";

export interface Student {
  id: number;
  code: string | null;
  firstName: string;
  lastName: string;
  email: string;
  major: string;
  payments: Payment[] | null;
}
