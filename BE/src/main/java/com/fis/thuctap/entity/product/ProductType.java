package com.fis.thuctap.entity.product;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

// Loại sản phẩm
@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "HOANG_LH_PRODUCT_TYPE")
public class ProductType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private String status;
    private String timeCreated;
    private String timeUpdated;
    private String image;
    private String note;
    @ManyToOne
    @JoinColumn(name = "department_id")
    private ProductDepartment productDepartment;
}