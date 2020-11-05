import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { City } from '../../shared/interfaces/city.model';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'weather-overview',
  templateUrl: './weather-overview.component.html'
})
export class WeatherOverviewComponent implements OnInit {
  cities: Array<City>;
  currentCity: City;

  private citySelectedSubscription: Subscription;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.getCities('../../assets/api/cities.json').subscribe(
      (cities) => {
        this.cities = cities;
        this.currentCity = this.cities[0];

        // We send the current selected city to the shared service
        this.weatherService.citySelected(this.currentCity);
      }
    );

    this.citySelectedSubscription = this.weatherService.citySelected$.subscribe(
      (selectedCity) => {
        this.currentCity = selectedCity;
      }
    );
  }
}
