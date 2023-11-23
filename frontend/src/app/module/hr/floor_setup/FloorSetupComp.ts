import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { RxFormBuilder } from "@rxweb/reactive-form-validators";
import { Observable } from "rxjs";
import { FloorController } from "src/app/controller/FloorController";
import { FloorSearchDto } from "src/app/dto/request/FloorSearchDto";
import { Floor } from "src/app/entity/Floor";

@Component({
  selector: 'FloorSetupComp',
  templateUrl: './FloorSetupComp.html',
  styleUrls: ['./FloorSetupComp.scss'],
  //standalone: true
})
export class FloorSetupComp implements OnInit {

  breadCrumbItems!: Array<{}>;
  title!: string;

  floorFg: FormGroup = this.rxFormBuilder.formGroup(Floor);
  floorList$: Observable<Array<Floor>> = new Observable<Array<Floor>>();

  constructor(
    public floorController: FloorController,
    public rxFormBuilder: RxFormBuilder
  ) { }

  ngOnInit() {
    this.search();
    this.breadCrumbItems = [{ label: 'Floor' }, { label: 'Floor', active: true }];
  }

  save() {
    this.floorController.save(this.floorFg.value).subscribe((e) => {this.search(); });
  }

  onUpdateClick(floor: Floor) {
    this.floorFg.patchValue(floor);
    //this.floorFg.patchValue({id:floor.id,name:floor.name});
    console.log(this.floorFg.value);
  }

  update() {
    this.floorController.update(this.floorFg.value).subscribe((e) => {this.search(); });
  }

  delete(floor: Floor) {
    //console.log(floor);
    this.floorController.delete(floor).subscribe((e) => { this.search(); });
  }

  search() {
    this.floorList$ = this.floorController.search(new FloorSearchDto({ "idList": [] }));
    /*.subscribe((e:Array<Floor>)=>{
    console.log(e)
  })*/
  }









}