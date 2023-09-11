import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GcursoService } from '../servicios/gcurso.service';
import { GCurso } from '../Models/gcurso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit{

  listCursos: GCurso[] = []
  // toastr: any;

constructor(private _gcursoService: GcursoService,
            private toastr: ToastrService ){
  
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