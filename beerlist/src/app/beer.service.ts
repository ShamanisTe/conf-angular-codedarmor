import { Injectable } from '@angular/core';

@Injectable()
export class BeerService {

  constructor() { }

  get beers(): string[]{
    return ["Philomenn", "Britt", "Coreff", "ti-chope", "Dremmwel", "la Braise", "Celtika", "Morgane"];
  }

}
