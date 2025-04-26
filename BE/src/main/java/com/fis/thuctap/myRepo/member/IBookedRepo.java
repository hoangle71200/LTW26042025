package com.fis.thuctap.myRepo.member;

import com.fis.thuctap.entity.Booked;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBookedRepo extends JpaRepository<Booked, Integer> {
}
