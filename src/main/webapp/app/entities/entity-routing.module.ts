import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        data: { pageTitle: 'Products' },
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
      },
      {
        path: 'product-category',
        data: { pageTitle: 'ProductCategories' },
        loadChildren: () => import('./product-category/product-category.module').then(m => m.ProductCategoryModule),
      },
      {
        path: 'customer',
        data: { pageTitle: 'Customers' },
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
      },
      {
        path: 'product-order',
        data: { pageTitle: 'ProductOrders' },
        loadChildren: () => import('./product-order/product-order.module').then(m => m.ProductOrderModule),
      },
      {
        path: 'order-item',
        data: { pageTitle: 'OrderItems' },
        loadChildren: () => import('./order-item/order-item.module').then(m => m.OrderItemModule),
      },
      {
        path: 'invoice',
        data: { pageTitle: 'Invoices' },
        loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule),
      },
      {
        path: 'shipment',
        data: { pageTitle: 'Shipments' },
        loadChildren: () => import('./shipment/shipment.module').then(m => m.ShipmentModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
