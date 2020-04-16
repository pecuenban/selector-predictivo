import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-select-predictivo",
  templateUrl: "./select-predictivo.component.html",
  styleUrls: ["./select-predictivo.component.css"]
})
export class SelectPredictivoComponent implements OnInit {
  opciones: any[];
  mostrar = false;
  constructor() {}
  cambio(event) {
    var buscar = "";
    if(event.key.length == 1){
      buscar = event.target.value + event.key;
    }else{
      if(event.key == "Backspace"){
      buscar = event.target.value.slice(0, -1);
    }else{
      buscar = event.target.value;
    }
    }
    for (var i = 0; i < this.opciones.length; i++) {
      if (
        this.opciones[i]["nombre"].indexOf(buscar) != -1
      ) {
        this.opciones[i]["activo"] = true;
      } else {
        this.opciones[i]["activo"] = false;
      }
    }
  }
  seleccionar(opcion) {
    opcion["seleccionado"] = true;
    document.getElementById("input").value="";
    for (var i = 0; i < this.opciones.length; i++) {
        this.opciones[i]["activo"] = true;
    }
    this.mostrar = false;
  }
  eliminar(opcion) {
    opcion["seleccionado"] = false;
  }
  ngOnInit() {
    this.seleccionados = ["hola", "adios"];
    this.opciones = new Array();
    this.opciones.push({ value: 1, nombre: "pedro" });
    this.opciones.push({ value: 2, nombre: "ana" });
    this.opciones.push({ value: 3, nombre: "teresa" });
    this.opciones.push({ value: 4, nombre: "juan" });
    this.opciones.push({ value: 5, nombre: "eugenia" });
    this.opciones.push({ value: 6, nombre: "javier" });
    this.opciones.push({ value: 7, nombre: "maría" });
    this.opciones.push({ value: 1, nombre: "pedro" });
    this.opciones.push({ value: 2, nombre: "ana" });
    this.opciones.push({ value: 3, nombre: "teresa" });
    this.opciones.push({ value: 4, nombre: "juan" });
    this.opciones.push({ value: 5, nombre: "eugenia" });
    this.opciones.push({ value: 6, nombre: "javier" });
    this.opciones.push({ value: 7, nombre: "maría" });
    this.opciones.push({ value: 1, nombre: "pedro" });
    this.opciones.push({ value: 2, nombre: "ana" });
    this.opciones.push({ value: 3, nombre: "teresa" });
    this.opciones.push({ value: 4, nombre: "juan" });
    this.opciones.push({ value: 5, nombre: "eugenia" });
    this.opciones.push({ value: 6, nombre: "javier" });
    this.opciones.push({ value: 7, nombre: "maría" });
    for (var i = 0; i < this.opciones.length; i++) {
      var campo = this.opciones[i];
      campo["activo"] = true;
      campo["seleccionado"] = false;

      this.opciones[i] = campo;
    }
    console.log(this.opciones);
  }
  Mostrar(){
    this.mostrar = !this.mostrar;
  }
}
