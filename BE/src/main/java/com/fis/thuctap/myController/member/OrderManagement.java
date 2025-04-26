package com.fis.thuctap.myController.member;

import com.fis.thuctap.entity.Order;
import com.fis.thuctap.myService.member.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// đơn hàng
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("ordermanagement")
public class OrderManagement {
    @Autowired
    private OrderService orderService;
    @GetMapping()
    public ResponseEntity<List<Order>> getAll() {
        return new ResponseEntity<>(orderService.getAllOrders(), HttpStatus.OK);
    }
    @PostMapping()
    public ResponseEntity<List<Order>> create(@RequestBody Order order) {
        orderService.add(order);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping()
    public ResponseEntity<List<Order>> update(@RequestBody Order order) {
        orderService.update(order);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<List<Order>> delete(@PathVariable Integer id) {
        orderService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
