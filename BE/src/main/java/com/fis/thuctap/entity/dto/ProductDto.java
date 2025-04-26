package com.fis.thuctap.entity.dto;

import com.fis.thuctap.entity.product.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class ProductDto {
    private int id;
    private String name;
    private String description;
    private String timeCreated;
    private int price;
    private int quantity;
    private int totalPrice;
    private String image;
    private String video;
    private String note;
    private List<ProductRate> productRateList;
    private String status;
    private SellType sellType;
    private ProductType productType;
    private ProductGroup productGroup;
    private ProductDepartment productDepartment;
}
