import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit{
  public nombreA: string
  public emailA: string 
  public contrasenaA: string

  constructor(){
    this.nombreA = ''
    this.emailA = ''
    this.contrasenaA = ''

  }

  submitFormA() {
    console.log('Formulario enviado:');
    console.log('Nombre:', this.nombreA);
    console.log('Email:', this.emailA);
    console.log('Contraseña:', this.contrasenaA);
  }

  ngOnInit(): void {
    
  }

}