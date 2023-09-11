import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AccesoComponent } from './acceso/acceso.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { ListarCursoComponent } from './listar-curso/listar-curso.component';


const routes: Routes = [
  {path: 'alumno', component: AlumnoComponent},
  {path: 'alumnos', component: AlumnosComponent },
  {path: 'cursos', component: CursosComponent},
  {path: 'curso', component: CursoComponent},
  {path: 'profesor', component: ProfesorComponent},
  {path: 'profesores', component: ProfesoresComponent},
  {path: 'acceso', component: AccesoComponent},
  {path: 'registro', component:  RegistroComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crearCurso', component: CrearCursoComponent},
  {path: 'editarCurso/:id', component: CrearCursoComponent},
  {path: 'listado', component: ListarCursoComponent},

  {path: '**', redirectTo: '',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
