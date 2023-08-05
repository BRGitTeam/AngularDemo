import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  title = 'AngularProj';
  @ViewChild(NavbarComponent) navbarChild: NavbarComponent | undefined;
  @ViewChild(WeatherViewComponent) weatherViewChild: WeatherViewComponent | undefined;
  @ViewChild(FooterComponent) footChild: FooterComponent | undefined;
}
