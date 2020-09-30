package edu.ratingsdj.controllers;

import edu.ratingsdj.enteties.Teacher;
import edu.ratingsdj.repositories.TeachersRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TeachersController {
    private TeachersRepository teachersRepository;

    public TeachersController(TeachersRepository teachersRepository){
        this.teachersRepository = teachersRepository;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/teachers")
    public Teacher createTeacher(@RequestBody Teacher teacher){
        return teachersRepository.save(teacher);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/teachers")
    public List<Teacher> getAllteachers(){
        return teachersRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/teachers")
    public Teacher updateTeacher(@RequestBody Teacher updatedTeacher){
        Teacher teacher = teachersRepository.findById(updatedTeacher.getId()).get();
        teacher.setFirstName(updatedTeacher.getFirstName());
        teacher.setLastName(updatedTeacher.getLastName());
        teacher.setDateOfBirth(updatedTeacher.getDateOfBirth());
        teacher.setLessons(updatedTeacher.getLessons());
        return teachersRepository.save(teacher);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/teachers/{id}")
    public void deleteTeacherByID(@PathVariable long id){
        teachersRepository.deleteById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/teachers/profile/{id}" )
    public Teacher getTeacherByID(@PathVariable long id) {
        return teachersRepository.findById(id).get();
    }


}
