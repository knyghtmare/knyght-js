import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { HttpClientModule } from '@angular/common/http';

import { RecordsService } from './records.service';

import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DataComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    /* RouterModule.forRoot(
      {
        path: 'data/',
        component: DataComponent
      },
      {
        path: 'home/',
        component: HomeComponent
      }
    )
    */
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
