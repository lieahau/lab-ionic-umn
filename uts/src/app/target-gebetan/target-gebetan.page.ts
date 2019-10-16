import { Component, OnInit } from '@angular/core';
import { Gebetan } from '../models/gebetan.model';
import { TargetGebetanService } from './target-gebetan.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-target-gebetan',
  templateUrl: './target-gebetan.page.html',
  styleUrls: ['./target-gebetan.page.scss'],
})
export class TargetGebetanPage implements OnInit {
  target_list: Gebetan[] = [];

  constructor(
    private targetGebetanService: TargetGebetanService,
    private actionSheetCtrl: ActionSheetController,
  ) { }

  ngOnInit() {
  
  }

  ionViewDidEnter(){
    this.target_list = this.targetGebetanService.getAllGebetan();
  }

  OnDeleteGebetan(targetID: number){
    this.actionSheetCtrl.create({
      header: "Yakin gak gebet dia lagi?",
      buttons: [
        {
          text: "Yakin, hapus dari daftar.",
          handler: () => {
            this.targetGebetanService.deleteGebetan(targetID);
            this.target_list = this.targetGebetanService.getAllGebetan();
          }
        },
        {
          text: "Gak yakin, kembali.",
          role: "cancel"
        }
      ]
    }).then(actionSheetEl => {
      actionSheetEl.present();
    });
  }
}
