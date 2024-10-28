import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-floating-box',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './floating-box.component.html',
  styleUrl: './floating-box.component.css'
})
export class FloatingBoxComponent {
  @Input() show = false;
  @Output() close = new EventEmitter<void>();

  tempRange = {min: 5, max: 10};
  alertThreshold: number = 8;

  closeModal(){
    this.close.emit();
  }

  acceptChanges(){
    if(this.alertThreshold < this.tempRange.min || this.alertThreshold > this.tempRange.max){
      alert("El umbral de alerta debe estar dentro del rango de temperatura")
    }else {
      this.closeModal()
    }
  }
}
