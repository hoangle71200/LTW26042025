package com.fis.thuctap.myRepo;

import com.fis.thuctap.entity.product.ProductRate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.awt.print.Pageable;
import java.util.List;

public interface IProductRateRepo extends JpaRepository<ProductRate, Integer> {
    List<ProductRate> findByProductId(int productId);
    List<ProductRate> findProductRatesByUserId(int userId);
}
