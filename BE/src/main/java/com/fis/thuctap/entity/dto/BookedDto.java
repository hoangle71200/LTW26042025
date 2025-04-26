package com.fis.thuctap.entity.dto;

import com.fis.thuctap.entity.Booking;
import com.fis.thuctap.entity.product.Product;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class BookedDto {
    private int id;
    private int productId;
    private int quantity;
    private int totalPrice;
    @ManyToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;
}
