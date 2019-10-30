import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.interface';
import { BookingsService } from './bookings.service';
import { AlertController, ModalController } from '@ionic/angular';
import { NewBookingPage } from './new-booking/new-booking.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private bookings: Booking[] = [];

  constructor(
    private bookingService: BookingsService,
    private alertController: AlertController,
    private modalController: ModalController
  ) {}

  ngOnInit(){}

  getBookings(){
    this.bookingService.fetchBookings().subscribe((bookings) => {
      console.log(bookings);
    })
  }

  async presentAlertPrompt(){
    const alert = await this.alertController.create({
      header: "Delete a Booking",
      inputs: [
        {
          name: "bookingId",
          type: "text",
          placeholder: "Enter your booking ID"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: "Ok",
          handler: (data) => {
            this.bookingService.deleteBooking(data.bookingId)
              .subscribe((bookings) => {
                console.log(bookings);
              });
            console.log("DELETED");
          }
        }
      ]
    });
    
    await alert.present();
  }

  async presentModal(){
    const modal = await this.modalController.create({
      component: NewBookingPage
    });
    return await modal.present();
  }

  newBooking(){
    this.presentModal();
  }

  deleteBooking(){
    this.presentAlertPrompt();
  }
}
