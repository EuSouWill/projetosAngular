import { SaldoComponent } from './saldo/saldo.component';
import { CartaoDeCreditoComponent } from './cartao-de-credito/cartao-de-credito.component';
import { TransferenciaPix } from './pix/transferencia-pix.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch:'full'},
  {path: 'extrato', component: ExtratoComponent},
  {path: 'nova-transferencia', component: NovaTransferenciaComponent},
  {path: 'transferencia-pix', component: TransferenciaPix},
  {path:'cartao-de-credito', component: CartaoDeCreditoComponent},
  { path: 'saldo', component: SaldoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule{}
