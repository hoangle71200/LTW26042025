package com.fis.thuctap.entity.product;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

// Nhóm sản phẩm
@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "HOANG_LH_PRODUCT_GROUP")
public class ProductGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private String status;
    private String timeCreated;
    private String timeUpdated;
    private String image;
    @ManyToOne
    @JoinColumn(name = "product_type_id")
    private ProductType productType;
    private String note;
}
