import { Component, Signal, computed } from '@angular/core';
import { RacineService } from '../racine.service';

@Component({
  selector: 'app-compoAlpha',
  standalone: true,
  templateUrl: './compoAlpha.component.html',
  styleUrls: ['./compoAlpha.component.css'],
})
export class CompoAlphaComponent {

  public compteur : Signal<number>

  constructor(private appS: RacineService){
    this.compteur = computed(() => this.appS.compteur())
  }

  incrementeCompteur() : void{
    this.appS.add()
  }

  reinitialiseCompteur() : void {
    this.appS.reset()
  }

  decrementeCompteur() : void{
    this.appS.reduce()
  }

}
