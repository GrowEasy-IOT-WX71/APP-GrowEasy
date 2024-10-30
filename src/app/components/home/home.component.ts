import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatCard, MatCardAvatar, MatCardHeader, MatCardModule} from '@angular/material/card';
import {NgStyle} from '@angular/common';
import {FloatingBoxComponent} from '../floating-box/floating-box.component';
import {User} from '../../model/user';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';

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
export class HomeComponent implements OnInit {
  showModal = false;
  user: User | null = null;

  constructor(
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    const username = this.userService.getUsername();
    this.userService.getUserByUsername(username).subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (error) => {
        console.error('Error al obtener el perfil del usuario:', error);
        alert('No se pudo cargar el perfil. Intente de nuevo más tarde.');
      }
    });
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }
}
