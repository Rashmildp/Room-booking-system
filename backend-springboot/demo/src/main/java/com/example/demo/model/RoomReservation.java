package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "reservations")
public class RoomReservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String checkin;



    @Column
    private String checkout;

    @Column
    private  int roomId;

    @Column
    private  int customerId;



    public RoomReservation(String checkin, String checkout, int roomId, int customerId) {

        this.checkin = checkin;
        this.checkout = checkout;
        this.roomId = roomId;
        this.customerId = customerId;
    }

    public RoomReservation() {
    }

    public int getId() {
        return id;
    }


    public String getCheckin() {
        return checkin;
    }

    public String getCheckout() {
        return checkout;
    }

    public int getRoomId() {
        return roomId;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setCheckin(String checkin) {
        this.checkin = checkin;
    }

    public void setCheckout(String checkout) {
        this.checkout = checkout;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }
}
