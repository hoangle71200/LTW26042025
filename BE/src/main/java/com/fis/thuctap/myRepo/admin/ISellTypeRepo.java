package com.fis.thuctap.myRepo.admin;

import com.fis.thuctap.entity.product.SellType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ISellTypeRepo extends JpaRepository<SellType, Integer> {
}
