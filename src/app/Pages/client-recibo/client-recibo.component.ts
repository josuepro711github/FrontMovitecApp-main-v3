import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-recibo',
  templateUrl: './client-recibo.component.html',
  styleUrls: ['./client-recibo.component.css']
})
export class ClientReciboComponent implements OnInit {

  recibos: number[] = [1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

  descargarPdf(){
    
  }

