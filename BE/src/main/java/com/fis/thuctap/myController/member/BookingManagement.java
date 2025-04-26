package com.fis.thuctap.myController.member;

import com.fis.thuctap.entity.Booking;
import com.fis.thuctap.myService.member.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// đơn đặt hàng
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("bookingmanagement")
public class BookingManagement {
    @Autowired
    private BookingService bookingService;
    @GetMapping()
    public ResponseEntity<List<Booking>> getAll() {
        return new ResponseEntity<>(bookingService.getAllBookings(), HttpStatus.OK);
    }
    @PostMapping()
    public ResponseEntity<Booking> create(@RequestBody Booking booking) {
        bookingService.add(booking);
        return new ResponseEntity<>(bookingService.getBookingById(booking.getId()), HttpStatus.CREATED);
    }
    @PutMapping()
    public ResponseEntity<List<Booking>> update(@RequestBody Booking booking) {
        bookingService.update(booking);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<List<Booking>> delete(@PathVariable Integer id) {
        bookingService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
