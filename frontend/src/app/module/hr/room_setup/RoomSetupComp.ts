import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { RxFormBuilder } from "@rxweb/reactive-form-validators";
import { Observable } from "rxjs";
import { RoomController } from "src/app/controller/RoomController";
import { RoomSearchDto } from "src/app/dto/request/RoomSearchDto";
import { Room } from "src/app/entity/Room";

@Component({
  selector: 'RoomSetupComp',
  templateUrl: './RoomSetupComp.html',
  styleUrls: ['./RoomSetupComp.scss'],
  //standalone: true
})

export class RoomSetupComp implements OnInit {

  breadCrumbItems!: Array<{}>;
  title!: string;

  roomFg: FormGroup = this.rxFormBuilder.formGroup(Room);
  roomList$: Observable<Array<Room>> = new Observable<Array<Room>>();

  constructor(
    public roomController: RoomController,
    public rxFormBuilder: RxFormBuilder
  ) { }

  ngOnInit() {
    this.search();
    this.breadCrumbItems = [{ label: 'Room' }, { label: 'Room', active: true }];
  }

  save() {
    this.roomController.save(this.roomFg.value).subscribe((e) => {this.search(); });
  }

  onUpdateClick(room: Room) {
    this.roomFg.patchValue(room);
    //this.roomFg.patchValue({id:room.id,name:room.name});
    console.log(this.roomFg.value);
  }

  update() {
    this.roomController.update(this.roomFg.value).subscribe((e) => {this.search(); });
  }

  delete(room: Room) {
    //console.log(room);
    this.roomController.delete(room).subscribe((e) => { this.search(); });
  }

  search() {
    this.roomList$ = this.roomController.search(new RoomSearchDto({ "idList": [] }));
    /*.subscribe((e:Array<Room>)=>{
    console.log(e)
  })*/
  }
}