package com.fis.thuctap.myController.member;

import com.fis.thuctap.entity.product.VideoDN;
import com.fis.thuctap.myService.member.VideoDNService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("videodnmanagement")
public class VideoDNManagement {
    @Autowired
    private VideoDNService videoDNService;
    @GetMapping()
    public ResponseEntity<List<VideoDN>> getAll() {
        return new ResponseEntity<>(videoDNService.getAllVideoDN(), HttpStatus.OK);
    }
    @PostMapping()
    public ResponseEntity<String> create(@RequestBody VideoDN videoDN) {
        videoDNService.add(videoDN);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping()
    public ResponseEntity<String> update(@RequestBody VideoDN videoDN) {
        videoDNService.update(videoDN);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Integer id) {
        videoDNService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
