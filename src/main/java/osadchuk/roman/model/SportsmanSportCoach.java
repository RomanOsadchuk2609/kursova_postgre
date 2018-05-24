package osadchuk.roman.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@Table(name = "sportsman_sport_coach")
@EntityListeners(AuditingEntityListener.class)
public class SportsmanSportCoach {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    @ManyToOne(cascade=CascadeType.REMOVE)
    public Sportsman sportsman;
    @ManyToOne(cascade=CascadeType.REMOVE)
    public KindOfSport kindOfSport;
    @ManyToOne(cascade=CascadeType.REMOVE)
    public SportCategory sportCategory;
    @ManyToOne(cascade=CascadeType.REMOVE)
    public Coach coach;

    public SportsmanSportCoach() {
    }

    public SportsmanSportCoach(Sportsman sportsman, KindOfSport kindOfSport,
                               SportCategory sportCategory, Coach coach) {
        this.sportsman = sportsman;
        this.kindOfSport = kindOfSport;
        this.sportCategory = sportCategory;
        this.coach = coach;
    }
    /*public SportsmanSportCoach(int id, Sportsman sportsman, KindOfSport kindOfSport, SportCategory sportCategory, Coach coach) {
        this.id = id;
        this.sportsman = sportsman;
        this.kindOfSport = kindOfSport;
        this.sportCategory = sportCategory;
        this.coach = coach;
    }*/

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Sportsman getSportsman() {
        return sportsman;
    }

    public void setSportsman(Sportsman sportsman) {
        this.sportsman = sportsman;
    }

    public KindOfSport getKindOfSport() {
        return kindOfSport;
    }

    public void setKindOfSport(KindOfSport kindOfSport) {
        this.kindOfSport = kindOfSport;
    }

    public SportCategory getSportCategory() {
        return sportCategory;
    }

    public void setSportCategory(SportCategory sportCategory) {
        this.sportCategory = sportCategory;
    }

    public Coach getCoach() {
        return coach;
    }

    public void setCoach(Coach coach) {
        this.coach = coach;
    }
}
