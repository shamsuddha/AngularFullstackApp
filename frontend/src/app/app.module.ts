import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
