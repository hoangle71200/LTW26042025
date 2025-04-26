package com.fis.thuctap.myService.admin;

import com.fis.thuctap.entity.PaymentService;
import com.fis.thuctap.myRepo.admin.IPaymentServiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
public class PaymentServiceSer {
    @Autowired
    private IPaymentServiceRepo paymentServiceRepo;
    public List<PaymentService> getAll(){
        return paymentServiceRepo.findAll();
    }
    public PaymentService getPaymentServiceById(int id){
        return paymentServiceRepo.findById(id).get();
    }
    public PaymentService add(PaymentService paymentService){
        paymentService.setTimeCreated(Date.valueOf(LocalDate.now()));
        paymentService.setStatus("Online");
        return paymentServiceRepo.save(paymentService);
    }
    public PaymentService update(PaymentService paymentService){
        paymentService.setTimeUpdated(Date.valueOf(LocalDate.now()));
        return paymentServiceRepo.save(paymentService);
    }
    public void delete(int id){
        paymentServiceRepo.deleteById(id);
    }
}
