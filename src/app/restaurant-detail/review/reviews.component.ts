import { Component, OnInit } from '@angular/core';
import { Review } from './review.model';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<Review[]>;

  constructor(private route: ActivatedRoute,
    private restaurantService: RestaurantsService) { }

  ngOnInit() {
    const id = this.route.parent.snapshot.params['id'];
    this.reviews = this.restaurantService.reviewsOfRestaurant(id);
  }

}
