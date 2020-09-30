package edu.ratingsdj.controllers;

import edu.ratingsdj.enteties.Pupil;
import edu.ratingsdj.repositories.PupilsRespository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PupilsController {

    private PupilsRespository pupilsRespository;

    public PupilsController(PupilsRespository pupilsRespository){
        this.pupilsRespository = pupilsRespository;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/pupils")
    public Pupil createPupil(@RequestBody Pupil pupil){
        return pupilsRespository.save(pupil);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/pupils")
    public List<Pupil> getAllpupils(){
        return pupilsRespository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/pupils")
    public Pupil updatePupil(@RequestBody Pupil updatedPupil){
        Pupil pupil = pupilsRespository.findById(updatedPupil.getId()).get();
        pupil.setFirstName(updatedPupil.getFirstName());
        pupil.setLastName(updatedPupil.getLastName());
        pupil.setDateOfBirth(updatedPupil.getDateOfBirth());
        return pupilsRespository.save(pupil);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/pupils/{id}")
    public void deletePupilByID(@PathVariable long id){
        pupilsRespository.deleteById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/pupils/profile/{id}" )
    public Pupil getPupilByID(@PathVariable long id) {
        return pupilsRespository.findById(id).get();
    }


}
