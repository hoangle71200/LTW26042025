package com.fis.thuctap.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "HOANG_LH_SHIP")
public class Ship {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private String image;
    private String mst;
    private String address;
    private String phone;
    private String email;
    // website/ API đầu nối
    private String link;
    private String type;
    // thời gian giao hàng
    private String time;
    // chi phí vận chuyển
    private String price;
    private String status;
    // khả năng vận chuyển: trọng lượng/ kích thước tối đa
    // chính sách: hoàn trả/ bảo hiểm
}
