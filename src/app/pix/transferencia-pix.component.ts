import { NovaTransferenciaComponent } from './../nova-transferencia/nova-transferencia.component';
import { TransferenciaService } from './../services/transferencia.service';
import { ExtratoComponent } from './../extrato/extrato.component';
import { Transferencia } from './../services/models/transferencia.model';
import { Router } from '@angular/router';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-transferencia-pix',
  templateUrl: './transferencia-pix.component.html',
  styleUrls: ['./transferencia-pix.component.scss'],
})
export class TransferenciaPix extends NovaTransferenciaComponent {
  @Output() aoFazerPix = new EventEmitter<any>();


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

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
    this.origem = 0;
  }



  

}
