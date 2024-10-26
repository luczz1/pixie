import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/providers/endpoints/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {

  public signup = true;

  public login = {
    name: '',
    password: ''
  };

  constructor(private auth: AuthService) { }

  public fnLogin() {
    console.log('logou');
  }

}
