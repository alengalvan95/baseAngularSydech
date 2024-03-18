import { JwtHelperService } from "@auth0/angular-jwt";

// Clase encarga de retornar el usuario actual en sesion
export class AuthIdentity {
  //#region Métodos publicos
  public static ObtenerUsuarioSesion(): any {
    const helper = new JwtHelperService();
    const informacionToken = helper.decodeToken(localStorage.getItem("jwt")!);
    const usuario = informacionToken.Data;
    if (usuario.length > 0) {
      return JSON.parse(usuario);
    } else {
      return null;
    }
  }

  //#endregion
}
