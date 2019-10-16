import { Component, OnInit } from '@angular/core';
import { DaftarCalonGebetanService } from './daftar-calon-gebetan.service';
import { Gebetan } from '../models/gebetan.model';
import { LoadingController, ToastController, IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { TargetGebetanService } from '../target-gebetan/target-gebetan.service';

@Component({
  selector: 'app-daftar-calon-gebetan',
  templateUrl: './daftar-calon-gebetan.page.html',
  styleUrls: ['./daftar-calon-gebetan.page.scss'],
})
export class DaftarCalonGebetanPage implements OnInit {
  calon_list: Gebetan[];

  constructor(
    private calonGebetanService: DaftarCalonGebetanService,
    private targetGebetanService: TargetGebetanService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.calon_list = this.calonGebetanService.getAllGebetan();
  }

  OnTargeting(calon: Gebetan, slidingItem: IonItemSliding){
    if(this.isTargeted(calon))
    {
      this.toastCtrl.create({
        message: 'Gebetan ini sudah ada dalam target kamu.',
        duration: 2000
      }).then(response => {
        slidingItem.close();
        response.present();
      });
    }
    else{
      this.loadingCtrl.create({
        spinner: "circles",
        keyboardClose: true,
        cssClass: "custom-loading"
      }).then(loadingEl => {
        loadingEl.present();
        this.targetGebetanService.setGebetan(calon);
        setTimeout(() => {
          loadingEl.dismiss();    
          this.router.navigateByUrl('/target-gebetan');
          slidingItem.close();
        }, 1500);
      });
    }
  }

  isTargeted(calon: Gebetan){
    return this.targetGebetanService.isGebetanTargeted(calon);
  }
}
