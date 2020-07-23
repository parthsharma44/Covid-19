import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit {
  BackArrow

  constructor(public Service:HeaderServiceService) {
  }

  ngOnInit(): void {
    this.Service.BackArrow.subscribe(res=>{
      this.BackArrow = res
    })
  }

}
