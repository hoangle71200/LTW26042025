package com.fis.thuctap.myService.admin;
import com.fis.thuctap.entity.product.ProductGroup;
import com.fis.thuctap.entity.product.ProductType;
import com.fis.thuctap.myRepo.admin.IProductGroupRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductGroupService {
    @Autowired
    private IProductGroupRepo productGroupRepo;
    public List<ProductGroup> getAll() {
        return productGroupRepo.findAll();
    }
    public ProductGroup getById(int id) {
        return productGroupRepo.findById(id).get();
    }
    public ProductGroup add(ProductGroup productGroup) {
        productGroup.setTimeCreated(LocalDate.now().toString());
        productGroup.setStatus("Online");
        return productGroupRepo.save(productGroup);
    }
    public ProductGroup update(ProductGroup productGroup) {
        productGroup.setTimeUpdated(LocalDate.now().toString());
        return productGroupRepo.save(productGroup);
    }
    public void delete(int id) {
        productGroupRepo.deleteById(id);
    }
    public List<String> listAllName() {
        List<ProductGroup> list = productGroupRepo.findAll();
        List<String> listName = new ArrayList<String>();
        for (ProductGroup i : list) {
            listName.add(i.getName());
        }
        return listName;
    }
    public List<ProductGroup> findProductGroupsByProductTypeId(int id) {
        return productGroupRepo.findProductGroupsByProductTypeId(id).get();
    }
}
