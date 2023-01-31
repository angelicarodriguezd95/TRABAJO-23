import { Component } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent {
  suma = false
  resta = false
  multi = false
  divi = false

 
  num1 = 0
  num2 = 0

  resultado = ""
  resultado_resta=""
  resultado_mul=""
  resultado_divi=""
  ngOnInit(){
    this.operacion()
  }
  operacion(){
    console.log(this.suma)
    if(this.suma == true){
      let resulta = this.num1 + this.num2
      this.resultado = " Resultado de la suma : " +resulta.toString() +" "
    }else{
      this.resultado = ""
    }
    if(this.resta == true){
      let resulta = this.num1 - this.num2
      this.resultado_resta = " Resultado de la resta: " +resulta.toString() +" "
    }else{
      this.resultado_resta = ""
    }
    if(this.multi == true){
      let resulta = this.num1 * this.num2
      this.resultado_mul = " Resultado de la multiplicación: " +resulta.toString() +" "
    }else{
      this.resultado_mul = ""
    }
    if(this.divi == true){
      let resulta = this.num1 / this.num2
      this.resultado_divi = "Resultado de la divición : " +resulta.toString() +" "
    }else{
      this.resultado_divi = ""
    }
  }
}
