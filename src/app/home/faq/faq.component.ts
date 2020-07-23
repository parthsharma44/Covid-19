import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from 'src/app/shared/header-service.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  constructor(public headerService:HeaderServiceService) { }

  ngOnInit(): void {
    this.headerService.BackArrow.next(true)
  }

}
