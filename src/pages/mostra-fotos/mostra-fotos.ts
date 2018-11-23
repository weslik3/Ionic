import { HttpRequestProvider } from "./../../providers/http-request/http-request";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-mostra-fotos",
  templateUrl: "mostra-fotos.html"
})
export class MostraFotosPage {
  public UrlImgRandom = new Array<any>();
  public indexObjJson = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpRequest: HttpRequestProvider
  ) {}

  ionViewDidLoad() {
    this.proximaFotoBuscar();
  }

  proximaFoto() {
    if (this.UrlImgRandom.length == this.indexObjJson + 1)
    {
      this.proximaFotoBuscar();
    }
    else
    {
      this.indexObjJson = this.indexObjJson + 1;
    }
  }

  imagemAnterior() {
    if (this.indexObjJson > 0){
      this.indexObjJson = this.indexObjJson -1;
    }

  }

  proximaFotoBuscar() {
    this.httpRequest.getFotoRandomica().subscribe(
        data => {
          //Aplicando o retorno
          console.log(data.toString);
          console.log(data.url);
          //this.UrlImgRandom = data.url;

        if (this.UrlImgRandom.length != 0){
          this.indexObjJson =  this.indexObjJson + 1;
        }
        this.UrlImgRandom.push(data.url);
      },
      error => {
        console.log("ERRO: " + error);
      }
    );
  }
}
