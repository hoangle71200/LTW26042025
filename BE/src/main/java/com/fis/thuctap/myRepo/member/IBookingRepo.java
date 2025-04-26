package com.fis.thuctap.myRepo.member;

import com.fis.thuctap.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBookingRepo extends JpaRepository<Booking, Integer> {
}
