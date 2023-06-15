import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    //gatilhos de animação aqui
  ]
})
export class AppComponent {
  title = 'bytebank';


  constructor(private service: TransferenciaService) {}
}
