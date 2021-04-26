import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TourGuideService {
  tourSchema;
  constructor(private http: HttpClient) {
  }

  getIntroSchemeByScreen(screen){
    if(this.tourSchema){
      return this.tourSchema[screen];
    } else {
      this.getIntroJSON().subscribe(data => {
        this.tourSchema = data;
        return this.tourSchema[screen];
      });
    }
  }

  getIntroJSON(): Observable<any> {
    return this.http.get("./assets/json/config.json");
  }

}
