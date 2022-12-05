import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartao-de-credito',
  templateUrl: './cartao-de-credito.component.html',
  styleUrls: ['./cartao-de-credito.component.scss']
})
export class CartaoDeCreditoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  compraAutorizada(){
    console.log('compra autorizada')
  }

  

}
