export interface EmpleadoDTO{
    idEmpleado:number,
    nombreEmpleado:string,
    apellidosEmpleado:string,
    telefonoEmpleado:string,
    direccionEmpleado:string,
    correoEmpleado:string,
    codigoEmpleado:string
}

export interface EmpleadoNuevo{
    idEmpleado?:number,
    nombreEmpleado?:string,
    apellidosEmpleado?:string,
    telefonoEmpleado?:string,
    direccionEmpleado?:string,
    correoEmpleado?:string,
    codigoEmpleado?:string
}