import { getLocaleNumberSymbol } from '@angular/common';
import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) {

   }
}

 function getAlbum(id: number) {
     
  return this._http.get(this._albumUrl)
 }


