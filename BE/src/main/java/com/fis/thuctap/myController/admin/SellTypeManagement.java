package com.fis.thuctap.myController.admin;

import com.fis.thuctap.entity.product.SellType;
import com.fis.thuctap.myService.admin.SellTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("selltypemanagement")
public class SellTypeManagement {
    @Autowired
    private SellTypeService sellTypeService;

    @GetMapping()
    public ResponseEntity<List<SellType>> getAllSellTypeManagement() {
        return new ResponseEntity<>(sellTypeService.getAllSellTypes(), HttpStatus.OK);
    }
    @GetMapping("/name")
    public ResponseEntity<List<String>> getAllName() {
        return new ResponseEntity<>(sellTypeService.listAllName(), HttpStatus.OK);
    }
    @PostMapping()
    public ResponseEntity<List<SellType>> createSellType(@RequestBody SellType sellType) {
        sellTypeService.addSellType(sellType);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping()
    public ResponseEntity<List<SellType>> updateSellType(@RequestBody SellType sellType) {
        sellTypeService.updateSellType( sellType);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<List<SellType>> deleteSellType(@PathVariable Integer id) {
        System.out.println("go delete sell type");
        System.out.println(id);
        sellTypeService.deleteSellTypeById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
