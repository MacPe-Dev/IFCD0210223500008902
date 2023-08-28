import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  public nombre: string
  public email: string 
  public contrasena: string

  constructor(){
    this.nombre = ''
    this.email = ''
    this.contrasena = ''

  }

  submitForm() {
    console.log('Formulario enviado:');
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.email);
    console.log('Contraseña:', this.contrasena);
  }

  ngOnInit(): void {
    
  }

}
