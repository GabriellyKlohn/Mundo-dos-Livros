import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CadprodutoService } from '../cadproduto.service';

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrl: './cad-produto.component.scss'
})
export class CadProdutoComponent {

    formulario = new FormGroup ({
    id : new FormControl (''),
    sobrenome : new FormControl (''),
    nome : new FormControl (''),
    link : new FormControl (''),
    fabricante : new FormControl (''),
    preco : new FormControl (''),
    garantia : new FormControl (''),
    descricao : new FormControl (''),
    tipo : new FormControl ('')

  })
  constructor (private cadProdutoService : CadprodutoService
  ){}
  
  
    onSave () {
      //chama o serviço para gravar as informações no banco de dados
     //armazena o formulario em uma variavel para
     //melhor manipulação
     let dados = this.formulario.value;
     //abre uma conexão asíncrona com o serviço
     this.cadProdutoService.salvar(dados).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error :(error)=>{
        console.log(error)
  
      }
  
     })
    }
    onCancelar (){
      this.formulario.reset()
    }
  }

