package edu.ratingsdj.enteties;

import javax.persistence.*;

@Entity
@Table(name = "ratings")
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String dateOfCreation;
    private long teacherId;
    private long lessonId;
    private long pupilId;
    private int rating;

    public long getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(long teacherId) {
        this.teacherId = teacherId;
    }

    public long getLessonId() {
        return lessonId;
    }

    public void setLessonId(long lessonId) {
        this.lessonId = lessonId;
    }

    public long getPupilId() {
        return pupilId;
    }

    public void setPupilId(long pupilId) {
        this.pupilId = pupilId;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDateOfCreation() {
        return dateOfCreation;
    }

    public void setDateOfCreation(String dateOfCreation) {
        this.dateOfCreation = dateOfCreation;
    }

    @Override
    public String toString() {
        return "Rating{" +
                "id=" + id +
                ", dateOfCreation='" + dateOfCreation + '\'' +
                ", teacherId=" + teacherId +
                ", lessonId=" + lessonId +
                ", pupilId=" + pupilId +
                ", rating=" + rating +
                '}';
    }
}
