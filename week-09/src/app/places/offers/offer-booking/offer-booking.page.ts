import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offer-booking',
  templateUrl: './offer-booking.page.html',
  styleUrls: ['./offer-booking.page.scss'],
})
export class OfferBookingPage implements OnInit, OnDestroy {
  place: Place
  private placeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.placeSub = this.placesService.getPlace(
        paramMap.get('placeId')).subscribe(place => {
          this.place = place;
        })
    });
  }

  ngOnDestroy(){
    if(this.placeSub){
      this.placeSub.unsubscribe();
    }
  }
}
