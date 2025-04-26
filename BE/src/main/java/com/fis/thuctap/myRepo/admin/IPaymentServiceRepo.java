package com.fis.thuctap.myRepo.admin;

import com.fis.thuctap.entity.PaymentService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPaymentServiceRepo extends JpaRepository<PaymentService, Integer> {
}
