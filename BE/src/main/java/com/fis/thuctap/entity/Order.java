package com.fis.thuctap.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

// đơn hàng
@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "HOANG_LH_ORDER")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    // thông tin nhận hàng

    @ManyToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;
    // thông tin đơn hàng
    private String orderStatus;
    @ManyToOne
    @JoinColumn(name = "payment_service_id")
    private PaymentService paymentService;
    // thông tin giao hàng
    @ManyToOne
    @JoinColumn(name = "ship_id")
    private Ship ship;
    private String shipDate;
    // mã theo dõi đơn hàng
    private String orderKey;
}