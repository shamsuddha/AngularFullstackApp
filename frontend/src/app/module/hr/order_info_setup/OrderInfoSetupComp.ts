import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";


@Component({
  selector: 'OrderInfoSetupComp',
  templateUrl: './OrderInfoSetupComp.html',
  styleUrls: ['./OrderInfoSetupComp.scss'],
  //standalone: true
})
export class OrderInfoSetupComp{
orderInfoFg: FormGroup<any>;
}
