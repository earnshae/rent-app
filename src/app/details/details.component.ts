import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  housingService = inject(HousingService);

  housingLocation: HousingLocation | undefined;

  

  constructor() {
    const housingLocationID = Number(this.route.snapshot.params['id']);

    this.housingLocation = this.housingService.getHousingLocationById(housingLocationID);
  
  }

}
