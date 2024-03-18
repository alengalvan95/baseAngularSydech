import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { tiempoAlertas } from '../configuraciones';


@Injectable({
    providedIn: 'root'
})

export class alertaService {

    public verAlerta$ = new BehaviorSubject<any>({ valor: false, color: "alerta-succes", mensaje: "" });
    verAlertaObs$ = this.verAlerta$.asObservable();

    constructor() { }

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    public ngOnInit() { }

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    public cambiarAlerta(valor: boolean, tipo: number, mensaje: string) {
        this.verAlerta$.next({ valor: valor, color: tipo, mensaje: mensaje })
        setTimeout(() => {
            this.verAlerta$.next({ valor: !valor, color: "", mensaje: "" })
        }, tiempoAlertas);
    }


}