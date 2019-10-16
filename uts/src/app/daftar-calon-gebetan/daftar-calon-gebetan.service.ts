import { Injectable } from '@angular/core';
import { Gebetan } from '../models/gebetan.model';

@Injectable({
  providedIn: 'root'
})
export class DaftarCalonGebetanService {
  private gebetan_list: Gebetan[] = [
    new Gebetan(
      1, // id
      "Sakurauchi Riko", // name
      "Aku kalem", // description
      1, // gender, 0 = male, 1 = female
      "assets/images/Love Live Aqours Sakurauchi Riko 5.jpg"
    ),
    new Gebetan(
      2, // id
      "Nishikino Maki", // name
      "Aku pianist", // description
      1, // gender
      "assets/images/Love Live Muse Nishikino Maki 10.png"
    ),
    new Gebetan(
      3, // id
      "Watanabe You", // name
      "Aku ceria", // description
      1, // gender
      "assets/images/Love Live Aqours Watanabe You.png"
    ),
    new Gebetan(
      4, // id
      "Sonoda Umi", // name
      "Aku dewasa", // description
      1, // gender
      "assets/images/Love Live Muse Sonoda Umi Present.jpg"
    ),
    new Gebetan(
      5, // id
      "Sora", // name
      "Aku cerdas", // description
      0, // gender
      "assets/images/No Game No Life Sora.jpg"
    ),
    new Gebetan(
      6, // id
      "Hikigaya Hachiman", // name
      "Aku bijak", // description
      0, // gender
      "assets/images/Oregairu Hikigaya Hachiman.png"
    ),
    new Gebetan(
      7, // id
      "Arima Kousei", // name
      "Aku pianist", // description
      0, // gender
      "assets/images/Your Lie In April Kaori x Kousei.png"
    ),
  ]

  constructor() { }

  getAllGebetan(){
    return [...this.gebetan_list];
  }

  getGebetan(gebetanID: number){
    return this.gebetan_list.find(value => value.id === gebetanID);
  }
}
