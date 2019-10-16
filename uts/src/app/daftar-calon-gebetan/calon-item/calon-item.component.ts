import { Component, OnInit, Input } from '@angular/core';
import { Gebetan } from 'src/app/models/gebetan.model';

@Component({
  selector: 'app-calon-item',
  templateUrl: './calon-item.component.html',
  styleUrls: ['./calon-item.component.scss'],
})
export class CalonItemComponent implements OnInit {
  @Input() calon: Gebetan;

  constructor() { }

  ngOnInit() {}

}
