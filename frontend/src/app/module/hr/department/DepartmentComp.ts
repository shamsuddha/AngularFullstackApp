import { Component } from "@angular/core";


@Component({
  selector: 'DepartmentComp',
  templateUrl: './DepartmentComp.html',
  styleUrls: ['./DepartmentComp.scss'],
  //standalone: true
})
export class DepartmentComp{
 // bread crumb items
 breadCrumbItems!: Array<{}>;
 title!: string;

 ngOnInit() {  
  /**
   * BreadCrumb
   */
  this.breadCrumbItems = [{ label: 'User' }, { label: 'User', active: true }];
}

}
