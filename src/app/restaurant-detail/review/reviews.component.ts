import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { Review } from './review.model';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Review[] = [];

  constructor(private route: ActivatedRoute,
    private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    const id = this.route.parent.snapshot.params['id'];
    console.log(id)
    this.restaurantsService.reviewsOfRestaurant(id)
      .subscribe(response => this.reviews = response);
  }

}
