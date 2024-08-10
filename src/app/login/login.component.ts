
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
