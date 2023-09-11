import { Component, OnInit } from '@angular/core';
import { Curso } from '../Models/curso';
import { save_cursoService} from '../servicios/curso.service';
import { UploadService } from '../servicios/upload.service';
import { Global } from '../servicios/global';

@Component({
  selector: 'app-crearcurso',
  templateUrl: './crearcurso.component.html',
  styleUrls: ['./crearcurso.component.css'],
  providers: [save_cursoService, UploadService]


})
export class CrearcursoComponent implements OnInit {

  public title: string;
	public curso: Curso;
	public save_curso: any;
	public status: any;
	public filesToUpload: Array<File> = [];

	constructor(
		private _cursoService: save_cursoService,
		private _uploadService: UploadService
	){
		this.title = "Crear Curso";
		this.curso = new Curso('','','','',6,'','');
	}

	ngOnInit() {
	}

	onSubmit(form: { reset: () => void; }){
		
		// Guardar datos básicos
		this._cursoService.saveCurso(this.curso).subscribe(
			response => {
				if(response.curso){
					
					// Subir la imagen
					if(this.filesToUpload){
						this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.curso._id, [], this.filesToUpload, 'image')
						.then((result:any) => {

							this.save_curso = result.curso;

							this.status = 'success';
							form.reset();
						});
					}else{
						this.save_curso = response.curso;
						this.status = 'success';
						form.reset();
					}
					
				}else{
					this.status = 'failed';
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}
}
