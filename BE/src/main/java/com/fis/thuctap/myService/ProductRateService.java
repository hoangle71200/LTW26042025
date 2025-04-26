package com.fis.thuctap.myService;

import com.fis.thuctap.entity.product.ProductRate;
import com.fis.thuctap.myRepo.IProductRateRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductRateService {
    @Autowired
    private IProductRateRepo productRateRepo;
    public List<ProductRate> getAllProductRate(){
        return productRateRepo.findAll();
    }
    public ProductRate getProductRateById(int id){
        return productRateRepo.findById(id).get();
    }
    public ProductRate add(ProductRate productRate){
        return productRateRepo.save(productRate);
    }
    public void update(ProductRate productRate){
        productRateRepo.save(productRate);
    }
    public void delete(int id){
        productRateRepo.deleteById(id);
    }
    public List<ProductRate> getProductRateByProductId(int id){
        return productRateRepo.findByProductId(id);
    }
    public List<ProductRate> findProductRatesByUserId(int userId){
        return productRateRepo.findProductRatesByUserId(userId);
    }
}
