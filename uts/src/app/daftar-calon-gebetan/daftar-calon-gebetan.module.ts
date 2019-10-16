import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DaftarCalonGebetanPage } from './daftar-calon-gebetan.page';
import { CalonItemComponent } from './calon-item/calon-item.component';

const routes: Routes = [
  {
    path: '',
    component: DaftarCalonGebetanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DaftarCalonGebetanPage, CalonItemComponent]
})
export class DaftarCalonGebetanPageModule {}
