import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  projectsitems: boolean = false;
  public projectsitemsfunction() {
    if (this.projectsitems === false) {
      this.projectsitems = true;
    }
    else {
      this.projectsitems = false;
    }
  }
}
