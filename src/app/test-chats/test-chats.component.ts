import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../shared/header-service.service';

@Component({
  selector: 'app-test-chats',
  templateUrl: './test-chats.component.html',
  styleUrls: ['./test-chats.component.css']
})
export class TestChatsComponent implements OnInit {
  AskingQuestions1:boolean = true;
  RightSideAnswerNone:boolean = false;
  RightSideAnswerBreathing:boolean = false;
  RightSideAnswerFever:boolean = false;
  RightSideAnswerCough:boolean = false;
  NoneOfTheAboveAnswer:boolean = false;
  AskingQuestions2:boolean = false;
  RightSideAnswerNone2:boolean = false;
  NoneOfTheAboveAnswer2:boolean = false;
  AskingQuestions3:boolean = false;
  RightSideAnswerNO1:boolean = false;
  WhichOfTheFollowingApplyToYou:boolean = false;
  AskingQuestions4:boolean = false;
  RightSideAnswerrrOfNoneOfTheAbove:boolean = false;
  YourRiskIsLow:boolean = false;
  AskingQuestions5:boolean = false;
  RightSideAnswerOfOk:boolean = false;
  Diabetes:boolean = false;
  Hypertension:boolean = false;
  LungDisease:boolean = false;
  HeartDisease:boolean = false;
  RightSideAnswerYes1:boolean = false;
  Ihaverecentlyinteracted:boolean = false;
  IAmAHealthcareWorker:boolean = false;
  HightRisk:boolean = false;
  unWellThings = []
  WellThings = []
  data:any

  constructor(public service:HeaderServiceService) {
    this.service.BackArrow.next(true)
  }

  ngOnInit(): void {
  }

  unWell(event){
    console.log(event)
    this.unWellThings.push(event)
    // console.log(this.unWellThings)
  }

  nowShow(){
    console.log(this.unWellThings)
    
    this.unWellThings.forEach(res=>{
      console.log(res)
      this.data = res
    })
    // console.log(this.data)

    if(this.data != null )
    {
      this.HightRisk = true
      this.AskingQuestions5=true;
    }else{
      this.YourRiskIsLow = true
      this.AskingQuestions5=true;
    }

  }

  Well(event){
    console.log(event)
    this.WellThings.push(event)
    // console.log(this.WellThings)
  }

}
