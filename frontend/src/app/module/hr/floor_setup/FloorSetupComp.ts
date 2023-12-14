import {Component, OnInit} from "@angular/core";
import {AbstractControl, FormArray, FormGroup} from "@angular/forms";
import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {Observable} from "rxjs";
import {toFaGfn} from "../../../../util/MiscUtil";
import {FloorController} from "src/app/controller/FloorController";
import {FloorSearchDto} from "src/app/dto/request/FloorSearchDto";
import {Floor} from "src/app/entity/Floor";
import {Room} from "src/app/entity/Room";
import {RoomController} from "src/app/controller/RoomController";

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
  toFaGfn = toFaGfn;
  floorList$: Observable<Array<Floor>> = new Observable<Array<Floor>>();
  roomList$: Observable<Array<Room>> = new Observable<Array<Room>>();

  constructor(
    public floorController: FloorController,
    public roomController: RoomController,
    public rxFormBuilder: RxFormBuilder
  ) {
  }
  
  ngOnInit() {
    // this.search();
    this.breadCrumbItems = [{label: 'Floor'}, {label: 'Floor', active: true}];
  }

  addRoom() {
    (<FormArray>this.floorFg.get('roomList'))
      .push(this.rxFormBuilder.formGroup(Room));
  }

  saveWithRoom() {
    let floor: Floor = this.floorFg.value;
    floor.roomListSerde = floor.roomList;
    this.floorController.saveWithRoom(floor).subscribe((e) => {
      this.search();
    });
  }

  onUpdateClick(room: Room) {
    if (room && room.floor) {
      this.floorFg.patchValue(room.floor);
    }
    this.floorFg.patchValue({updateMode:true});
    //this.floorFg.patchValue({id:floor.id,name:floor.name});
    console.log(this.floorFg.value);
  }

  update() {
    this.floorController.update(this.floorFg.value).subscribe((e) => {
      this.search();
    });
  }

  delete(fg: AbstractControl, index: number) {
    console.log((<FormGroup>fg).value)
  }

  // delete(floor: Floor) {
  //   //console.log(floor);
  //   this.floorController.delete(floor).subscribe((e) => { this.search(); });
  // }

  search() {
    this.floorList$ = this.floorController.search(new FloorSearchDto({"idList": []}));
    /*.subscribe((e:Array<Floor>)=>{
    console.log(e)
  })*/
  }

  searchWithFloor() {
    this.roomList$ = this.roomController.searchWithFloor();

  }

  reset() {

  }
}
