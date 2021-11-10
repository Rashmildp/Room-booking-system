package com.example.demo.controller;

import com.example.demo.exception.ResourceNotFound;
import com.example.demo.model.Room;
import com.example.demo.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;
    //get all rooms
    @GetMapping("/rooms")
    public List<Room> getAllRooms(){
        return roomRepository.findAll();

    }
    //create room rest api
    @PostMapping("/rooms")
    public Room createRoom(@RequestBody Room room){
        return  roomRepository.save(room);
    }
  //rooms by id
    @GetMapping("/rooms/{id}")
    public ResponseEntity <Room> getRoomById(@PathVariable   int id){
        Room room=roomRepository.findById(id)
                .orElseThrow(()->new ResourceNotFound("Room is not id: "+id));
        return ResponseEntity.ok(room);

    }
    // update rooms
    @PutMapping("/rooms/{id}")
    public ResponseEntity<Room> updateRooms( @PathVariable int id,@RequestBody Room roomDetails){
        Room room=roomRepository.findById(id)
                .orElseThrow(()->new ResourceNotFound("Room is not id: "+id));
        room.setName(roomDetails.getName());
        room.setCapacity(roomDetails.getCapacity());
        room.setPrice(roomDetails.getPrice());
        room.setDescription(roomDetails.getDescription());
        room.setStatus(roomDetails.isStatus());
        room.setImageUrl(roomDetails.getImageUrl());
       Room updateRoom = roomRepository.save(room);
       return ResponseEntity.ok(updateRoom);


    }
    //delete rooms
    @DeleteMapping("/rooms/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteRooms( @PathVariable int id){
        Room room=roomRepository.findById(id)
                .orElseThrow(()->new ResourceNotFound("Room is not id: "+id));
        roomRepository.delete(room);
        Map<String,Boolean> response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }

}
