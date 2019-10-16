import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  @Input() selectedMode: 'select' | 'random';
  guests: number;
  startDate: string;
  endDate: string;

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit(){
    this.guests = 2;
    const availableFrom = new Date(this.selectedPlace.availableFrom);
    const availableTo = new Date(this.selectedPlace.availableTo);
    if(this.selectedMode === "random"){
      this.startDate = new Date(
        availableFrom.getTime() +
        Math.random() * (availableTo.getTime() - 7 * 24 * 60 * 60 * 1000 - availableFrom.getTime())
      ).toISOString();

      this.endDate = new Date(
        new Date(this.startDate).getTime() +
        Math.random() *
        (new Date(this.startDate).getTime()) +
        6 * 24 * 60 * 60 * 1000 -
        new Date(this.startDate).getTime()
      ).toISOString();
    }
  }

  bookThisPlace() {
    this.loadingCtrl.create({
      keyboardClose: true,
      message: 'Booking the place...'
    }).then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        loadingEl.dismiss();
        this.modalCtrl.dismiss({ 
          place: this.selectedPlace,
          userId: "u" + Math.floor(Math.random() * 1000) + 1,
          guestNumber: this.guests,
          bookFrom: this.startDate,
          bookTo: this.endDate
        },
        'confirm');
      }, 2000);
    });
  }

  dismissModal() {
    this.modalCtrl.dismiss({}, 'cancel');
  }
}
