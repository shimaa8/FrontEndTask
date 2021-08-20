import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedRoutingModule} from './shared-routing.module';
import {AboutComponent} from './about/about.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {TestimonialsComponent} from './testimonials/testimonials.component';
import {TeamComponent} from './team/team.component';
import {ClientsComponent} from './clients/clients.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {FooterComponent} from './footer/footer.component';
import { ScrollspyDirective } from './scrollspy.directive';
// import {AgmCoreModule} from '@agm/core';
import {TabViewModule} from 'primeng/tabview';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AboutComponent,
    PortfolioComponent,
    TestimonialsComponent,
    TeamComponent,
    ClientsComponent,
    ContactUsComponent,
    FooterComponent,
    ScrollspyDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TabViewModule,
    IvyCarouselModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAnU0AOQJWtWBkS4zJLGL5wW8EFcnvRS44'
    // })
  ],
    exports: [AboutComponent,
        PortfolioComponent,
        TestimonialsComponent,
        TeamComponent,
        ClientsComponent,
        ContactUsComponent,
        FooterComponent, ScrollspyDirective]
})
export class SharedModule {
}
