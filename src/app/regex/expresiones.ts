export const expresionesRegulares = {
  correo: "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
  alfanumerico: /^[a-zA-Z0-9\sÁÉÍÓÚáéíóúÑñ/.]*$/,
  numerosCaracteres: /^[0-9/.]*$/,
  numeroDecimal: /^[0-9.]*$/,
  soloNumeros: /^[0-9]*$/,
  correoComun: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  alfanumericoContrasenia: /^[a-zA-Z0-9\sÁÉÍÓÚáéíóúÑñ@#_*%/.:;=\/.]*$/,
  nombresApellidos: /^[a-zA-Z\sÁÉÍÓÚáéíóúÑñ]*$/,
  dosDecimales: /^([0-9]{1,15}(\.[0-9]{2})?)$/,
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,15}$/,
};
