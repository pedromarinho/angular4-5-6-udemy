import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';
import { RestaurantsService } from '../../restaurants/restaurants.service';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menuItens: MenuItem[] = [];

  constructor(private route: ActivatedRoute,
    private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    const id = this.route.parent.snapshot.params['id'];
    console.log(id)
    this.restaurantsService.menuOfRestaurant(id)
      .subscribe(response => this.menuItens = response);
  }

}
