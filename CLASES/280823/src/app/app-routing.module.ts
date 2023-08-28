import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AccesoComponent } from './acceso/acceso.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'alumno', component: AlumnoComponent},
  {path: 'alumnos', component: AlumnosComponent },
  {path: 'cursos', component: CursosComponent},
  {path: 'curso', component: CursoComponent},
  {path: 'profesor', component: ProfesorComponent},
  {path: 'profesores', component: ProfesoresComponent},
  {path: 'acceso', component: AccesoComponent},
  {path: 'registro', component:  RegistroComponent},
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
