import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestmoniolsService {

  constructor(private dataService: DataService, private httpClient: HttpClient) {
  }

  getTestmonials(): any {
    return this.httpClient.get('https://reqres.in/api/users?page=1');
  }
}
