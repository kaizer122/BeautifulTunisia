export type Hotel = {
  id: string;
  name: string;
  image: any;
  rate: number;
  price: number;
  latlng: {
    latitude: number;
    longitude: number;
  };
};

export type Hotels = Hotel[];

export type Place = {
  id: number;
  name: string;
  description: string;
  image: any;
  rate: string;
  mapInitialRegion: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  hotels: Hotels;
};

export type Places = Place[];

export type Region = {
  id: number;
  name: string;
  image: any;
  places: Places;
};

export type Regions = Region[];
