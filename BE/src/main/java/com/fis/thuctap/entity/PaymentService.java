package com.fis.thuctap.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "HOANG_LH_PAYMENT_SERVICE")
public class PaymentService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private String type;
    private String status;
    private float paymentPrice;
    private int timeLoading;
    private String link;
    private String contactEmail;
    private String contactPhone;
    private Date timeCreated;
    private Date timeUpdated;
    private String note;
}
