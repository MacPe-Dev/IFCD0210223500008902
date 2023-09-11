import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit{
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticaed => {
      if(isAuthenticaed) {
        this.router.navigate(['/dashboard'])
      }
    })
  }

  login() {
    this.auth.loginWithRedirect()
  }

}