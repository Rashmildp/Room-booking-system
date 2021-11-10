package com.example.demo.controller;

import com.example.demo.exception.ResourceNotFound;
import com.example.demo.model.Customer;
import com.example.demo.model.RoomReservation;
import com.example.demo.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class ReservationController {


    @Autowired
    private ReservationRepository reservationRepository;
    //get all customers
    @GetMapping("/reservations")
    public List<RoomReservation> getAllReservations(){
        return reservationRepository.findAll();

    }
    //create employee rest api
    @PostMapping("/reservations")
    public  RoomReservation createReservation(@RequestBody RoomReservation roomReservation){
        return  reservationRepository.save(roomReservation);
    }
    //Reservations by id
    @GetMapping("/reservations/{id}")
    public ResponseEntity<RoomReservation> getReservationById(@PathVariable   int id){
        RoomReservation roomReservation=reservationRepository.findById(id)
                .orElseThrow(()->new ResourceNotFound("Reservation is not id: "+id));
        return ResponseEntity.ok(roomReservation);

    }

    // update Reservations
    @PutMapping("/reservations/{id}")
    public ResponseEntity<RoomReservation> updateReservations(@PathVariable int id, @RequestBody RoomReservation roomDetails){
        RoomReservation roomReservation=reservationRepository.findById(id)
                .orElseThrow(()->new ResourceNotFound("Reservation is not id: "+id));
        roomReservation.setCheckin(roomDetails.getCheckin());
        roomReservation.setCheckout(roomDetails.getCheckout());
        roomReservation.setRoomId(roomDetails.getRoomId());
        roomReservation.setCustomerId(roomDetails.getCustomerId());

        RoomReservation updateReservations = reservationRepository.save(roomReservation);
        return ResponseEntity.ok(updateReservations);


    }
    @DeleteMapping("/reservations/{id}")
    public ResponseEntity<Map<String, Boolean>> DeleteReservation(@PathVariable int id){
        RoomReservation roomReservation=reservationRepository.findById(id)
                .orElseThrow(()->new ResourceNotFound("Reservation is not id: "+id));
        reservationRepository.delete(roomReservation);
        Map<String,Boolean> response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }
}
