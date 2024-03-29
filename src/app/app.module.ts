import { MatTable } from '@angular/material/table';

import { TransferenciaPix } from './pix/transferencia-pix.component';
import { AppRoutingModule } from './app-routing.module';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { CartaoDeCreditoComponent } from './cartao-de-credito/cartao-de-credito.component';
import { SaldoComponent } from './saldo/saldo.component';


registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
   NovaTransferenciaComponent,
   ExtratoComponent,
   TransferenciaPix,
   CartaoDeCreditoComponent,
   SaldoComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule, HttpClientModule,
    AppRoutingModule, BrowserAnimationsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},

    {provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL',
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

