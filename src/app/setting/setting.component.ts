import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  settingcheck: boolean = false;
  // settingresultcheck:boolean=false;
  settinglanguagecheck: boolean = false;
  settingthemecheck: boolean = false;
  public settingfunction() {
    if (this.settingcheck === false) {
      this.settingcheck = true;
    }
    else {
      this.settingcheck = false;
      this.settinglanguagecheck = false;
      this.settingthemecheck = false;
    }
  }
  public settinglanguagefunction() {
    if (this.settinglanguagecheck === false || this.settingthemecheck === true) {
      this.settinglanguagecheck = true;
      this.settingthemecheck = false;
    }
    else {
      this.settinglanguagecheck = false;
    }
  }
  public settingthemefunction() {
    if (this.settinglanguagecheck === true || this.settingthemecheck === false) {
      this.settinglanguagecheck = false;
      this.settingthemecheck = true;
    }
    else {
      this.settingthemecheck = false;
    }
  }
  public printfunction() {
    window.print();
  }
}
