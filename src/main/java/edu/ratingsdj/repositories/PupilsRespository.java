package edu.ratingsdj.repositories;

import edu.ratingsdj.enteties.Pupil;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PupilsRespository extends CrudRepository<Pupil, Long> {

    List<Pupil> findAll();
}
