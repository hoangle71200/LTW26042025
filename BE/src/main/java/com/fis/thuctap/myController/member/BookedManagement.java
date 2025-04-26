package com.fis.thuctap.myController.member;

import com.fis.thuctap.entity.Booked;
import com.fis.thuctap.myService.member.BookedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// giỏ hàng
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("bookedmanagement")
public class BookedManagement {
    @Autowired
    private BookedService bookedService;
    @GetMapping()
    public ResponseEntity<List<Booked>> getAll() {
        return new ResponseEntity<>(bookedService.getAllBooked(), HttpStatus.OK);
    }
    @PostMapping()
    public ResponseEntity<List<Booked>> create(@RequestBody Booked booked) {
        bookedService.add(booked);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping()
    public ResponseEntity<List<Booked>> update(@RequestBody Booked booked) {
        bookedService.update(booked);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<List<Booked>> delete(@PathVariable Integer id) {
        bookedService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
