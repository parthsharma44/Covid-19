import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashBoardComponent } from './home/dash-board/dash-board.component';
import { TestComponent } from './home/test/test.component';
import { FAQComponent } from './home/faq/faq.component';
import { TestChatsComponent } from './test-chats/test-chats.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent, children:[
    {path:'', component:DashBoardComponent},
    {path:'test', component:TestComponent},
    {path:'faq',  component:FAQComponent}
  ]},
  {path:'test-chats',component:TestChatsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
