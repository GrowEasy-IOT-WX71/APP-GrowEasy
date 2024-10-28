import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatCard, MatCardContent} from '@angular/material/card';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterLink,
    MatCard,
    MatCardContent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
