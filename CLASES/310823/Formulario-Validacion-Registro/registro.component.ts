import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  contacto!: FormGroup;
	submitted = false;
	title = 'Validar Formulario con Angular 16 + Bootstrap 5';

  constructor(private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    this.contacto = this.formBuilder.group({
      nya: ['', Validators.required],            
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      tema: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(6)]]
  });
    
  }

  get f() {return this.contacto.controls; }
 
	onSubmit() {
		this.submitted = true;
 
		if(this.contacto.invalid) {
			return
		}alert('Mensaje Enviado !')
  }
}
