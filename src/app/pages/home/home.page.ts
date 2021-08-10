import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from './../../services/contato.service';
import { Contato } from './../../class/contato';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private _lista_contatos : Contato[]

  constructor (private _router : Router, private _contatoService : ContatoService){
    this._lista_contatos = this._contatoService.getContatos()
  }

  private goCadastro():void{
    this._router.navigate(["/cadastrar"])
  }

}
