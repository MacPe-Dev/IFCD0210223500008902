import { Component, OnInit, DoCheck } from '@angular/core';
import { Curso } from '../Models/curso';
import { save_cursoService } from '../servicios/curso.service';
import { Global } from '../servicios/global';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [save_cursoService]
})
export class CursosComponent implements OnInit, DoCheck{
  public nombre: string
  public listado: string

  public cursos: Curso[] = [];
  public url: string;

  constructor(private _cursoService: save_cursoService){
    this.nombre = "Programación"
    this.listado = "Listado de Cursos"
    
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getCursos();
    console.log("OnInit ejecutado")
  }

  ngDoCheck(): void {
    console.log("DoCheck Ejecutado")
  }
  cambiarTitulo(){
    this.nombre = "Programación en Angular"
  }

  getCursos(){
  	this._cursoService.getCursos().subscribe(
  		response => {
  			if(response.cursos){
  				this.cursos = response.cursos;
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }

}
