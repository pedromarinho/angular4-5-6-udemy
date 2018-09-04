import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RestaurantsService } from '../../restaurants/restaurants.service';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  itens: Observable<MenuItem[]>;

  constructor(private route: ActivatedRoute,
    private restaurantService: RestaurantsService) { }

  ngOnInit() {
    const id = this.route.parent.snapshot.params['id'];
    this.itens = this.restaurantService.menuOfRestaurant(id);
  }

  addMenuItem(menuItem: MenuItem) {
    console.log(menuItem);
  }

}
