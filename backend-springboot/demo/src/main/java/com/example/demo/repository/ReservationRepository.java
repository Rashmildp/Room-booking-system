package com.example.demo.repository;

import com.example.demo.model.RoomReservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<RoomReservation,Integer> {
    
}
