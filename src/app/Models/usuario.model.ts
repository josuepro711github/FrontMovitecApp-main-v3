export interface UsuarioLogin{
    nombreUsuario: string,
    password: string
}

export interface UsuarioLoginReturn{
    token: string,
    bearer: string,
    nombreUsuario: string,
    nombre: string,
    apellidos: string,
    telefono: string,
    direccion: string,
    estado: boolean,
    authorities: string[]
}

export interface UsuarioNuevo{
    id?:number,
    nombre:string,
    apellidos:string,
    direccion:string,
    tipoDocumento:{
        id: number
    },
    documento:string,
    estado:boolean,
    nombreUsuario:string,
    email:string,
    telefono:string,
    password: string, 
    roles:string[]
}

export interface UsuarioListDto{
    id:number,
    apellidos:string,
    direccion:string,
    documento:string,
    correo:string,
    estado:boolean,
    nombre:string,
    nombre_Usuario:string,
    telefono:string,
    tipo:string
}

export interface Contraseñas{
	nomUsuario:string;
	passAniguo:string;
	passNuevo:string;
}