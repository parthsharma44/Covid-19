import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from 'src/app/shared/header-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private headerService:HeaderServiceService) { }

  ngOnInit(): void {
    this.headerService.BackArrow.next(true)
  }

}
