import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { registerServiceModel } from '../models/registerServiceModel';
import { ServiceModel } from '../models/serviceModel';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegisterService {

 

  constructor(
    private readonly http: HttpClient,
  ) { }

  // getRegisterServices() {
  //   return this.http.get<registerServiceModel[]>(environment.url_api + '/datas')
  // }
}
