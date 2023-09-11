import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso} from '../Models/curso';
import { Global } from './global';

@Injectable()
export class save_cursoService{
	public url:string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	testService(){
		return 'Probando el servicio de Angular';
	}

	saveCurso(curso: Curso): Observable<any>{
		let params = JSON.stringify(curso);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'save-curso', params, {headers: headers});
	}

	getCursos(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'cursos', {headers: headers});
	}

	getCurso(id: string): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'curso/'+id, {headers: headers});
	}

	deleteCurso(id: string): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'curso/'+id, {headers: headers});
	}

	updateCurso(curso: any): Observable<any>{
		let params = JSON.stringify(curso);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'curso/'+Curso._id, params, {headers: headers});
	}

}