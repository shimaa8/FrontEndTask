import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUserData} from '../Models/user-data';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // userData: IUserData;

  constructor(public httpClient: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getUserData() {
    // return this.httpClient.get('home_layout/');
  }

  // tslint:disable-next-line:typedef
  get(APIPath: string) {
    return this.httpClient.get(`${environment.apiEndPoint}${APIPath}`);
  }

  // tslint:disable-next-line:typedef
  getWithParams(APIPath: string, params: any) {
    return this.httpClient.get(`${environment.apiEndPoint}${APIPath}`, {params});
  }

  // tslint:disable-next-line:typedef
  delete(APIPath: string, Key: any) {
    return this.httpClient.delete(`${environment.apiEndPoint}${APIPath}${Key}`);
  }

  // tslint:disable-next-line:typedef
  deleteItem(APIPath: string) {
    return this.httpClient.delete(`${environment.apiEndPoint}${APIPath}`);
  }

  // tslint:disable-next-line:typedef
  update(APIPath: string, OBJ: any) {
    return this.httpClient.put(`${environment.apiEndPoint}${APIPath}`, OBJ);
  }

  // tslint:disable-next-line:typedef
  post(APIPath: string, OBJ: any) {
    return this.httpClient.post(`${environment.apiEndPoint}${APIPath}`, OBJ);
  }
}
