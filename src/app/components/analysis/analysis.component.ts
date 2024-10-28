import { Component } from '@angular/core';
import {MatCard, MatCardAvatar, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-analysis',
  standalone: true,
    imports: [
        MatCard,
        MatCardAvatar,
        MatCardHeader,
        MatCardSubtitle,
        MatCardTitle,
        RouterLink
    ],
  templateUrl: './analysis.component.html',
  styleUrl: './analysis.component.css'
})
export class AnalysisComponent {

}
