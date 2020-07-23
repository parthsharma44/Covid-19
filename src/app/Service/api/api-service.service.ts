import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    
  }

  getCountries(){
    let url = "https://api.covid19api.com/countries"
    return this.http.get(url)
  }

  getSingleCountryDetails(country):Observable<any>{
    let url = "https://api.covid19api.com/total/dayone/country/" + country
    return this.http.get<any>(url)
  }

  getGlobalValue():Observable<any>{
    let url = "https://api.covid19api.com/summary"
    return this.http.get<any>(url)
  }

}
