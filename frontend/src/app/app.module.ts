import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
