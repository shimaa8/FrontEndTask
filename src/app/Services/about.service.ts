import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getAbout() {
    return this.httpClient.get('../../assets/DataBase/about.json');
  }
}
