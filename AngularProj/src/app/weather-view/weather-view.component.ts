import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.css']
})


export class WeatherViewComponent{
  public searchText: string = '';
  public currentTemp: Number | undefined;
  public weatherCondition: string | undefined;
  public showTemp: Boolean = false;
  public timeZone: string | undefined;
  public img: any | undefined;
  public city: string | undefined;
  public state: string | undefined;


   onCitySubmit = async () => {
    console.log(this.searchText)
    let url = 'https://api.weatherapi.com/v1/current.json'
    let API_KEY = '8eb1ea8eac8b4bbfb51223921230508'
 
    try{
      this.showTemp = true;
      let jsonData = await fetch(url +'?key=' + API_KEY + '&q=' + this.searchText)
      let weatherData = await jsonData.json();
      this.currentTemp = weatherData.current.temp_f;
      this.timeZone = weatherData.location.tz_id;
      this.weatherCondition = weatherData.current.condition.text;
      this.img = weatherData.current.condition.icon;
      this.city = weatherData.location.name;
      this.state = weatherData.location.region;
    }catch(e){
      throw e;
      console.log(e)
    }

    this.searchText = ''; //Setting input field back to original state.


  }
}
