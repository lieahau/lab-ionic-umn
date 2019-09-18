import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.model';
import { BookingsService } from './bookings.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  bookings: Booking[];

  constructor(private bookingsService: BookingsService) { }

  ngOnInit() {}

  ionViewDidEnter(){
    this.bookings = this.bookingsService.getAllBookings();
  }

  deleteBooking(id: string){
    this.bookingsService.deleteBooking(id);
    this.bookings = this.bookingsService.getAllBookings();
  }

}
