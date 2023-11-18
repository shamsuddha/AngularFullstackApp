import {Component} from "@angular/core";
import {AbstractControl, FormArray, FormGroup} from "@angular/forms";
import {OrderInfo} from "../../../entity/OrderInfo";
import {toFaGfn} from "../../../../util/MiscUtil";
import {RxFormBuilder} from '@rxweb/reactive-form-validators';
import {OrderInfoDetail} from "../../../entity/OrderInfoDetail";
import { Observable } from 'rxjs';

@Component({
  selector: 'OrderInfoSetupComp',
  templateUrl: './OrderInfoSetupComp.html',
  styleUrls: ['./OrderInfoSetupComp.scss'],
})
export class OrderInfoSetupComp {

  orderInfoFg: FormGroup = this.rxFormBuilder.formGroup(OrderInfo);
  toFaGfn = toFaGfn;
  orderInfoDetailList$: Observable<Array<OrderInfoDetail>> = new Observable<Array<OrderInfoDetail>>();

  constructor(public rxFormBuilder: RxFormBuilder) {
  }

  addOrderInfoDetail() {
    (<FormArray>this.orderInfoFg.get('orderInfoDetailList'))
      .push(this.rxFormBuilder.formGroup(OrderInfoDetail));
  }

  updateOrderWithDetailList() {
    this.orderInfoFg.patchValue({code: 'code 1',});
    [1, 2, 3].forEach((e, i) => {
      (<FormArray>this.orderInfoFg.get('vehicleList'))
        .push(this.rxFormBuilder.formGroup(new OrderInfoDetail({
          id: Math.random() * 999
        })));
    })
  }

  delete(fg: AbstractControl, index: number) {
    console.log((<FormGroup>fg).value)
  }

  save() {
    console.log(this.orderInfoFg.value)
  }

  onUpdateClick(orderInfoDetail: OrderInfoDetail) {
    console.log(orderInfoDetail)
  }

  search() {
    const orderInfoDetailList: Array<OrderInfoDetail> = [
      new OrderInfoDetail({id: 11, code: 'code 11', orderInfo: new OrderInfo({id: 1, code: 'code 1'})}),
      new OrderInfoDetail({id: 12, code: 'code 12', orderInfo: new OrderInfo({id: 1, code: 'code 1'})})
    ];
    this.orderInfoDetailList$ = new Observable((subscriber: any) => {
      subscriber.next(orderInfoDetailList);
    });
  }
}
