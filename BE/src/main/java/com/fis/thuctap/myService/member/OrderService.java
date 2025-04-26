package com.fis.thuctap.myService.member;

import com.fis.thuctap.entity.Order;
import com.fis.thuctap.myRepo.member.IOrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private IOrderRepo orderRepo;
    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }
    public Order getOrderById(int id) {
        return orderRepo.findById(id).get();
    }
    public void add(Order order) {
         orderRepo.save(order);
    }
    public void update(Order order) {
         orderRepo.save(order);
    }
    public void delete(int id) {
        orderRepo.deleteById(id);
    }
}
