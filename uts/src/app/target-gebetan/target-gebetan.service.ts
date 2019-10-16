import { Injectable } from '@angular/core';
import { Gebetan } from '../models/gebetan.model';

@Injectable({
  providedIn: 'root'
})
export class TargetGebetanService {
  private gebetan_list: Gebetan[] = [];

  constructor() { }

  getAllGebetan(){
    return [...this.gebetan_list];
  }

  getGebetan(gebetanID: number){
    return this.gebetan_list.find(value => value.id === gebetanID);
  }

  setGebetan(gebetan: Gebetan){
    this.gebetan_list.push(gebetan);
  }

  isGebetanTargeted(gebetan: Gebetan)
  {
    return this.gebetan_list.includes(gebetan);
  }

  deleteGebetan(gebetanID: number){
    this.gebetan_list = this.gebetan_list.filter(value => {
      return value.id !== gebetanID;
    });
  }
}
