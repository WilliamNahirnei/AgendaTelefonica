import { Injectable } from '@angular/core';
import { Contato } from '../class/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private _contatos : Contato[]=[]
  constructor() { }

  public getContatos() : Contato[]{
    return this._contatos
  }
  public insert(contato : Contato) : void{
    this._contatos.push(contato)
  }

}
