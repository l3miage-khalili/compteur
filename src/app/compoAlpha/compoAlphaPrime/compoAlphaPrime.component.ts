import { Component, Signal, computed } from '@angular/core';
import { CompoAlphaPrimeService } from './compoAlphaPrime.service';
import { CompoBetaComponent } from './compoBeta/compoBeta.component';

@Component({
  selector: 'app-compoAlphaPrime',
  standalone: true,
  templateUrl: './compoAlphaPrime.component.html',
  styleUrls: ['./compoAlphaPrime.component.css'],
  providers: [CompoBetaComponent]
})
export class CompoAlphaPrimeComponent {

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

  decrementeCompteur() : void{
    this.CAPS.reduce()
  }

}
