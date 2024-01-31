import { Component, Signal, computed } from '@angular/core';
import { CompoAService } from './compoA.service';
import { CompoBComponent } from './compoB/compoB.component';

@Component({
  selector: 'app-compoA',
  standalone: true,
  templateUrl: './compoA.component.html',
  styleUrls: ['./compoA.component.css'],
  providers: [CompoBComponent]
})
export class CompoAComponent {

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

  decrementeCompteur() : void {
    this.CAS.reduce()
  }

}
