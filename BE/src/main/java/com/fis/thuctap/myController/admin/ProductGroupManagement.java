package com.fis.thuctap.myController.admin;

import com.fis.thuctap.entity.product.ProductGroup;
import com.fis.thuctap.myService.admin.ProductGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("productgroupmanagement")
public class ProductGroupManagement {
    @Autowired
    private ProductGroupService productGroupService;

    @GetMapping()
    public ResponseEntity<List<ProductGroup>> getAll() {
        return new ResponseEntity<>(productGroupService.getAll(), HttpStatus.OK);
    }
    @GetMapping("/name")
    public ResponseEntity<List<String>> getAllName() {
        return new ResponseEntity<>(productGroupService.listAllName(), HttpStatus.OK);
    }
    @GetMapping("/loaisp/{loaispid}")
    public ResponseEntity<List<ProductGroup>> getAllByLoaiSP(@PathVariable int loaispid) {
        return new ResponseEntity<>(productGroupService.findProductGroupsByProductTypeId(loaispid), HttpStatus.OK);
    }
    @PostMapping()
    public ResponseEntity<List<ProductGroup>> create(@RequestBody ProductGroup productGroup) {
        productGroupService.add(productGroup);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping()
    public ResponseEntity<List<ProductGroup>> update(@RequestBody ProductGroup productGroup) {
        productGroupService.update( productGroup);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<List<ProductGroup>> delete(@PathVariable Integer id) {
        productGroupService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
