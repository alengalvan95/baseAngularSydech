import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@services/auth.service';
import { WebRestService } from 'src/app/@services/crud.rest.service';
import { loadingService } from 'src/app/@services/loading.service';
import { LocalStorageService } from 'src/app/@services/local-storage.service';
import { GeneralComponent } from 'src/app/@shared/general/general.component';
import { metodos } from 'src/app/endpoints/endpoits';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends GeneralComponent implements OnInit {
  public formGroup!: FormGroup;
  token: string | undefined;
  ListModulos: any[] = [];
  controltype = "password";
  showpass = false;
  get usuario() {
    return this.formGroup.get("usuario")
  }

  get contrasenia() {
    return this.formGroup.get("contrasenia")
  }

  constructor(private fb: FormBuilder,
    private router: Router,
    public loadingService: loadingService,
    public loadService: loadingService) {
    super()
    this.token = undefined;
    let token = localStorage.getItem("jwt");
    if (token) {
      this.router.navigate(["inicio"]);
    }
  }

  public async ngOnInit() {
    this.gotoTop()
    this.formGroup = this.fb.group({
      usuario: [null, { validators: [Validators.required] }],
      contrasenia: [null, { validators: [Validators.required] }]
    });
  }

  showPass() {
    if (this.controltype === "password") {
      this.controltype = "text";
      this.showpass = true;
    } else {
      this.controltype = "password";
      this.showpass = false;

    }
  }

  public async send() {
    let respuesta = await this.webService.getAsync(metodos.home)
    if (respuesta != null) {
      this.navegarA('inicio')
    } else {
      this.alertaServiceG.cambiarAlerta(true, 2, 'Hubo un error, inténtalo más tarde.')
    }
  }
}
