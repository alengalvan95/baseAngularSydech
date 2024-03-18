import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { loadingService } from './@services/loading.service';
import { Idle, DEFAULT_INTERRUPTSOURCES } from "@ng-idle/core";
import { AuthService } from './@services/auth.service';
import { Router } from '@angular/router';
import { alertaService } from './@services/alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  estaCargando: boolean = false;
  restWebSubscription: Subscription | undefined;
  restartSubscription: Subscription | undefined;

  verAlerta: any = { valor: false, color: 'alerta-succes' };
  alertaSubscription: Subscription | undefined;

  idleState = "Not started.";
  timedOut = false;

  constructor(
    public loadService: loadingService,
    private idle: Idle,
    private router: Router,
    private authService: AuthService,
    public alertaService: alertaService) { }

  async ngOnInit() {
    this.restWebSubscription = this.loadService.estaCargando$.subscribe(async (valor) => {
      this.estaCargando = valor;
    })

    this.restartSubscription = this.loadService.comenzarMinutos$.subscribe(async (valor) => {
      if (valor) {
        this.reset()
      }
    })

    this.alertaSubscription = this.alertaService.verAlerta$.subscribe(async (valor) => {
      this.verAlerta = valor;
    })

    this.idle.setIdle(1800);
    this.idle.setTimeout(10);
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    // se interrumpio el tiempo para cerrar sesion
    this.idle.onIdleEnd.subscribe(() => (this.idleState = "No longer idle."));

    //se acabo el tiempo
    this.idle.onTimeout.subscribe(async () => {
      this.idleState = "Timed out!";
      this.timedOut = true;
      await this.cerrarSesion()
    });

    // empieza la cuenta regresiva
    this.idle.onIdleStart.subscribe(
      () => (this.idleState = "You've gone idle!")
    );

    // cuenta regresiva
    this.idle.onTimeoutWarning.subscribe((countdown: any) =>
      (this.idleState = "You will time out in " + countdown + " seconds!")
    );

    this.reset();

  }

  reset() {
    this.idle.watch();
    this.idleState = "Started.";
    this.timedOut = false;
  }

  public async cerrarSesion() {
    localStorage.clear();
    sessionStorage.clear();
    this.authService.EsEstaAutenticado(false);
    this.router.navigate(['/login']);
  }

}
