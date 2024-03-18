import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class loadingService {

  public estaCargando$ = new BehaviorSubject<boolean>(false);
  estaCargandoObs$ = this.estaCargando$.asObservable();

  public comenzarMinutos$ = new BehaviorSubject<boolean>(false);
  comenzarMinutosObs$ = this.comenzarMinutos$.asObservable();

  constructor() { }

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public ngOnInit() { }

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public cambiarCargando(valor: boolean) {
    this.estaCargando$.next(valor)
  }

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public restablecerTiempo(valor: boolean) {
    this.comenzarMinutos$.next(valor)
  }
}