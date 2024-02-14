import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'FilterComp',
  templateUrl: './FilterComp.html',
  styleUrls: ['./FilterComp.scss']
})
export class FilterComp {


  @Output()
  filterEvent: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  allCount: number = 0;
  @Input()
  inStockCount: number = 0;
  @Input()
  outOfStockCount: number = 0;

  selectedRadioButton: string = "all";

  filterChangeFunctionRaised(event: any) {
    console.log(this.selectedRadioButton);
    this.filterEvent.emit(this.selectedRadioButton);
  }


}