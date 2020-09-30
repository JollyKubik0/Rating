package edu.ratingsdj.repositories;

import edu.ratingsdj.enteties.Rating;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RatingsRepository extends CrudRepository<Rating, Long> {
    List<Rating> findAll();
}
