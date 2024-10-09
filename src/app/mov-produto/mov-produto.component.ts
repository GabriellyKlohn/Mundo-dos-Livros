import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovprodutoService } from '../movproduto.service';

@Component({
  selector: 'app-mov-produto',
  templateUrl: './mov-produto.component.html',
  styleUrl: './mov-produto.component.scss'
})
export class MovProdutoComponent {

    formulario = new FormGroup ({
    id : new FormControl (''),
    dataMovimentacao : new FormControl (''),
    produto : new FormControl (''),
    quantidade : new FormControl (''),
    tipo : new FormControl ('')

  })
  constructor (private movProdutoService : MovprodutoService
  ){}
  
  
    onSave () {
      //chama o serviço para gravar as informações no banco de dados
     //armazena o formulario em uma variavel para
     //melhor manipulação
     let dados = this.formulario.value;
     //abre uma conexão asíncrona com o serviço
     this.movProdutoService.salvar(dados).subscribe({
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
  
