import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  // Importar FormBuilder y FormGroup

@Component({
  selector: 'app-registration-form',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm!: FormGroup;  // Definir FormGroup para el formulario reactivo

  constructor(private formBuilder: FormBuilder) {}  // Inyectar FormBuilder

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      nombreR: ['', Validators.required],
      emailR: ['', [Validators.required, Validators.email]],
      contrasenaR: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  submitForm() {
    if (this.registrationForm.valid) {
      console.log('Formulario enviado:');
      console.log('Nombre:', this.registrationForm.value.nombreR);
      console.log('Email:', this.registrationForm.value.emailR);
      console.log('Contraseña:', this.registrationForm.value.contrasenaR);
    }
  }
}
