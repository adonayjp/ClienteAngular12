import { Component, OnInit } from '@angular/core';
import { DtoProducto } from './models/ejemplo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'AppCliente';
  products: DtoProducto[] = [];
  products2: DtoProducto[] = [{ code:'1', nombre:'Zapato', category:'ropa', quantity:'5'},
  { code:'1', nombre:'Zapato', category:'ropa', quantity:'5'},
  { code:'1', nombre:'Zapato', category:'ropa', quantity:'5'},
  { code:'1', nombre:'Zapato', category:'ropa', quantity:'5'}];
  ngOnInit() {

  }
}


