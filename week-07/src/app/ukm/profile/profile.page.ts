import { Component, OnInit } from '@angular/core';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: Profile;

  constructor(
    private profileService: ProfileService,
  ) { }

  ngOnInit() {}

  ionViewDidEnter(){
    this.profile = this.profileService.getProfile();
  }

  onQuitUkm(ukmId: number){
    this.profileService.deleteUKM(ukmId);
    this.profile = this.profileService.getProfile();
  }

}
