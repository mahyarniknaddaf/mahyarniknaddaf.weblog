import { HostListener, Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})


export class ErrorComponent {
  errorcheck: boolean = false;
  backgroundcolorcheck: string = "";
  errorboxtxt: string = "";
  errorboxiconimg: string = "";
  public closefunction() {
    this.errorcheck = false;
  }
  @HostListener('window:load', ['$event'])
  onload() {
    this.errorcheck = true;
    this.backgroundcolorcheck = "rgba(255, 166, 0,0.6)";
    this.errorboxtxt = "Page loaded successfully";
    this.errorboxiconimg = "assets/img/icon/warning.png";
    setTimeout(() => {
      this.errorcheck = false;
    }, 3000);
  }
  @HostListener('window:online', ['$event'])
  ononline() {
    this.errorcheck = true;
    this.backgroundcolorcheck = "rgba(0, 166, 0,0.6)";
    this.errorboxtxt = "Internet access is connected";
    this.errorboxiconimg = "assets/img/icon/success.png";
    setTimeout(() => {
      this.errorcheck = false;
    }, 3000);
  }
  @HostListener('window:offline', ['$event'])
  onoffline() {
    this.errorcheck = true;
    this.backgroundcolorcheck = "rgba(255, 0, 0,0.6)";
    this.errorboxtxt = "Internet access was interrupted";
    this.errorboxiconimg = "assets/img/icon/error.png";
    setTimeout(() => {
      this.errorcheck = false;
    }, 3000);
  }
}