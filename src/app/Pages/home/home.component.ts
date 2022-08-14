import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/Models/plan.model';
import { Distrito } from 'src/app/Models/distrito.model';

import { PlanesService } from 'src/app/Services/planes.service';
import { DistritoService } from 'src/app/Services/distrito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  distritos!:Distrito[];
  distrito:string="Los Olivos";
  planes:Plan[]=[];

  constructor(
    private planService: PlanesService, private router:Router,private distritoService:DistritoService) {
  }

  ngOnInit(): void {
    this.planService.getAllPlanes().subscribe(data => {
      this.planes = data;
    });
    this.distritoService.getDistritos().subscribe(data=>{
      this.distritos = data;
    });
  }

  navegar(){
    let lista = this.distrito.split(" ");
    let nuevaCadena = lista[0];
    for(let i = 1; i<lista.length;i++){
      nuevaCadena += "+"+lista[i];
    } window.open("https://www.google.com/maps/place/"+nuevaCadena, '_blank');
  }

}
