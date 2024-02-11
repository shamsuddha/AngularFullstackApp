import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainModule } from './module/MainModule';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    MainModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
}
