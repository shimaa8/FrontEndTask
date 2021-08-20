import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { Index1Component } from './index1/index1.component';
import {SharedModule} from '../Shared/shared.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    Index1Component
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ScrollToModule
  ]
})
export class PagesModule { }
