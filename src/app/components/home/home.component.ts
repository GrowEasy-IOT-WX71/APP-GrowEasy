import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatCard, MatCardAvatar, MatCardHeader, MatCardModule} from '@angular/material/card';
import {NgStyle} from '@angular/common';
import {FloatingBoxComponent} from '../floating-box/floating-box.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatCard,
    MatCardHeader,
    MatCardAvatar,
    MatCardModule,
    NgStyle,
    FloatingBoxComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {
  showModal = false;

  toggleModal(){
    this.showModal = !this.showModal;
  }
}
