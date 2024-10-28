import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {
  MatCard,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    RouterLink,
    MatCard,
    MatCardAvatar,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatCardContent,
    NgStyle
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

}
