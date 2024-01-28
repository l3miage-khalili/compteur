import { Injectable, computed, signal } from '@angular/core';

@Injectable(
  {
  providedIn: 'root'
})

export class CompoAService {

  private readonly _compteur = signal<number>(0)
  public readonly compteur = computed(() => this._compteur())

    add() : void {
      this._compteur.update(val => val + 1)
    }

    reset() : void {
      this._compteur.set(0)
    }
}
