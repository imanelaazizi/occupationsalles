package com.example.demo.controller;

import com.example.demo.model.Salle;
import com.example.demo.model.Users;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("USERS")
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @PostMapping("/save")
    public void save(@RequestBody Users user){
        userRepository.save(user);
    }

    @GetMapping("/all")
    public List<Users> load(){
        return userRepository.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable(required = true) Integer id) {
        System.out.println("id = "+id);
        Users user = userRepository.findByUserId(id);
        userRepository.delete(user);
    }

    @GetMapping(value = "/count")
    public long countProduit() {
        return userRepository.count();
    }




}
