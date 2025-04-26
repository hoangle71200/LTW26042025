package com.fis.thuctap.myService.member;

import com.fis.thuctap.entity.product.Product;
import com.fis.thuctap.entity.product.ProductDepartment;
import com.fis.thuctap.entity.product.ProductGroup;
import com.fis.thuctap.entity.product.ProductType;
import com.fis.thuctap.myRepo.admin.IProductDepartmentRepo;
import com.fis.thuctap.myRepo.admin.IProductGroupRepo;
import com.fis.thuctap.myRepo.admin.IProductTypeRepo;
import com.fis.thuctap.myRepo.member.IProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private IProductRepo productRepo;
    @Autowired
    private IProductGroupRepo productGroupRepo;
    @Autowired
    private IProductTypeRepo productTypeRepo;
    @Autowired
    private IProductDepartmentRepo productDepartmentRepo;
    public List<Product> getAll() {
        return productRepo.findAll();
    }
    public Page<Product> getAllByPage(Pageable pageable) {
        return productRepo.findAll(pageable);
    }
    public Product getById(int id) {
        return productRepo.findById(id).get();
    }
    public Product add(Product product) {
        product.setTimeCreated(Date.valueOf(LocalDate.now()));
        ProductDepartment productDepartment = product.getProductGroup().getProductType().getProductDepartment();
        product.setProductDepartment(productDepartment);
        product.setStatus("Online");
        return productRepo.save(product);
    }
    public Product update(Product product) {
        product.setTimeUpdated(Date.valueOf(LocalDate.now()));
        return productRepo.save(product);
    }
    public void delete(int id) {
        productRepo.deleteById(id);
    }
    public List<String> listAllName() {
        List<Product> list = productRepo.findAll();
        List<String> listName = new ArrayList<String>();
        for (Product i : list) {
            listName.add(i.getName());
        }
        return listName;
    }
    public void hide (int id) {
        Product hide = productRepo.findById(id).get();
        hide.setStatus("Offline");
        productRepo.save(hide);
    }
    public List<Product> findProductsByProductDepartmentId(Integer id) {
        return productRepo.findProductsByProductDepartmentId(id).get();
    }
    public Page<Product> findProductsByTimeCreatedBeforeAndTimeCreatedAfter(String timeCreatedBefore,
                                                                            String timeCreatedAfter,
                                                                            Pageable pageable) {
        return productRepo.findProductsByTimeCreated(timeCreatedBefore, timeCreatedAfter, pageable).get();
    }
    public Page<Product> findProductsByTimeCreatedAndProductInfor(String productGroup,
                                                                 String sellType,
                                                                 String before,
                                                                 String after, Pageable pageable) {
        return productRepo.findProductsByTimeCreatedAndProductInfor(productGroup, sellType, before, after, pageable).get();
    }
}