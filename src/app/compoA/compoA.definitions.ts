import { Signal } from "@angular/core";

export interface CompoAModelService{
    readonly compteur : Signal<number>

    add() : void

    reset() : void
}