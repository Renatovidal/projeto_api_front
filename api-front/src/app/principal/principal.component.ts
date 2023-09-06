import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
 
  //obj do tipo cliente
  cliente = new Cliente();

  //variavel para visibilidade dos botoens
  btnCasdastrar:boolean = true;

  //variavel para visibilidade da tabela
  tabela:boolean = true;

  //json de cliente
  clientes:Cliente[] = [];

  //contrutor
  constructor(private servico:ClienteService) {}

  //metodo de seleção
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }

  //medoto de cadastro
  cadastrar():void{
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => { 
      
      //cadastrar o cliete no vetor 
      this.clientes.push(retorno);});

      //limpar apos o cadastro
      this.cliente = new Cliente();

      //messagem de alerta
      alert("cadastrado com sucesso");
  }

  SelecionarCliente(posicao:number):void{

    //selecionar cliente no vetor
    this.cliente = this.clientes[posicao];

    //visibilidade dos botoens
    this.btnCasdastrar = false;

    //visibilidade da tabela
    this.tabela = false;

  }

  EditarClientes():void{
    this.servico.editar(this.cliente)
    .subscribe(retorno => {

      //obter posição do vetor onde esta o cliente
      let posicao = this.clientes.findIndex(obj => {
        return obj.codigo == retorno.codigo;
      });
      
      // altrerar dados do cliente no vetor
      this.clientes[posicao] = retorno;

      //vibilidade dos botoens
      this.btnCasdastrar = true;

      //visibilidade da tabela
      this.tabela = true;

      //limpar apos o cadastro
      this.cliente = new Cliente();

      //mensagem
      alert("alterado com sucesso!");

    })
  }

  //metodo para excluir
  excluir():void{
    this.servico.excluir(this.cliente.codigo)
    .subscribe(retorno => {
    
      //obter posição do vetor onde esta o cliente
      let posicao = this.clientes.findIndex(obj => {
        return obj.codigo == this.cliente.codigo;
      });

      //excluir dados do cliente no vetor
      this.clientes.splice(posicao, 1)

      //vibilidade dos botoens
      this.btnCasdastrar = true;

      //visibilidade da tabela
      this.tabela = true;

      //limpar apos o cadastro
      this.cliente = new Cliente();

      //mensagem
      alert("removido com sucesso!");

    });

  }

  //metodo para cancelar
  cancelar():void{
    //vibilidade dos botoens
    this.btnCasdastrar = true;

    //visibilidade da tabela
    this.tabela = true;

    //limpar apos o cadastro
    this.cliente = new Cliente();
  }

  //medo de inicialização
  ngOnInit(){
    this.selecionar();
  }

}
