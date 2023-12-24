import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Division } from "src/app/entity/Division";

@Component({
  selector: 'DistrictDialogComp',
  templateUrl: 'DistrictDialogComp.html',
  //standalone: true,
  //imports: [MatDialogModule, MatButtonModule],
})
export class DistrictDialogComp implements OnInit {

  constructor(public dialogRef: MatDialogRef<DistrictDialogComp>,
    @Inject(MAT_DIALOG_DATA) public data: Division) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  close() {
    this.dialogRef.close(this.data);
  }
}