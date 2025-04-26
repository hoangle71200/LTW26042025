package com.fis.thuctap.myRepo.admin;

import com.fis.thuctap.entity.product.ProductDepartment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductDepartmentRepo extends JpaRepository<ProductDepartment, Integer> {
    public ProductDepartment findByName(String name);
//    public ProductDepartment findById(int id);
}
