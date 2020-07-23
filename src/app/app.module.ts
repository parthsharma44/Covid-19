import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashBoardComponent } from './home/dash-board/dash-board.component';
import { TestComponent } from './home/test/test.component';
import { FAQComponent } from './home/faq/faq.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BottomNavbarComponent } from './Shared/bottom-navbar/bottom-navbar.component';
import { TestChatsComponent } from './test-chats/test-chats.component';
import { HeaderNavbarComponent } from './shared/header-navbar/header-navbar.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashBoardComponent,
    TestComponent,
    FAQComponent,
    BottomNavbarComponent,
    TestChatsComponent,
    HeaderNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
