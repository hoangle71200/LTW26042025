package com.fis.thuctap.myController.admin;


import com.fis.thuctap.entity.PaymentService;
import com.fis.thuctap.myService.admin.PaymentServiceSer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("paymentservicemanagement")
public class PaymentServieManagement {
    @Autowired
    private PaymentServiceSer paymentServiceSer;

    @GetMapping()
    public ResponseEntity<List<PaymentService>> getAll() {
        return new ResponseEntity<>(paymentServiceSer.getAll(), HttpStatus.OK);
    }
    @PostMapping()
    public ResponseEntity<List<PaymentService>> create(@RequestBody PaymentService paymentService) {
        paymentServiceSer.add(paymentService);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping()
    public ResponseEntity<List<PaymentService>> update(@RequestBody PaymentService paymentService) {
        paymentServiceSer.update(paymentService);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<List<PaymentService>> delete(@PathVariable Integer id) {
        paymentServiceSer.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}