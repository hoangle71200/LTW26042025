package com.fis.thuctap.myService.admin;

import com.fis.thuctap.entity.product.SellType;
import com.fis.thuctap.myRepo.admin.ISellTypeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class SellTypeService {
    @Autowired
    private ISellTypeRepo sellTypeManagementRepo;
    public List<SellType> getAllSellTypes() {
        return sellTypeManagementRepo.findAll();
    }
    public SellType getSellTypeById(int id) {
        return sellTypeManagementRepo.findById(id).get();
    }
    public SellType addSellType(SellType sellType) {
        sellType.setTimeCreated(LocalDate.now().toString());
        sellType.setStatus("Online");
        return sellTypeManagementRepo.save(sellType);
    }
    public SellType updateSellType(SellType sellType) {
        sellType.setTimeUpdated(LocalDate.now().toString());
        return sellTypeManagementRepo.save(sellType);
    }
    public void deleteSellTypeById(int id) {
        sellTypeManagementRepo.deleteById(id);
    }
    public List<String> listAllName() {
        List<SellType> list = sellTypeManagementRepo.findAll();
        List<String> listName = new ArrayList<String>();
        for (SellType i : list) {
            listName.add(i.getName());
        }
        return listName;
    }
}
