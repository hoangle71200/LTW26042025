package com.fis.thuctap.entity.product;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

// Loại hình gian hàng
@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "HOANG_LH_SELL_TYPE")
public class SellType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private String status;
    private String image;
    private String timeCreated;
    private String timeUpdated;
    private String note;

    @Override
    public String toString() {
        return "SellType{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", image='" + image + '\'' +
                ", timeCreated='" + timeCreated + '\'' +
                ", note='" + note + '\'' +
                '}';
    }
}