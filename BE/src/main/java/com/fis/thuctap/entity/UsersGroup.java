package com.fis.thuctap.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "HOANG_LH_USERSGROUP")
public class UsersGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(name = "groupId", referencedColumnName = "id")
    private Group parentGroup;

    @ManyToOne
    @JoinColumn(name = "UsersId", referencedColumnName = "id")
    private Users parentUsers;

}
