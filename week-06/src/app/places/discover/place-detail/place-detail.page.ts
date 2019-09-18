import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { BookingsService } from 'src/app/bookings/bookings.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private bookingsService: BookingsService,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('placeId')) {
          this.navCtrl.navigateBack('/places/tabs/discover');
          return;
        }
        this.place = this.placesService.getPlace(paramMap.get('placeId'));
      }
    )
  }

  async bookPlace() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Book Place',
      buttons: [
        {
          text: 'Book with Random Date',
          handler: () => {
            this.modalCtrl.create({
              component: CreateBookingComponent,
              componentProps: { selectedPlace: this.place }
            }).then(modalElement => {
              modalElement.present();
              return modalElement.onDidDismiss();
            }).then(response => {
              if(response.role == 'confirm'){
                this.bookingsService.setBooking(response.data.place, response.data.userId, response.data.guestNumber);
                this.navCtrl.navigateRoot('/bookings')
              }
            });
          }
        },
        {
          text: 'Cancel',
          role:'cancel',
        }
      ]
    });
    await actionSheet.present();
  }

}
