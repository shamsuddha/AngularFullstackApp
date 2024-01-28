import { Component } from "@angular/core";

@Component({
  selector: 'CustomerComp',
  templateUrl: './CustomerComp.html',
  styleUrls: ['./CustomerComp.scss']
})

export class CustomerComp
{

  totalItems = 64;
  currentPage = 1;

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }




}