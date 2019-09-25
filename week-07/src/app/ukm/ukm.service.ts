import { Injectable } from '@angular/core';
import { UKM } from './ukm.model';

@Injectable({
  providedIn: 'root'
})
export class UkmService {
  private ukm_list: UKM[] = [
    new UKM(
      1,
      'Game Development Club (GDC)',
      'instagram: @gdcumn'
    ),
    new UKM(
      2,
      'UMN Programming Club (UMNPC)',
      'instagram: @umnprogrammingclub'
    ),
    new UKM(
      3,
      'Rencang',
      'instagram: @rencangaye'
    ),
    new UKM(
      4,
      'Obscura',
      'instagram: @obscuratwl'
    ),
    new UKM(
      5,
      'UMN English Student Council (UESC)',
      'instagram: @uesc_umn'
    )
  ]

  constructor() { }

  getAllUKM(){
    return [...this.ukm_list];
  }
  
  getUKM(ukmId: number){
    return this.ukm_list.find(value => value.id === ukmId);
  }
}
