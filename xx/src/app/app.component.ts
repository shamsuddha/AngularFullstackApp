import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainModule } from './module/MainModule';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule, 
    MainModule,
    RouterOutlet
  ]
})
export class AppComponent {
  title = 'angular';
}
