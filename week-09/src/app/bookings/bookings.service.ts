import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { Place } from '../places/place.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private bookings: Booking[] = [];
  private totalBooking: number = 0;

  constructor() { }

  getAllBookings(){
    return [...this.bookings];
  }

  getBooking(bookingId: string){
    return this.bookings.find(value => value.id === bookingId);
  }

  setBooking(place: Place, userId: string, guestNumber: number, bookFrom: Date, bookTo: Date)
  {
    this.totalBooking++;
    let newBooking = new Booking(
      "b" + this.totalBooking,
      place.id,
      userId,
      place.title,
      guestNumber,
      bookFrom,
      bookTo
    );
    this.bookings.push(newBooking);
  }

  deleteBooking(bookingId: string){
    this.bookings = this.bookings.filter(value => {
      return value.id !== bookingId;
    });
  }
}
