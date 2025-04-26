package com.fis.thuctap.myController.admin;


import com.fis.thuctap.entity.product.ProductType;
import com.fis.thuctap.myService.admin.ProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("producttypemanagement")
public class ProductTypeManagement {
    @Autowired
    private ProductTypeService productTypeService;

    @GetMapping()
    public ResponseEntity<List<ProductType>> getAllProductTypeManagement() {
        return new ResponseEntity<>(productTypeService.getAllProductTypes(), HttpStatus.OK);
    }
    @GetMapping("/name")
    public ResponseEntity<List<String>> getAllName() {
        return new ResponseEntity<>(productTypeService.listAllName(), HttpStatus.OK);
    }
    @PostMapping()
    public ResponseEntity<List<ProductType>> createSellType(@RequestBody ProductType productType) {
        productTypeService.addProductType(productType);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping()
    public ResponseEntity<List<ProductType>> updateSellType(@RequestBody ProductType productType) {
        productTypeService.updateProductType( productType);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<List<ProductType>> deleteSellType(@PathVariable Integer id) {
        productTypeService.deleteProductTypeById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
