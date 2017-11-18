import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookingComponent } from '../booking-module/components/booking/booking.component';
import { BookingRoutes as routes } from './booking.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BookingComponent]
})
export class BookingModule { }
