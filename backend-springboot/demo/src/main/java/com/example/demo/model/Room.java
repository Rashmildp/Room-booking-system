package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "Room")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private  String name;
    @Column
    private  String description;
    @Column
    private  double price;
    @Column
    private  int capacity;
    @Column
    private boolean status;
    @Column
    private String imageUrl;



    public Room(String name, String description, double price, boolean status,int capacity, String imageUrl) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.capacity=capacity;
        this.imageUrl=imageUrl;
        this.status = status;

    }

    public Room() {
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public double getPrice() {
        return price;
    }
    public int getCapacity() {
        return capacity;
    }
    public boolean isStatus() {
        return status;
    }

    public String getImageUrl() {
        return imageUrl;
    }




    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrice(double price) {
        this.price = price;
    }
    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }
    public void setStatus(boolean status) {
        this.status = status;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

}
