import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiServiceService } from 'src/app/Service/api/api-service.service';
import { HeaderServiceService } from 'src/app/shared/header-service.service';
import { GoogleChartInterface } from 'ng2-google-charts';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit,OnDestroy {

  countries = {}
  infected=0
  recovered=0
  deaths=0
  date:any
  TotalCases=0
  TotalDeaths=0
  TotalRecovered=0
  ForTotalDataDate:any
  pieChart: GoogleChartInterface = {
    chartType: 'PieChart'
  }

  constructor(private api:ApiServiceService, public headerService:HeaderServiceService) { 
    this.headerService.BackArrow.next(false)
    this.api.getGlobalValue().subscribe(res=>{
      this.TotalCases = res.Global.TotalConfirmed
      this.TotalDeaths = res.Global.TotalDeaths
      this.TotalRecovered = res.Global.TotalRecovered
      this.ForTotalDataDate = res.Date
    })
  }

  initChart(){

    let datatable = [];
    datatable.push(["Country","Infected"])
    this.api.getGlobalValue().subscribe(res=>{
      
      datatable.push([
        res.Countries.Country ,  res.Countries.TotalConfirmed
      ])
    })
    // console.log(datatable)
    this.pieChart = {
      chartType: 'PieChart',
      dataTable: datatable,
      //firstRowIsData: true,
      options: {'Country': 'Cases'},
    };
  }

  ngOnInit(): void {
    this.api.getCountries().subscribe(res=>{
      // console.log(res)
      this.countries = res
    })

    this.initChart();
   
  }

  getCountryDetail(country){
    this.api.getSingleCountryDetails(country).subscribe((res) =>{
      // console.log(res)
      var index = res.length - 1
      this.infected = res[index].Confirmed
      this.recovered = res[index].Recovered
      this.deaths = res[index].Deaths
      this.date = res[index].Date
    })
  }

  ngOnDestroy(){
    this.headerService.BackArrow.next(true)
  }
}
