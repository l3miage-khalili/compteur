import { Component, Signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RacineService } from './racine.service';
import { CompoAComponent } from './compoA/compoA.component';
import { CompoBComponent } from './compoA/compoB/compoB.component';
import { CompoAlphaComponent } from './compoAlpha/compoAlpha.component';
import { CompoAlphaPrimeComponent } from './compoAlpha/compoAlphaPrime/compoAlphaPrime.component';
import { CompoBetaComponent } from './compoAlpha/compoAlphaPrime/compoBeta/compoBeta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CompoAComponent, CompoBComponent, CompoAlphaComponent, CompoAlphaPrimeComponent, CompoBetaComponent, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[RacineService]
})
export class AppComponent {
  title = 'compteur';

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

}
