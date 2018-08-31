import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: any;

  constructor() { }

  ngOnInit() {
  }

}
