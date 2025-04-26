package com.fis.thuctap.myController.admin;

import com.fis.thuctap.entity.product.ProductDepartment;
import com.fis.thuctap.myService.admin.ProductDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("productdepartmentmanagement")
public class ProductDepartmentManagement {
    @Autowired
    private ProductDepartmentService productDepartmentService;

    @GetMapping()
    public ResponseEntity<List<ProductDepartment>> getAll() {
        return new ResponseEntity<>(productDepartmentService.getAll(), HttpStatus.OK);
    }
    @GetMapping("/name")
    public ResponseEntity<List<String>> getAllName() {
        return new ResponseEntity<>(productDepartmentService.listAllName(), HttpStatus.OK);
    }
    @PostMapping()
    public ResponseEntity<List<ProductDepartment>> create(@RequestBody ProductDepartment productDepartment) {
        productDepartmentService.add(productDepartment);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping()
    public ResponseEntity<List<ProductDepartment>> update(@RequestBody ProductDepartment productDepartment) {
        productDepartmentService.update( productDepartment);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<List<ProductDepartment>> delete(@PathVariable Integer id) {
        productDepartmentService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
