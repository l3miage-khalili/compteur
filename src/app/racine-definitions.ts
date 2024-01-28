import { Signal } from "@angular/core";

export interface RacineModelService{
    readonly compteur : Signal<number>

    add() : void

    reset() : void
}