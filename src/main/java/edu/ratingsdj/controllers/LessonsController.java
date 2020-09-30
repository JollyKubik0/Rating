package edu.ratingsdj.controllers;

import edu.ratingsdj.enteties.Lesson;
import edu.ratingsdj.repositories.LessonsRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LessonsController {

    private LessonsRepository lessonsRepository;

    public LessonsController(LessonsRepository lessonsRepository) {
        this.lessonsRepository = lessonsRepository;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/lessons")
    public Lesson createLesson(@RequestBody Lesson lesson){
        return lessonsRepository.save(lesson);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/lessons")
    public List<Lesson> getAllLessons(){
        return lessonsRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/lessons/{id}")
    public void deleteLessonByID(@PathVariable long id){
        lessonsRepository.deleteById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/lessons")
    public Lesson updateLesson(@RequestBody Lesson updatedLesson){
        Lesson lesson = lessonsRepository.findById(updatedLesson.getId()).get();
        lesson.setName(updatedLesson.getName());
        return lessonsRepository.save(lesson);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/lessons/info/{id}")
    public Lesson getLessonByID(@PathVariable long id) {
        return lessonsRepository.findById(id).get();
    }

}
