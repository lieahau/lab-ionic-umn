import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {}

  bookThisPlace(bookingPlace: Place) {
    this.loadingCtrl.create({
      keyboardClose: true,
      message: 'Booking the place...'
    }).then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        loadingEl.dismiss();
        this.modalCtrl.dismiss({ 
          place: bookingPlace,
          userId: "u" + Math.floor(Math.random() * 1000) + 1,
          guestNumber: Math.floor(Math.random() * 10) + 1
        },
        'confirm');
      }, 2000);
    });
  }

  dismissModal() {
    this.modalCtrl.dismiss({}, 'cancel');
  }
}
