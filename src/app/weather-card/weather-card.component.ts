import { Component, OnInit, Input } from "@angular/core";
import { WeatherService } from '../weather.service';

@Component({
  selector: "app-weather-card",
  templateUrl: "./weather-card.component.html",
  styleUrls: ["./weather-card.component.css"]
})
export class WeatherCardComponent implements OnInit {
  @Input() days: number;
  @Input() weather: WeatherService;
  constructor() {}

  ngOnInit() {}
}
