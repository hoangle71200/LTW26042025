package com.fis.thuctap.myController.member;

import com.fis.thuctap.entity.product.Product;
import com.fis.thuctap.myService.member.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("productmanagement")
public class ProductManagement {
    @Autowired
    private ProductService productService;

    @GetMapping()
    public ResponseEntity<List<Product>> getAll() {
        return new ResponseEntity<>(productService.getAll(), HttpStatus.OK);
    }
    @GetMapping("/page/{pagesize}")
    public ResponseEntity<Page<Product>> getAllbyPage(@PathVariable String pagesize, @RequestParam("page") String page) {
        Pageable pageable = PageRequest.of(Integer.parseInt(page),Integer.parseInt(pagesize), Sort.by("id").descending());
        Page<Product> products = productService.getAllByPage(pageable);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @GetMapping("/departmentId/{id}")
    public ResponseEntity<List<Product>> getListByDepartmentId(@PathVariable Integer id) {
        return new ResponseEntity<>(productService.findProductsByProductDepartmentId(id), HttpStatus.OK);
    }
    @GetMapping("/name")
    public ResponseEntity<List<String>> getAllName() {
        return new ResponseEntity<>(productService.listAllName(), HttpStatus.OK);
    }
    @PostMapping()
    public ResponseEntity<List<Product>> create(@RequestBody Product product) {
        productService.add(product);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping()
    public ResponseEntity<List<Product>> update(@RequestBody Product product) {
        productService.update(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping("/hide/{id}")
    public ResponseEntity<List<Product>> hide(@PathVariable Integer id) {
        productService.hide(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<List<Product>> delete(@PathVariable Integer id) {
        productService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
