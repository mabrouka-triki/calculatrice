import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup} from "@angular/forms";



@Component({
  selector: 'app-compteur-de-calcul',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compteur-de-calcul.component.html',
  styleUrl: './compteur-de-calcul.component.css'
})
export class CompteurDeCalculComponent {
  public total: number = 0;

@Input()test:number= 0;



  compte() {

    this.total++;
  }


}



