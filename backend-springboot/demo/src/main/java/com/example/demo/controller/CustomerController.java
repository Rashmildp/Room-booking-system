package com.example.demo.controller;

import com.example.demo.exception.ResourceNotFound;
import com.example.demo.model.Customer;
import com.example.demo.model.Room;
import com.example.demo.repository.CusomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/v1/")
public class CustomerController {


       @Autowired
       private CusomerRepository cusomerRepository;
       //get all customers
       @GetMapping("/customers")
       public List<Customer> getAllCustomers(){
              return cusomerRepository.findAll();

       }

       //create employee rest api
       @PostMapping("/customers")
       public  Customer createCustomer(@RequestBody  Customer customer){
              return  cusomerRepository.save(customer);
       }


    //Customers by id
    @GetMapping("/customers/{id}")
    public ResponseEntity <Customer> getCustomerById(@PathVariable   int id){
        Customer customer=cusomerRepository.findById(id)
                .orElseThrow(()->new ResourceNotFound("Customer is not id: "+id));
        return ResponseEntity.ok(customer);

    }
    // update rooms
    @PutMapping("/customers/{id}")
    public ResponseEntity<Customer> updateCustomers(@PathVariable int id, @RequestBody Customer customerDetails){
        Customer customer=cusomerRepository.findById(id)
                .orElseThrow(()->new ResourceNotFound("Customer is not id: "+id));
        customer.setFirstName(customerDetails.getFirstName());
        customer.setLastName(customerDetails.getLastName());
        customer.setEmail(customerDetails.getEmail());
        customer.setTelephone(customerDetails.getTelephone());

        Customer updateCustomer = cusomerRepository.save(customer);
        return ResponseEntity.ok(updateCustomer);


    }

    @DeleteMapping("/customers/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteRooms(@PathVariable int id){
        Customer customer=cusomerRepository.findById(id)
                .orElseThrow(()->new ResourceNotFound("Customer is not id: "+id));
        cusomerRepository.delete(customer);
        Map<String,Boolean> response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }



}
