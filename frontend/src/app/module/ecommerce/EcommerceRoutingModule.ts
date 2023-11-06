import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandComp } from './brand/BrandComp';
import { CategoryComp } from './category/CategoryComp';
import { ProductComp } from './product/ProductComp';
import { OrderInfoComp } from './order_info/OrderInfoComp';
import { OrderDetailComp } from './order_detail/OrderDetailComp';

const routes: Routes = [
  {
    path: 'brand',
    component: BrandComp
  },
  {
    path: 'category',
    component: CategoryComp
  },
  {
    path: 'product',
    component: ProductComp
  },

  {
    path: 'order_info',
    component: OrderInfoComp
  },
  {
    path: 'order_detail',
    component: OrderDetailComp
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EcommerceRoutingModule { }
