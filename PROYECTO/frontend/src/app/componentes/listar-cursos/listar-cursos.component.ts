import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GcursoService } from '../../config/Servicios/gcurso.service';
import { GCurso } from '../../config/Modelos/gcurso';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent {
  listCursos: GCurso[] = []
  

  constructor(private _gcursoService: GcursoService, private toastr: ToastrService ){
    
  }
    ngOnInit(): void{
  this.obtenerCursos()
  
    }
    obtenerCursos() {
      this._gcursoService.getCursos().subscribe(data => {
        console.log(data);
        this.listCursos = data;
      }, error => {
        console.log(error);
      })
    }
    
    eliminarCurso(id: any) {
      this._gcursoService.eliminarCurso(id).subscribe(data => {
        this.toastr.error('El curso fue eliminado con exito' ,'Curso Eliminado');
        this.obtenerCursos();
      }, error => {
        console.log(error);
      })
    }
}
