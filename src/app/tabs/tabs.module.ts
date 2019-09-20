import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {path: 'rooster', loadChildren: '../rooster/rooster.module#RoosterPageModule'},
      {path: 'disputenwijzer', loadChildren: '../disputenwijzer/disputenwijzer.module#DisputenwijzerPageModule'},
      {path: 'contact', loadChildren: '../contact/contact.module#ContactPageModule'},
      {path: 'einde', loadChildren: '../einde/einde.module#EindePageModule'},
    ]
  },
  {
    path:'',
    redirectTo: '/tabs/rooster',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
