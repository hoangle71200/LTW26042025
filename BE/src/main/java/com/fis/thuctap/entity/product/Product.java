package com.fis.thuctap.entity.product;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.sql.Date;

// Chào hàng
@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "HOANG_LH_PRODUCT")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private Date timeCreated;
    private Date timeUpdated;
    private int price;
    private int quantity;
    private String image;
    private String video;
    private String note;
    private float rating;
    private String status;
    @ManyToOne
    @JoinColumn(name = "sell_type_id")
    private SellType sellType;
    @ManyToOne
    @JoinColumn(name = "product_group_id")
    private ProductGroup productGroup;
    @ManyToOne
    @JoinColumn(name = "product_department_id")
    private ProductDepartment productDepartment;

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", timeCreated='" + timeCreated + '\'' +
                ", price=" + price +
                ", quantity=" + quantity +
                ", image='" + image + '\'' +
                ", video='" + video + '\'' +
                ", note='" + note + '\'' +
                ", rating=" + rating +
                ", status='" + status + '\'' +
                ", sellType=" + sellType +
                ", productGroup=" + productGroup +
                ", productDepartment=" + productDepartment +
                '}';
    }
}
