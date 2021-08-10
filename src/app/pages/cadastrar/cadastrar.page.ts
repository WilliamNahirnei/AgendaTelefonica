import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ContatoService } from './../../services/contato.service';
import { Route } from '@angular/compiler/src/core';
import { Contato } from 'src/app/class/contato';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  private _nome : string
  private _telefone : number
  private _dataNascimento : string
  private _sexo : string
  constructor(public alertController: AlertController,private _router : Router,private _contatoService : ContatoService) { }

  ngOnInit() {
  }

  private Cadastrar():void{
    this._dataNascimento = this._dataNascimento.split('T')[0]
    if(this.validar(this._nome) 
    && this.validar(this._telefone) 
    && this.validar(this._dataNascimento) 
    && this.validar(this._sexo)){
      let contato : Contato = new Contato(this._nome,this._telefone,this._dataNascimento,this._sexo)
      this._contatoService.insert(contato)
      this.presentAlert('Agenda Contatos','Cadastrar','Cadasrto realizado com sucesso')
      this.goHome()
    }
    else
      this.presentAlert('Agenda Contatos','Cadastrar','Todos os campos são obrigatorios')

  }

  private goHome():void{
    this._router.navigate(["/home"])
  }


  private validar(campo : any) : boolean{
    if(!campo)
      return false
    else
      return true
  }
  async presentAlert(titulo:string, subtitulo:string,message:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: titulo,
      subHeader: subtitulo,
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}
