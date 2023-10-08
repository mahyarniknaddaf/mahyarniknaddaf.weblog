import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingComponent } from './pages/setting/setting.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ErrorComponent } from './error/error.component';
import { LoadingComponent } from './loading/loading.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './pages/header/header.component';
import { BodyComponent } from './pages/body/body.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/body/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    NotfoundComponent,
    ErrorComponent,
    LoadingComponent,
    PagesComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
