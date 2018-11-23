import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpRequestProvider } from "../../providers/http-request/http-request";

@IonicPage()
@Component({
  selector: "page-lista-fotos",
  templateUrl: "lista-fotos.html"
})
export class ListaFotosPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpRequest: HttpRequestProvider
  ) {}

  objJSON = [];
  ionViewDidLoad() {
    this.httpRequest.getFotosLista().subscribe(
      data => {
        // tratando retorno JSON
        const obj = data as any;
        console.log("obj: ");
        console.log(obj);
        const objJSONFotoLista = JSON.parse(obj._body);
        for (let i = 0; i < 50; i++) {
          var model = objJSONFotoLista[i];
          model.image = "https://picsum.photos/200/200?image=" + model.id;
          this.objJSON.push(model);
        }
      },
      error => {
        console.log("ERRO: " + error);
      }
    );
  }
}
