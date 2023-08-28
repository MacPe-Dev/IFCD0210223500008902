import { Injectable } from "@angular/core";
import { alumnosBD } from '../Models/alumnos'


@Injectable({
    providedIn: 'root'
})
export class CursosService{
    private alumnosall: Array<alumnosBD>

    constructor(){
        this.alumnosall = [
                new alumnosBD("Manuel", "M. P.", 54,"manuelmacpe@gmail.com", "667936811","./assets/media/fotommp.jpg", true, 6), 
                new alumnosBD("Miguel", "R. R.", 39,"miguelrr@gmail.com", "123456789","./assets/media/fotommp.jpg", true, 8), 
                new alumnosBD("Javier", "D. M.", 19,"javierdm@gmail.com", "123456789","./assets/media/fotommp.jpg", true, 8)
        ]
}

getTexto(){
    return "Texto desde un servicio"
}

getAlumnos(): Array<alumnosBD>{
    return this.alumnosall
}
}