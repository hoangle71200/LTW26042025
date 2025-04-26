package com.fis.thuctap.myService.member;

import com.fis.thuctap.entity.Booked;
import com.fis.thuctap.entity.Booking;
import com.fis.thuctap.myRepo.member.IBookedRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookedService {
    @Autowired
    private IBookedRepo bookedRepo;
    public List<Booked> getAllBooked(){
        return bookedRepo.findAll();
    }
    public Booked getBookedById(int id){
        return bookedRepo.findById(id).get();
    }
    public Booked add(Booked booked){
        return bookedRepo.save(booked);
    }
    public Booked update(Booked booked){
        return bookedRepo.save(booked);
    }
    public void delete(int id){
        bookedRepo.deleteById(id);
    }
}
