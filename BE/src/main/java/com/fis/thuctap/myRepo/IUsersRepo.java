package com.fis.thuctap.myRepo;

import com.fis.thuctap.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUsersRepo extends JpaRepository<Users, Integer> {
    Users findByUsername(String username);
    Users findByEmail(String email);
    Users findByUsernameAndPassword(String username, String password);
    Users findById(int id);
    void deleteById(int id);
    boolean existsUsersByUsernameAndPassword(String username, String password);
}
