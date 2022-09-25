import dayjs from 'dayjs/esm';

import { InvoiceStatus } from 'app/entities/enumerations/invoice-status.model';
import { PaymentMethod } from 'app/entities/enumerations/payment-method.model';

import { IInvoice, NewInvoice } from './invoice.model';

export const sampleWithRequiredData: IInvoice = {
  id: 91509,
  date: dayjs('2022-09-25T08:26'),
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CREDIT_CARD'],
  paymentDate: dayjs('2022-09-25T20:23'),
  paymentAmount: 24487,
};

export const sampleWithPartialData: IInvoice = {
  id: 45358,
  date: dayjs('2022-09-25T18:48'),
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2022-09-25T12:27'),
  paymentAmount: 13016,
};

export const sampleWithFullData: IInvoice = {
  id: 55368,
  date: dayjs('2022-09-25T15:35'),
  details: 'Tugrik Customer schemas',
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2022-09-25T01:53'),
  paymentAmount: 37477,
};

export const sampleWithNewData: NewInvoice = {
  date: dayjs('2022-09-25T16:25'),
  status: InvoiceStatus['CANCELLED'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2022-09-25T05:47'),
  paymentAmount: 30708,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
