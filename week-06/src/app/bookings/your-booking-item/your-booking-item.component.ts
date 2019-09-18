import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../booking.model';

@Component({
  selector: 'app-your-booking-item',
  templateUrl: './your-booking-item.component.html',
  styleUrls: ['./your-booking-item.component.scss'],
})
export class YourBookingItemComponent implements OnInit {
  @Input() booking: Booking;
  constructor() { }

  ngOnInit() {}

}
