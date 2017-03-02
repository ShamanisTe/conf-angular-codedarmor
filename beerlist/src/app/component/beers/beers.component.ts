import { Component, OnInit } from '@angular/core';
import {BeerService} from '../../beer.service';


@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  beers: string[] =  ["Bière sans alcool"];
  constructor(private _beersService: BeerService){}

  ngOnInit() {
    this.beers = this._beersService.beers;
  }

}
