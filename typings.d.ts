
interface WeatherData {
    list?: {
      dt: number;
      dt_txt: string;
      main: {
        temp: number;
      };
      weather: {
        main: string;
        description: string;
      }[];
      wind: {
        speed: number;
      };
      clouds: {
        all: number;
      };
      image: string;
    }[];
}