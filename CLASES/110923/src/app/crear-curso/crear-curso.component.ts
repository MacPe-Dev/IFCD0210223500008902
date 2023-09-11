// Módulos y Librerías
import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr'
// Servicio - Modelo
import { GCurso } from '../Models/gcurso'
import { GcursoService } from '../servicios/gcurso.service'

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit{
cursoForm: FormGroup;
titulo = 'Crear curso';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _cursoService: GcursoService,
              private aRouter: ActivatedRoute) { 
    this.cursoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      duracion: ['', Validators.required],
      temas: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarCurso() {

    const CURSO: GCurso = {
      nombre: this.cursoForm.get('nombre')?.value,
      descripcion: this.cursoForm.get('descripcion')?.value,
      categoria: this.cursoForm.get('categoria')?.value,
      duracion: this.cursoForm.get('duracion')?.value,
      temas: this.cursoForm.get('temas')?.value
    }

    if(this.id !== null){
      // Editamos Curso
      this._cursoService.editarCurso(this.id, CURSO).subscribe(data =>{
        this.toastr.info('El curso fue actualizado con exito!', 'Curso Actualizado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.cursoForm.reset();
      })
    } else{
      // Agregamos Curso
      console.log(CURSO);
        this._cursoService.guardarCurso(CURSO).subscribe(data => {
        this.toastr.success('El curso fue registrado con exito!', 'Curso Registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.cursoForm.reset();
      })
    }
  }
  
  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar curso';
      this._cursoService.obtenerCurso(this.id).subscribe(data => {
        this.cursoForm.setValue({
          nombre: data.nombre,
          descripcion: data.descripcion,
          categoria: data.categoria,
          duracion: data.duracion,
          temas: data.temas
        })
      })
    }
  }

}
