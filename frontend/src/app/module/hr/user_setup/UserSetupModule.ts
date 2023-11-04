import { NgModule } from "@angular/core";
import { UserSetupComp } from "./UserSetupComp";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { SharedModule } from "src/app/shared/shared.module";
import { UserInfoController } from "src/app/controller/UserInfoController";

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserSetupComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,    
    RxReactiveFormsModule,
    SharedModule
  ],

  providers: [UserInfoController],
})
export class UserSetupModule {}
