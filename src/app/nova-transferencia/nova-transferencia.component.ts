import { Transferencia } from './../services/models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;
  origem: number;

  constructor(
    protected service: TransferenciaService,
    protected router: Router
  ) {}

  transferir() {
    console.log('Solicitada nova transferência');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
      origem: this.origem,
    };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );

    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
    this.origem = 0;
  }
}
