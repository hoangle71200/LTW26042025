package com.fis.thuctap.myService.member;

import com.fis.thuctap.entity.product.VideoDN;
import com.fis.thuctap.myRepo.member.IVideoDNRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class VideoDNService {
    @Autowired
    private IVideoDNRepo videoDNRepo;
    public List<VideoDN> getAllVideoDN() {
        return videoDNRepo.findAll();
    }
    public VideoDN getVideoDNById(int id) {
        return videoDNRepo.findById(id).get();
    }
    public VideoDN add(VideoDN videoDN) {
        videoDN.setTimeCreated(LocalDate.now().toString());
        return videoDNRepo.save(videoDN);
    }
    public void update(VideoDN videoDN) {
        videoDNRepo.save(videoDN);
    }
    public void delete(Integer id) {
        videoDNRepo.deleteById(id);
    }
}
