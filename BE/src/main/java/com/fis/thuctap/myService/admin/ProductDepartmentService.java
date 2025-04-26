package com.fis.thuctap.myService.admin;

import com.fis.thuctap.entity.product.ProductDepartment;
import com.fis.thuctap.entity.product.ProductType;
import com.fis.thuctap.myRepo.admin.IProductDepartmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductDepartmentService {
    @Autowired
    private IProductDepartmentRepo productDepartmentRepo;
    public List<ProductDepartment> getAll() {
        return productDepartmentRepo.findAll();
    }
    public ProductDepartment getById(int id) {
        return productDepartmentRepo.findById(id).get();
    }
    public ProductDepartment add(ProductDepartment productDepartment) {
        productDepartment.setTimeCreated(LocalDate.now().toString());
        productDepartment.setStatus("Online");
        return productDepartmentRepo.save(productDepartment);
    }
    public ProductDepartment update(ProductDepartment productDepartment) {
        productDepartment.setTimeUpdated(LocalDate.now().toString());
        return productDepartmentRepo.save(productDepartment);
    }
    public void delete(int id) {
        productDepartmentRepo.deleteById(id);
    }
    public List<String> listAllName() {
        List<ProductDepartment> list = productDepartmentRepo.findAll();
        List<String> listName = new ArrayList<String>();
        for (ProductDepartment i : list) {
            listName.add(i.getName());
        }
        return listName;
    }
}
