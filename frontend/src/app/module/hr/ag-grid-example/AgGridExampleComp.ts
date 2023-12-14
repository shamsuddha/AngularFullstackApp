import { Component, ViewChild } from "@angular/core";
import { Observable, of } from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CellClickedEvent, ColDef, GridReadyEvent} from 'ag-grid-community';
import {AgGridAngular, AgGridModule} from "ag-grid-angular";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

@Component({
  selector: 'AgGridExampleComp',
  templateUrl: './AgGridExampleComp.html',
  styleUrls: ['./AgGridExampleComp.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule,
    NgSelectModule, FormsModule, RxReactiveFormsModule, ReactiveFormsModule, 
    AgGridModule],
})
export class AgGridExampleComp {

  constructor(
    private http: HttpClient
  ) {}

  public columnDefs: ColDef[] = [
    {field: 'make'},
    {field: 'model'},
    {field: 'price'}
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  public rowData$!: Observable<any[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  onGridReady(params: GridReadyEvent) {
    console.log("calling")
    //this.rowData$ = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
    this.rowData$ = of([
      { "make": "Porsche", "model": "Boxter", "price": 72000 },
      { "make": "Ford", "model": "Mondeo", "price": 32000 },
      { "make": "Ford", "model": "Mondeo", "price": 32000 },
      { "make": "Toyota", "model": "Celica", "price": 35000 },
      { "make": "Toyota", "model": "Celica", "price": 35000 },
      { "make": "Porsche", "model": "Boxter", "price": 72000 },
      { "make": "Toyota", "model": "Celica", "price": 35000 },
      { "make": "Toyota", "model": "Celica", "price": 35000 },
      { "make": "Porsche", "model": "Boxter", "price": 72000 },
      { "make": "Porsche", "model": "Boxter", "price": 72000 },
      { "make": "Porsche", "model": "Boxter", "price": 72000 }])
  }

  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

}