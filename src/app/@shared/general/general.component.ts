import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { AppInjectorService } from '../../@services/app-injector.service';
import { Router } from '@angular/router';
import { WebRestService } from 'src/app/@services/crud.rest.service';
import { loadingService } from 'src/app/@services/loading.service';
import { alertaService } from 'src/app/@services/alerta.service';

@Component({
    selector: 'app-general',
    template: ""
})
export class GeneralComponent implements OnDestroy {

    protected webService: WebRestService;
    protected routers: Router;
    protected loadServiceG: loadingService
    protected alertaServiceG: alertaService

    public mensajesValidacion = {
        obligatorioArchivo: [
            { type: "required", message: "El campo es obligatorio." },
            { type: "invalidFileType", message: "Vuelva a cargar un formato válido." },
        ],
        requerido: [
            { type: "required", message: "El campo es obligatorio." }
        ],
        obligatorioNombres: [
            { type: "required", message: "El campo es obligatorio." },
            { type: "pattern", message: "No coincide con el formato esperado." },
        ],
        correoSegob: [
            { type: "required", message: "El campo es obligatorio." },
            { type: "pattern", message: "No coincide con el formato esperado." },
        ],
        obligatorioPassword: [
            { type: "required", message: "El campo es obligatorio." },
            { type: "pattern", message: "No coincide con el formato esperado." },
            { type: "minlength", message: "La contraseña es demasiada corta." },
        ],
        obligatorio: [
            { type: "required", message: "El campo es obligatorio." },
        ],
        correo: [
            { type: "email", message: "Formato inválido." },
            { type: "required", message: "Esta pregunta es obligatoria." }
        ],
        oficio: [
            { type: "pattern", message: "Solo acepta /." },
            { type: "required", message: "Esta pregunta es obligatoria." }
        ],
        nombreEnlace: [
            { type: "pattern", message: "Solo acepta @ # _ * % / . : ; = \ " },
            { type: "required", message: "Esta pregunta es obligatoria." }
        ],
        numeroDictamen: [
            { type: "pattern", message: "Solo acepta números y (/.)" },
            { type: "required", message: "Esta pregunta es obligatoria." }
        ],
        numeroDecimal: [
            { type: "pattern", message: "Formato incorrecto, este campo permite números con un máximo de 2 decimales." },
            { type: "required", message: "Esta pregunta es obligatoria." }
        ],
        telefono: [
            { type: "pattern", message: "Solo acepta números." },
            { type: "required", message: "Esta pregunta es obligatoria." },
            { type: "minlength", message: "Debe contener 10 números." },
        ],
        solonumerosObligatorio: [
            { type: "pattern", message: "Solo acepta números." },
            { type: "required", message: "Esta pregunta es obligatoria." }
        ],
        alfanumericoObligatorio: [
            { type: "pattern", message: "Este campo acepta números y letras, además de los caracteres especiales /." },
            { type: "required", message: "Esta pregunta es obligatoria." }
        ]
    }


    constructor() {
        const injector = AppInjectorService.getInjector();
        this.routers = injector.get(Router)
        this.webService = injector.get(WebRestService)
        this.loadServiceG = injector.get(loadingService)
        this.alertaServiceG = injector.get(alertaService)
    }

    ngOnDestroy() {
    }

    validaCamposFormulario(formGroups: FormGroup[]) {
        formGroups.forEach((formulario) => {
            Object.keys(formulario.controls).forEach((field) => {
                const control = formulario.get(field);
                if (control instanceof FormControl) {
                    control.markAsTouched({ onlySelf: true });
                } else if (control instanceof FormGroup) {
                    this.validaCamposFormulario([control]);
                } else if (control instanceof FormArray) {
                    control.controls.forEach((element) => {
                        if (element instanceof FormControl) {
                            element.markAsTouched({ onlySelf: true });
                        } else if (element instanceof FormGroup) {
                            this.validaCamposFormulario([element]);
                        }
                    });
                }
            });
        });
    }

    bloqueaCamposFormulario(formGroups: FormGroup[]) {
        formGroups.forEach((formulario) => {
            Object.keys(formulario.controls).forEach((field) => {
                const control = formulario.get(field);
                if (control instanceof FormControl) {
                    //control.markAsTouched({ onlySelf: true });
                    control.disable({ onlySelf: true });
                } else if (control instanceof FormGroup) {
                    this.validaCamposFormulario([control]);
                } else if (control instanceof FormArray) {
                    control.controls.forEach((element) => {
                        if (element instanceof FormControl) {
                            //element.markAsTouched({ onlySelf: true });
                            element.disable({ onlySelf: true });
                        } else if (element instanceof FormGroup) {
                            this.validaCamposFormulario([element]);
                        }
                    });
                }
            });
        });
    }

    navegarA(url: string) {
        this.routers.navigate([url]);
    }

    public limpiarFormulario(formulario: FormGroup) {
        formulario.reset();
    }

    gotoTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    public imprime(algo: any) {
        console.log(algo)
    }

}
