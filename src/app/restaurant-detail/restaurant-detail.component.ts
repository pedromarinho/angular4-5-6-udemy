import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private route: ActivatedRoute,
    private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.restaurantsService.getRestaurantById(id)
      .subscribe(response => this.restaurant = response)
  }

}
