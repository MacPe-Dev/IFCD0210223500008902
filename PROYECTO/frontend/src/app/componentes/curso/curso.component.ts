import { Component, OnInit } from '@angular/core';
import { GcursoService } from '../../config/Servicios/gcurso.service';
import { GCurso } from '../../config/Modelos/gcurso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit{
  
  listCursos: GCurso[] = []
  
 
 
  constructor(private _gcursoService: GcursoService ){
    
  }
    ngOnInit(): void{
  this.obtenerCursos()
  
    }
    obtenerCursos() {
      this._gcursoService.getCursos().subscribe(data => {
        console.log(data);
        this.listCursos = data;
        console.log(this.listCursos)  
        console.log(this.listCursos[1].nombre)   
      }, error => {
        console.log(error);
      })
    }
   
  }


