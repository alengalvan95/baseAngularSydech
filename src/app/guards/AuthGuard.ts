import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }
  public ListModulos!: any[];

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   return true
    // const token = localStorage.getItem("jwt");
    // const usuario: any = JSON.parse(localStorage.getItem("usuario")!);
    // if (token != null && usuario != null) {
    //   const { roles } = route.data;
    //   if (roles && !roles.includes(usuario.rol)) {
    //     this.router.navigate(['/']);
    //     return false;
    //   }
    //   return true;
    // } else {
    //   this.router.navigate(["/login"]);
    //   return false;
    // }
  }

  existeSesion(): boolean {
    return true
    // const token = localStorage.getItem("jwt");
    // const usuario: any = localStorage.getItem("usuario");
    // if (token != null && usuario != null) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  public logOut(): void {
    localStorage.clear();
    localStorage.removeItem("jwt");
    localStorage.removeItem("jwtData");
  }
}

