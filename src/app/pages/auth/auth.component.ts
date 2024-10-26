import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/providers/endpoints/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {

  public signup = false;

  public login = {
    name: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) { }

  public fnLogin() {
    console.log('logou');

    localStorage.setItem('user', JSON.stringify({user: 'Teste'}));
    this.router.navigateByUrl('')
  }

}
