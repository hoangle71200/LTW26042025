package com.fis.thuctap.entity;

import com.fis.thuctap.entity.product.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

// đơn đặt hàng
@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "HOANG_LH_BOOKING")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    // thông tin người đặt
    @ManyToOne
    @JoinColumn(name = "users_id")
    private Users user;
    // thông tin người nhận
    private String name;
    private String address;
    private String phone;
    private String email;
    // thông tin đơn hàng
    private String bookingDate;
    private String note;
    @ManyToOne
    @JoinColumn(name = "sale_id")
    private Sale sale;
    private int totalPrice;
}
