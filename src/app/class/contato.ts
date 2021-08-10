export class Contato {

    private _nome : string
    private _telefone : number
    private _dataNascimento : string
    private _sexo : string

    constructor(nome : string, telefone : number,dataNascimento : string,sexo : string){
        this.setNome(nome)
        this.setTelefone(telefone)
        this.setDataNascimento(dataNascimento)
        this.setSexo(sexo)

    }

    public getNome( ) : string{
        return this._nome
    }

    public getTelefone() : number{
        return this._telefone
    }

    public getDataNascimento() : string{
        return this._dataNascimento.split('-')[2]+'-'+this._dataNascimento.split('-')[1]+'-'+this._dataNascimento.split('-')[0]
    }

    public getSexo() : string{
        return this._sexo
    }

    public setNome(nome : string) : void{
        this._nome=nome
    }

    public setTelefone(telefone : number) : void{
        this._telefone=telefone
    }

    public setDataNascimento(dataNascimento : string){
        this._dataNascimento=dataNascimento
    }
    public setSexo(sexo : string){
        this._sexo=sexo
    }
}
