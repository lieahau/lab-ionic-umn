import { Injectable } from '@angular/core';
import { UKM } from '../ukm.model';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profile: Profile = new Profile(
    "Budiman Putra Jaya", // name
    "00000012802", // nim
    "assets/profile.JPG", // avatar
    [] // ukm
  )

  constructor() { }

  getProfile(){
    return this.profile;
  }

  setUKM(ukm: UKM)
  {
    this.profile.ukm.push(ukm);
  }

  isUKMexist(ukm: UKM)
  {
    return this.profile.ukm.includes(ukm);
  }

  deleteUKM(ukmId: number){
    this.profile.ukm = this.profile.ukm.filter(value => {
      return value.id !== ukmId;
    });
  }
}
