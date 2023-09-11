import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
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
