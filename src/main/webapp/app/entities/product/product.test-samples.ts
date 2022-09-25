import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 77672,
  name: 'Customer-focused',
  price: 96307,
};

export const sampleWithPartialData: IProduct = {
  id: 94362,
  name: 'SSL',
  description: 'Networked',
  price: 40139,
};

export const sampleWithFullData: IProduct = {
  id: 54568,
  name: 'recontextualize',
  description: 'Health calculate neural',
  price: 3502,
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithNewData: NewProduct = {
  name: 'experiences Garden Customer-focused',
  price: 58283,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
