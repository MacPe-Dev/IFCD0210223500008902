import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GCurso } from '../Modelos/gcurso';

@Injectable({
  providedIn: 'root'
})
export class GcursoService {

  url= 'http://localhost:3700/api/cursos/'

  constructor(private http: HttpClient) { }

  getCursos(): Observable<any>{
    return this.http.get(this.url)
  }

  eliminarCurso(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarCurso(curso: GCurso): Observable<any> {
    return this.http.post(this.url, curso);
  }

  obtenerCurso(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCurso(id: string, curso: GCurso): Observable<any>{
    return this.http.put(this.url + id, curso)

  }
}
