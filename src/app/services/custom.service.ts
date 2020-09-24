import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomService {


  addItem(item: any) {
    localStorage.setItem('data', JSON.stringify(item));
  }

}
