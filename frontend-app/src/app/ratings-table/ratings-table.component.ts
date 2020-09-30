import { Component, OnInit } from '@angular/core';
import { RatingsService } from '../services/ratings.service';

@Component({
  selector: 'app-ratings-table',
  templateUrl: './ratings-table.component.html',
  styleUrls: ['./ratings-table.component.css']
})
export class RatingsTableComponent implements OnInit {

  ratings = [];

  constructor(private ratingsSerivce : RatingsService) { }

  onDelete(ratingId){
    this.ratingsSerivce.deleteRating(ratingId)
  }

  ngOnInit(): void {
    this.ratingsSerivce.fetchRatings();
    this.ratings = this.ratingsSerivce.getRatings();
  }
  ngOnDestroy(){
    this.ratings.length = 0;
  }


}
