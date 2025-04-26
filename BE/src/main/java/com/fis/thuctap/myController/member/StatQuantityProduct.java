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
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("statquantityproduct")
public class StatQuantityProduct {
    @Autowired
    private ProductService productService;
    @GetMapping("/findByTime/{pageSize}")
    public ResponseEntity<Page<Product>> findProductsByTimeCreatedBeforeAndTimeCreatedAfter(
            @PathVariable String pageSize,
            @RequestParam("timeCreatedBefore") String timeCreatedBefore,
            @RequestParam("timeCreatedAfter") String timeCreatedAfter,
            @RequestParam("page") String page
    ) {
        Pageable pageable = PageRequest.of(Integer.parseInt(page),Integer.parseInt(pageSize), Sort.by("id").descending());
        if (timeCreatedBefore.equals("") || timeCreatedAfter.equals("") ) {
            Page<Product> products = productService.getAllByPage(pageable);
            return new ResponseEntity<>(products, HttpStatus.OK);
        }
        Page<Product> products = productService.findProductsByTimeCreatedBeforeAndTimeCreatedAfter(timeCreatedBefore,
                timeCreatedAfter, pageable);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @GetMapping("/findByTimeAndInfor/{pageSize}")
    public ResponseEntity<Page<Product>> findProductsByTimeCreatedAndInfor(
            @PathVariable String pageSize,
            @RequestParam("productGroup") String productGroup,
            @RequestParam("sellType") String sellType,
            @RequestParam("timeCreatedBefore") String timeCreatedBefore,
            @RequestParam("timeCreatedAfter") String timeCreatedAfter,
            @RequestParam("page") String page
    ) {
        Pageable pageable = PageRequest.of(Integer.parseInt(page),Integer.parseInt(pageSize), Sort.by("id").descending());
//        if (timeCreatedBefore.equals("") || timeCreatedAfter.equals("") ) {
//            Page<Product> products = productService.getAllByPage(pageable);
//            return new ResponseEntity<>(products, HttpStatus.OK);
//        }
        Page<Product> products = productService.findProductsByTimeCreatedAndProductInfor(productGroup, sellType,
                timeCreatedBefore,
                timeCreatedAfter, pageable);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
