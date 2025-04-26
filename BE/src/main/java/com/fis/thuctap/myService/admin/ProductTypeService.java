package com.fis.thuctap.myService.admin;

import com.fis.thuctap.entity.product.ProductType;
import com.fis.thuctap.entity.product.SellType;
import com.fis.thuctap.myRepo.admin.IProductTypeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductTypeService {
    @Autowired
    private IProductTypeRepo productTypeManagementRepo;
    public List<ProductType> getAllProductTypes() {
        return productTypeManagementRepo.findAll();
    }
    public ProductType getProductTypeById(int id) {
        return productTypeManagementRepo.findById(id).get();
    }
    public ProductType addProductType(ProductType productType) {
        productType.setTimeCreated(LocalDate.now().toString());
        productType.setStatus("Online");
        return productTypeManagementRepo.save(productType);
    }
    public ProductType updateProductType(ProductType productType) {
        productType.setTimeUpdated(LocalDate.now().toString());
        return productTypeManagementRepo.save(productType);
    }
    public void deleteProductTypeById(int id) {
        productTypeManagementRepo.deleteById(id);
    }
    public List<String> listAllName() {
        List<ProductType> list = productTypeManagementRepo.findAll();
        List<String> listName = new ArrayList<String>();
        for (ProductType i : list) {
            listName.add(i.getName());
        }
        return listName;
    }
    public List<ProductType> findProductTypesByProductDepartmentId(int id) {
        return productTypeManagementRepo.findProductTypesByProductDepartmentId(id).get();
    }
}
