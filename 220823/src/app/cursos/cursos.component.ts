import { Component, OnInit } from '@angular/core';
import { profesorBase } from '../Models/alumnos';
import { alumnosBD } from '../Models/alumnos';

@Component({  
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  public alumnosAll: Array<alumnosBD>
  public nombreProfesor: string
  public fotoProfesor: string
  public nombre: string
  public listado: string
  public imagen: string
  public notaAlumno: number

  constructor(){
    this.notaAlumno = 4
    this.nombreProfesor = profesorBase.nombre
    this.fotoProfesor = profesorBase.foto
    this.nombre ="Programación"
    this.listado ="Listado de Cursos"
    this.imagen ="https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page"

    this.alumnosAll =[
      new alumnosBD("Miguel", "Ramírez", 39, "miguel@gmail.com", "123456789", "./assets/media/fotommp.jpg", true),
      new alumnosBD("Javier", "Díaz", 19, "javier@gmail.com", "123456789", "./assets/media/fotommp.jpg", false)
      ]
  }
  ngOnInit(){
    console.log("OnInit Ejecutado")
    console.log(this.alumnosAll)
  }
  cambiarTitulo(){
    this.nombre = "Programación en Angular"
  }

}
