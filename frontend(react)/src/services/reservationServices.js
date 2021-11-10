import axios from "axios";

const RESERVATION_API_BASE_URL= "http://localhost:8080/api/v1/reservations";

class ReservationServices{

getReservations(){
    return axios.get(RESERVATION_API_BASE_URL);
}

createReservations(reservations){
    return axios.post(RESERVATION_API_BASE_URL,reservations);

}
getReservationById(reservationId){
    return axios.get(RESERVATION_API_BASE_URL+'/'+reservationId);
}
upadteReservation(reservation,reservationId){
    return axios.put(RESERVATION_API_BASE_URL+'/'+reservationId,reservation);
}
delateReservation(reservationId){
    return axios.delete(RESERVATION_API_BASE_URL+'/'+reservationId);
}

}
export default new ReservationServices();