import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  searchQuery: string = '';

  onSearch() {
    console.log('Search query:', this.searchQuery);
    // Aqui você pode adicionar lógica para filtrar os itens ou redirecionar para uma página de resultados
  }
}
