import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { technicalModel } from '../models/technicalModel';

@Injectable({
  providedIn: 'root'
})
export class ServiceTechnicalService {

 technical:technicalModel[] = [
    {typeDocument:'CC',	id:1152987324	, name:'Cristian Camilo Zambrano Grajales'},
    {typeDocument:'CC',	id:1152669883	, name:'Jaime Alejandro Gomez Solarte'},
    {typeDocument:'CC',	id:9999999988	, name:'Sebastián David Carvajal Rosero'},
    {typeDocument:'CC',	id:78956453	, name:'Sammy Steven Muñoz Hidalgo'},
    {typeDocument:'CC',	id:16466873	, name:'Raquel Sofía Neira Chaparro'}
  ]
  
  constructor(
    private readonly http : HttpClient,
  ) { }

  // getRepairmanes(){
  //   return this.http.get<technicalModel[]>( environment.url_api+'/datas')
  // }
}
