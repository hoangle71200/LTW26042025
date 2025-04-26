package com.fis.thuctap.entity.product;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "HOANG_LH_VIDEO_DN")
public class VideoDN {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String description;
    private String author;
    private String timeCreated;
    private String videoUrl;
    private String note;

    @Override
    public String toString() {
        return "VideoDN{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", author='" + author + '\'' +
                ", timeCreated='" + timeCreated + '\'' +
                ", videoUrl='" + videoUrl + '\'' +
                ", note='" + note + '\'' +
                '}';
    }
}
