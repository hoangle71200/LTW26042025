package com.fis.thuctap.myRepo.admin;

import com.fis.thuctap.entity.product.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IProductTypeRepo extends JpaRepository<ProductType, Integer> {
//    public ProductType findById(int id);
    public Optional<List<ProductType>> findByName(String name);
    public Optional<List<ProductType>> findByNameContaining(String name);
    public Optional<List<ProductType>> findProductTypesByProductDepartmentId(int id);
}
