import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async greeting(name: string, temp: number, city: string) {
    return `Hello ${name}!, the temperature is ${temp} degrees celcius in ${city}`;
  }

  async getLocation(name: string, clientIp: string) {
    try {
      const locationResponse = await axios.get(`https://ipinfo.io/${clientIp}`);
      const locationData = locationResponse.data;

      const city = locationData.city;

      const apiKey = `2641683fe4f94ead3d2613f0f54886e1`;

      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${locationData.country}&APPID=${apiKey}`,
      );

      const weatherData = weatherResponse.data;
      const cityTemp = weatherData.main.temp;

      const greeting = await this.greeting(name, cityTemp, city);

      return {
        client_ip: clientIp,
        location: `${city}`,
        greeting: greeting,
      };
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return 'failed';
    }
  }
}
