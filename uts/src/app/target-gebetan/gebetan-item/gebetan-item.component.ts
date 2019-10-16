import { Component, OnInit, Input } from '@angular/core';
import { Gebetan } from 'src/app/models/gebetan.model';

@Component({
  selector: 'app-gebetan-item',
  templateUrl: './gebetan-item.component.html',
  styleUrls: ['./gebetan-item.component.scss'],
})
export class GebetanItemComponent implements OnInit {
  @Input() target: Gebetan;

  constructor() { }

  ngOnInit() {}

}
