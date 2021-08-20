import {Component, OnInit} from '@angular/core';
import {TestmoniolsService} from '../../Services/testmoniols.service';
import {ITestmonials} from '../../Models/testmonials';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  data: ITestmonials[] = [];
  apiEndPointImage = environment.apiEndPointImage;
  images: any[] = [];

  constructor(public _TestmoniolsService: TestmoniolsService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this._TestmoniolsService.getTestmonials().subscribe((res: { data: ITestmonials[] }) => {
      this.data = res.data;
      for (const re of res.data) {
        this.images.push(re.avatar);

      }
      console.log(this.data);
      console.log(this.images);
    });
  }
}
