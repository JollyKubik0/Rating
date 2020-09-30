package edu.ratingsdj.repositories;

import edu.ratingsdj.enteties.Lesson;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LessonsRepository extends CrudRepository<Lesson, Long> {
    List<Lesson> findAll();
}
