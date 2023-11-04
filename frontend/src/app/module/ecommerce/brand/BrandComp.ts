import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'BrandComp',
  templateUrl: './BrandComp.html',
  styleUrls: ['./BrandComp.scss'],
  //standalone: true
})
export class BrandComp{

  brandDtoFg = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl<string | null>(null),



  });

  // userDtoFg = new FormGroup({

  //   id: new FormControl<number | null>(null),

  //   email: new FormControl<string | null>(null, [
  //     Validators.required,
  //     Validators.maxLength(35),
  //     Validators.minLength(5),
  //   ]),
  //   mobile: new FormControl<number | null>(null, [
  //     Validators.required,
  //     Validators.maxLength(15),
  //     Validators.minLength(9),
  //   ]),
  // });

  // userDtoList: Array<User> = [];
  // currentUserId: number | null = 0;

  // constructor(public userDtoApiService: UserDtoApiService) {}

  // ngOnInit() {
  //   this.searchUser();
  // }

  // saveUser() {
  //   const userDto = new User(this.userDtoFg.value);
  //   // console.log(userDto);
  //   console.log(userDto);
  //   this.userDtoApiService.save(userDto).subscribe((e) => {
  //     this.searchUser();
  //   });
  // }

  // onUpdateClick(user: User) {
  //   this.userDtoFg.patchValue({
  //     id: user.id,
  //     email: user.email,
  //     mobile: user.mobile,
  //   });
  // }

  // update() {

  //   this.userDtoApiService
  //     .update(new User(this.userDtoFg.value))
  //     .subscribe((e) => {
  //       console.log(e);
  //       this.searchUser();
  //     });
  // }

  // delete(user: User) {
  //   this.userDtoApiService.delete(user).subscribe(e=>{});
  //   console.log(user.id + "deleted");
  //   this.searchUser();
  // }

  // searchUser() {
  //   this.userDtoApiService
  //     .search(new UserSearchDto())
  //     .subscribe((e: Array<User>) => {
  //       this.userDtoList = e;
  //       console.log(this.userDtoList);
  //     });
  // }







}
