package com.fis.thuctap.myRepo.member;

import com.fis.thuctap.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderRepo extends JpaRepository<Order, Integer> {
}
