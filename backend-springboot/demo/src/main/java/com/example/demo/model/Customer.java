package com.example.demo.model;


import javax.persistence.*;


@Entity
@Table(name = "Customers")
public class Customer {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private  int id;

        @Column
        private String firstName;

        @Column
        private String lastName;

        @Column
        private String email;

        @Column
        private String password;

        @Column
        private String telephone;

        public Customer(String firstName, String lastName, String email, String password, String telephone) {
            super();
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
            this.telephone=telephone;
        }

    public Customer() {

    }

    public int getId() {
            return id;
        }

        public String getFirstName() {
            return firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public String getEmail() {
            return email;
        }

        public String getPassword() {
            return password;
        }

    public String getTelephone() {
        return telephone;
    }

    public void setId(int id) {
            this.id = id;
        }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }


