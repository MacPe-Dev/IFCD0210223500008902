export var profesorBase = {
    nombre: "Manuel",
    apellidos: "M P",
    edad: 54,
    correo: "manuelmacpe@gmail.com",
    telefono: "667936811",
    foto: "./assets/media/fotommp.jpg"
}

export class alumnosBD {
    // public nombreA: string
    // public apellidosA: string
    // public edadA: number
    // public correoA: string
    // public telefonoA: string
    // public fotoA: string
    // constructor(nombreA, apellidosA, edadA, correoA, telefonoA, fotoA){
    //     this.nombreA = nombreA,
    //     this.apellidosA = apellidosA,
    //     this.edadA = edadA,
    //     this.correoA = correoA,
    //     this.telefonoA = telefonoA,
    //     this.fotoA = fotoA
    // }
    constructor(
        public nombreA: string,
        public apellidosA: string,
        public edadA: number,
        public correoA: string,
        public telefonoA: string,
        public fotoA: string, 
        public estadoA: boolean,
        public notaA: number
    ){}
}