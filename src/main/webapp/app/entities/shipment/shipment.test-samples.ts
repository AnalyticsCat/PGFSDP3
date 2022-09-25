import dayjs from 'dayjs/esm';

import { IShipment, NewShipment } from './shipment.model';

export const sampleWithRequiredData: IShipment = {
  id: 17812,
  date: dayjs('2022-09-25T00:57'),
};

export const sampleWithPartialData: IShipment = {
  id: 50749,
  date: dayjs('2022-09-25T12:29'),
  details: 'JBOD mission-critical strategize',
};

export const sampleWithFullData: IShipment = {
  id: 94519,
  trackingCode: 'Points Dynamic Plains',
  date: dayjs('2022-09-25T04:37'),
  details: 'coherent utilize regional',
};

export const sampleWithNewData: NewShipment = {
  date: dayjs('2022-09-25T16:08'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
