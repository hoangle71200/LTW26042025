package com.fis.thuctap.myService.member;

import com.fis.thuctap.entity.Booking;
import com.fis.thuctap.myRepo.member.IBookingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class BookingService {
    @Autowired
    private IBookingRepo bookingRepo;
    public List<Booking> getAllBookings(){
        return bookingRepo.findAll();
    }
    public Booking getBookingById(int id){
        return bookingRepo.findById(id).get();
    }
    public Booking add(Booking booking){
        booking.setBookingDate(LocalDate.now().toString());
        return bookingRepo.save(booking);
    }
    public Booking update(Booking booking){
        return bookingRepo.save(booking);
    }
    public void delete(int id){
        bookingRepo.deleteById(id);
    }
}
