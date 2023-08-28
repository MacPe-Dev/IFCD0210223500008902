import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, DoCheck{
  public nombre: string
  public listado: string

  constructor(){
    this.nombre = "Programación"
    this.listado = "Listado de Cursos"
  }

  ngOnInit(): void {
    console.log("OnInit ejecutado")
  }

  ngDoCheck(): void {
    console.log("DoCheck Ejecutado")
  }
  cambiarTitulo(){
    this.nombre = "Programación en Angular"
  }

}
