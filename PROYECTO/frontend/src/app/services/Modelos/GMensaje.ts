export class GMensaje{
	public _id?: string
	public nombre: string
	public email: string
	public telefono: string
	public asunto: string
	public textomensaje: string
	constructor(nombre: string, email: string, telefono: string, asunto: string, textomensaje: string){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.asunto = asunto;
        this.textomensaje = textomensaje;
    }
}