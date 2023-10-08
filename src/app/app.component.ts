import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mahyarniknaddaf.weblog';
  loadingcheck: boolean = false;
  @HostListener('window:load', ['$event'])
  onload() {
    this.loadingcheck = true;
  }
}
