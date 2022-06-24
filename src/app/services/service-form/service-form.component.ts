import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceModel } from 'src/app/shared/models/serviceModel';
import { technicalModel } from 'src/app/shared/models/technicalModel';
import { ServiceTechnicalService } from 'src/app/shared/services/service-technical.service';
import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})

export class ServiceFormComponent implements OnInit {
  
  form: FormGroup;
  selectedCountryAdvanced: any;
  repairManes:technicalModel[] = [];
  services:ServiceModel[] = [];
  filteredDataRaw!: any[];

  startDate!: Date;
  finishDate!: Date;
  minDate: Date = new Date();
  maxDate: Date = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private readonly technicalService:ServiceTechnicalService,
    private readonly serrviceService:ServiceService
  ) {
    this.form = this.formBuilder.group({
      documentNumber: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      serviceNumber: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(5)]],
      startDate: ['', Validators.required],
      finishDate: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.repairManes = this.technicalService.technical;
    this.services = this.serrviceService.serviceData;
  }

  eventFilter (event:any, dataRaw:any){
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < dataRaw.length; i++) {
      let raw = dataRaw[i];
      if (raw.id.toString().indexOf(query) == 0) {
        filtered.push(raw);
      }
    }
    this.filteredDataRaw = filtered;
  }


  filterDataRawDocument(event:any) {
    let dataRaw:any;   
    dataRaw = this.repairManes;
    this.eventFilter(event,dataRaw);
  }

  filterDataRawSerice(event:any){
    let dataRaw:any
    dataRaw = this.services;
    this.eventFilter(event,dataRaw);
  }

  get documentNumber():any{
    return this.form.get('documentNumber');
  }

  onClickSave():void {
    console.log(this.form.value)
  }
}
