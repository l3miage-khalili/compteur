import { Component, Signal, computed } from '@angular/core';
import { CompoAlphaPrimeService } from '../compoAlphaPrime.service';

@Component({
  selector: 'app-compoBeta',
  standalone: true,
  templateUrl: './compoBeta.component.html',
  styleUrls: ['./compoBeta.component.css'],
})
export class CompoBetaComponent {

  public compteur : Signal<number>

  constructor(private CAPS: CompoAlphaPrimeService){
    this.compteur = computed(() => this.CAPS.compteur())
  }

  incrementeCompteur() : void{
    this.CAPS.add()
  }

  reinitialiseCompteur() : void {
    this.CAPS.reset()
  }

}
