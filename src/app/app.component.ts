import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mundo_dos_Livros';
  
}
export class HeaderComponent {

  onLogin(): void {
    // Ação a ser executada quando o botão de login é clicado
    console.log('Login button clicked');
    // Aqui você pode adicionar a lógica para redirecionar para a página de login, abrir um modal, etc.
  }
}
