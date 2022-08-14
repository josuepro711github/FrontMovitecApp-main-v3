import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/Models/plan.model';


import { PlanesService } from 'src/app/Services/planes.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  planes:Plan[]=[];

  constructor(private planService: PlanesService, private router:Router) { }

  ngOnInit(): void {
    this.planService.getAllPlanes().subscribe(data => {
      this.planes = data;
    });
  }

}
