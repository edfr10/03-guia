import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
//Atributos
// declara las variables de las clases
public dato;

//Constuctor

//el que inicia las variable


//Métodos
login(){
  this.dato = function (nombre) 
  {
    return "hola me llamo " + nombre;
  };
  console.log(this.dato("david"));
}







  
// let nombre = function (nombre) {
  
//     return "hola me llamo" + nombre;
// };
// let hola;

// saludo = nombre("david");

//console.log(hola)



//saludo = "hola me llamo";
//let saludo;
//saludo1 = mellamo("david")
//console.log(saludo);

}
