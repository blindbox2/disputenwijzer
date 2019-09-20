import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DisputenwijzerPage } from './disputenwijzer.page';

const routes: Routes = [
  {
    path: '',
    component: DisputenwijzerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DisputenwijzerPage]
})
export class DisputenwijzerPageModule {}
