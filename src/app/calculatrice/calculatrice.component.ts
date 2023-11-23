import {Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CompteurDeCalculComponent} from "../compteur-de-calcul/compteur-de-calcul.component";

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CompteurDeCalculComponent],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.css'
})
export class CalculatriceComponent {
  public calculatrice: FormGroup;
  public resultat: number = 0;
  @ViewChild('compteur') compteur!:CompteurDeCalculComponent;

  public operande1: FormControl = new FormControl(0, [
    Validators.min(1),
    Validators.required
  ]);

  public operateur: FormControl = new FormControl('+', Validators.required);

  public operande2: FormControl = new FormControl(0, [
    Validators.required
  ]);


  constructor() {
    this.calculatrice = new FormGroup({
      operande1: this.operande1,
      operateur: this.operateur,
      operande2: this.operande2,
    });
  }

  calcul(): void {
  this.compteur.compte();
    this.resultat = eval(
      'parseFloat(this.operande1.value) ' +
      this.operateur.value +
      ' parseFloat(this.operande2.value)'
    );

  }
}
