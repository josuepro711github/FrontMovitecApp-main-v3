import { Injectable } from '@angular/core';
import { PlanesNuevo } from '../Models/plan.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanActualService {

  private currentPlan = new BehaviorSubject<PlanesNuevo>({
    id: 0,
    velocidadPlan: undefined,
    precioPlan: undefined
  });

  currentPlan$ = this.currentPlan.asObservable();

  constructor() { }

  setPlan(plan: PlanesNuevo){
    this.currentPlan.next(plan);
  }

}
