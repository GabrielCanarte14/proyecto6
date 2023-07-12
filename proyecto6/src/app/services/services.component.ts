import { Component } from '@angular/core';

import { Datos } from '../interfaces/datos';

import { ProveedorService } from '../providers/proveedor.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  public data : Datos[] = [];

  constructor(private dataProvider: ProveedorService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Datos[]); 
    })
  }
}
