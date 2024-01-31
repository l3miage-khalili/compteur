import { Component, Signal, computed } from '@angular/core';
import { CompoAService } from '../compoA.service';

@Component({
  selector: 'app-compoB',
  standalone: true,
  templateUrl: './compoB.component.html',
  styleUrls: ['./compoB.component.css'],
})
export class CompoBComponent {

  public compteur : Signal<number>

  constructor(private CAS: CompoAService){
    this.compteur = computed(() => this.CAS.compteur())
  }

  incrementeCompteur() : void{
    this.CAS.add()
  }

  reinitialiseCompteur() : void {
    this.CAS.reset()
  }

  decrementeCompteur() : void{
    this.CAS.reduce()
  }

}
