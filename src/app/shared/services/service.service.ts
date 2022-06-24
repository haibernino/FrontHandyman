import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceModel } from '../models/serviceModel';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  serviceData: ServiceModel[] = [
    { id: 1, typeService: 'Reparación', address: 'Calle 10', user: 123, journey: 'Mañana' },
    { id: 2, typeService: 'Instalación', address: 'Calle 11', user: 789, journey: 'Mañana' },
    { id: 3, typeService: 'Reparación', address: 'Calle 12', user: 145, journey: 'Tarde' },
    { id: 4, typeService: 'Reparación', address: 'Calle 13', user: 519, journey: 'Noche' },
    { id: 5, typeService: 'Reparación', address: 'Calle 14', user: 657, journey: 'Noche' },
    { id: 6, typeService: 'Reparación', address: 'Calle 15', user: 953, journey: 'Tarde' },
    { id: 7, typeService: 'Reparación', address: 'Calle 16', user: 6498, journey: 'Tarde' },
    { id: 8, typeService: 'Instalación', address: 'Calle 17', user: 135, journey: 'Mañana' },
    { id: 9, typeService: 'Reparación', address: 'Calle 18', user: 123, journey: 'Mañana' },
    { id: 10, typeService: 'Instalación', address: 'Calle 19', user: 789, journey: 'Mañana' },
    { id: 11, typeService: 'Reparación', address: 'Calle 20', user: 145, journey: 'Tarde' },
    { id: 12, typeService: 'Reparación', address: 'Calle 21', user: 519, journey: 'Noche' },
    { id: 13, typeService: 'Reparación', address: 'Calle 22', user: 657, journey: 'Mañana' },
    { id: 14, typeService: 'Reparación', address: 'Calle 23', user: 953, journey: 'Mañana' },
    { id: 15, typeService: 'Reparación', address: 'Calle 24', user: 6498, journey: 'Mañana' },
    { id: 16, typeService: 'Instalación', address: 'Calle 25', user: 135, journey: 'Tarde' },
    { id: 17, typeService: 'Reparación', address: 'Calle 26', user: 123, journey: 'Noche' },
    { id: 18, typeService: 'Instalación', address: 'Calle 27', user: 789, journey: 'Noche' },
    { id: 19, typeService: 'Reparación', address: 'Calle 28', user: 145, journey: 'Tarde' },
    { id: 20, typeService: 'Reparación', address: 'Calle 29', user: 519, journey: 'Tarde' },
    { id: 21, typeService: 'Reparación', address: 'Calle 30', user: 657, journey: 'Mañana' }
  ]

  constructor(
    private readonly http : HttpClient,
  ) { }

  // getServices(){
  //   return this.http.get<ServiceModel[]>( environment.url_api+'/datas')
  // }
}
