package com.fis.thuctap.myService;

import com.fis.thuctap.entity.Users;
import com.fis.thuctap.myRepo.IUsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {
    @Autowired
    private IUsersRepo usersRepo;
    public List<Users> getAllUsers() {
        return usersRepo.findAll();
    }
    public Users findById(int id) {
        return usersRepo.findById(id);
    }
    public Users add(Users user) {
        return usersRepo.save(user);
    }
    public void update(Users user) {
        usersRepo.save(user);
    }
    public void delete(int id) {
        usersRepo.deleteById(id);
    }
    public void lockUsers(int id) {
        Users users = usersRepo.findById(id);
        users.setLockStatus("locked");
        usersRepo.save(users);
    }
    public Users checkLogin(String username, String password) {
        if (usersRepo.existsUsersByUsernameAndPassword(username, password)) {
            return usersRepo.findByUsernameAndPassword(username, password);
        }
        return null;
    }
}
