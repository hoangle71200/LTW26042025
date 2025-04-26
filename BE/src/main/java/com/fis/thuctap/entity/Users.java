package com.fis.thuctap.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "HOANG_LH_USERS")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String gender;
    private String birthday;
    private String address;
    private String username;
    private String password;
    private String email;
    private String phone;
    private String role;
    private String type;
    private String lockStatus;
    private String timeCreated;
    private String image;
}
