package com.fis.thuctap.myRepo.admin;

import com.fis.thuctap.entity.product.ProductGroup;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IProductGroupRepo extends JpaRepository<ProductGroup, Integer> {
    public ProductGroup findByName(String name);
//    public ProductGroup findById(int id);
    public Optional<List<ProductGroup>> findProductGroupsByProductTypeId(int id);
}
