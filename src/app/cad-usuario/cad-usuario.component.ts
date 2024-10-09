import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CadusuarioService } from '../cadusuario.service';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrl: './cad-usuario.component.scss'
})
export class CadUsuarioComponent {

    formulario = new FormGroup ({
    nome : new FormControl (''),
    sobrenome : new FormControl (''),
    email : new FormControl (''),
    senha : new FormControl (''),
    telefone : new FormControl (''),
    valor : new FormControl (''),
    endereco: new FormControl (''),
    dtnascimento : new FormControl ('')

  })

constructor (private cadUsuarioService : CadusuarioService
){}


  onSave () {
    //chama o serviço para gravar as informações no banco de dados
   //armazena o formulario em uma variavel para
   //melhor manipulação
   let dados = this.formulario.value;
   //abre uma conexão asíncrona com o serviço
   this.cadUsuarioService.salvar(dados).subscribe({
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

