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
    SharedRoutingModule
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
