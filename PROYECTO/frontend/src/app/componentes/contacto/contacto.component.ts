import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr'
// Servicio - Modelo
import { GMensaje  } from '../../config/Modelos/GMensaje'
import { GmensajeService} from '../../config/Servicios/gmensajes.service'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactoForm: FormGroup;
  titulo = 'Formulario de Contacto';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _mensajeService: GmensajeService,
              private aRouter: ActivatedRoute) { 
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      asunto: ['', Validators.required],
      textomensaje: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.esEditar();
  }
  agregarUsuario() {
    const MENSAJE: GMensaje  = {
      nombre: this.contactoForm.get('nombre')?.value,
      email: this.contactoForm.get('email')?.value,
      telefono: this.contactoForm.get('telefono')?.value,
      asunto: this.contactoForm.get('asunto')?.value,
      textomensaje: this.contactoForm.get('textomensaje')?.value
    }
    if(this.id !== null){
      // Editamos Usuario
      this._mensajeService.editarMensaje(this.id, MENSAJE).subscribe(data =>{
        this.toastr.info('El mensaje fue actualizado con exito!', 'Mensaje Actualizado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.contactoForm.reset();
      })
    } else{
      // Agregamos Usuario
      console.log(MENSAJE);
        this._mensajeService.guardarMensaje(MENSAJE).subscribe(data => {
        this.toastr.success('El mensaje fue enviado con exito!', 'Mensaje Enviado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.contactoForm.reset();
      })
    }
  }
  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar Mensaje';
      this._mensajeService.obtenerMensaje(this.id).subscribe(data => {
        this.contactoForm.setValue({
          nombre: data.nombre,
          email: data.apellidos,
          telefono: data.edad,
          asunto: data.email,
          textomensaje: data.telefono
        })
      })
    }
  }
}
