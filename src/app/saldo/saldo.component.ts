import { Router } from '@angular/router';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.scss']
})
export class SaldoComponent{
@Output () solicitarSaldo = new EventEmitter<any>();

saldo = 100;
valor: number;

 transferir() {
  console.log(this.saldo);
 }


}
