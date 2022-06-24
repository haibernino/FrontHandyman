import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { technicalModel } from 'src/app/shared/models/technicalModel';
import { ServiceTechnicalService } from 'src/app/shared/services/service-technical.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})

export class ServiceFormComponent implements OnInit {
  
  form: FormGroup;
  selectedCountryAdvanced: any;
  repairManes:technicalModel[] =[];
  filteredDataRaw!: any[];

  startDate!: Date;
  finishDate!: Date;
  minDate: Date = new Date();
  maxDate: Date = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private readonly technicalService:ServiceTechnicalService,
  ) {
    this.form = this.formBuilder.group({
      documentNumber: ['', Validators.required],
      serviceNumber: ['', Validators.required],
      startDate: ['', Validators.required],
      finishDate: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.repairManes = this.technicalService.technical;
  }

  filterDataRaw(event:any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.repairManes.length; i++) {
      let repairMan = this.repairManes[i];
      if (repairMan.id.toString().indexOf(query) == 0) {
        filtered.push(repairMan);
      }
    }
    this.filteredDataRaw = filtered;
  }

  onClickSave():void {
    console.log(this.form.value)
  }
}
