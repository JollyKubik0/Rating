package edu.ratingsdj.controllers;

import edu.ratingsdj.enteties.Lesson;
import edu.ratingsdj.enteties.Rating;
import edu.ratingsdj.enteties.Teacher;
import edu.ratingsdj.repositories.RatingsRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RatingsController {

    private RatingsRepository ratingsRepository;

    public RatingsController(RatingsRepository ratingsRepository) {
        this.ratingsRepository = ratingsRepository;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/ratings")
    public List<Rating> getAllRatings(){
        return ratingsRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/ratings")
    public Rating createRating(@RequestBody Rating rating){
        return ratingsRepository.save(rating);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/rating/{id}")
    public void createRating(@PathVariable long id){
         ratingsRepository.deleteById(id);
    }

}
