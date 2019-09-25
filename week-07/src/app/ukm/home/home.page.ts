import { Component, OnInit } from '@angular/core';
import { UKM } from '../ukm.model';
import { UkmService } from '../ukm.service';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  ukm_list: UKM[];

  constructor(
    private ukmService: UkmService,
    private profileService: ProfileService,
    private alertController: AlertController,
    private toastController: ToastController,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    this.ukm_list = this.ukmService.getAllUKM();
  }

  async onJoinUKM(ukm: UKM){
    const alert = await this.alertController.create({
      header: "Beneran Mau Join?",
      buttons: [
        {
          text: "Batal",
          role: 'batal',
          handler: () => {
            
          }
        },
        {
          text: "Serius",
          role: 'serius',
          handler: () => {
            if(this.profileService.isUKMexist(ukm) == false){
              this.profileService.setUKM(ukm);
              this.navCtrl.navigateRoot('/ukm/tabs/profile');
            }
            else{
              this.toastController.create({
                message: 'You already joined this UKM.',
                duration: 2000
              }).then(response => {
                response.present();
              });
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
