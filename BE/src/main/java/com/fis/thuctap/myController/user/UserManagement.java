package com.fis.thuctap.myController.user;

import com.fis.thuctap.entity.Users;
import com.fis.thuctap.myService.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// đơn đặt hàng
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("usermanagement")
public class UserManagement {
    @Autowired
    private UsersService usersService;
    @GetMapping()
    public ResponseEntity<List<Users>> getAll() {
        return new ResponseEntity<>(usersService.getAllUsers(), HttpStatus.OK);
    }
    @PostMapping()
    public ResponseEntity<List<Users>> create(@RequestBody Users users) {
        usersService.add(users);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PostMapping("/checkLogin/{username}")
    public ResponseEntity<Users> checkLogin(@PathVariable String username, @RequestBody String password) {
        return new ResponseEntity<>(usersService.checkLogin(username, password) ,HttpStatus.OK);
    }
    @PutMapping()
    public ResponseEntity<List<Users>> update(@RequestBody Users users) {
        usersService.update(users);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<List<Users>> delete(@PathVariable Integer id) {
        usersService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
