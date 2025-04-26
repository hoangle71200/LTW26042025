package com.fis.thuctap.entity;

import com.fis.thuctap.entity.product.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "HOANG_LH_SALE")
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String saleID;
    private String saleName;
    private String content;
    private int quantity;
    private double price;
    private String timeCreated;
    private String timeStart;
    private String timeEnd;
    private String type;
    private String status;
    private String note;
}