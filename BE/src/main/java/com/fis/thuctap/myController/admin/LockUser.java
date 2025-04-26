package com.fis.thuctap.myController.admin;

import com.fis.thuctap.entity.Users;
import com.fis.thuctap.myService.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/lockuser")
public class LockUser {
    @Autowired
    private UsersService usersService;
    @GetMapping
    public String lockUser() {
        return "Hello im hoang";
    }

    @PostMapping("/{num}")
    public String lockUser(@PathVariable int num, @RequestBody Integer[] listID) {
        for (int i = 0; i < listID.length; i++) {
            usersService.lockUsers(listID[i]);
            System.out.println("id is: " + listID[i]);
        }
        return "Hello this locked";
    }
}
