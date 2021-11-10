import axios from "axios";

const CUSTOMER_API_BASE_URL= "http://localhost:8080/api/v1/customers";

class CustomerServices{

getCustomers(){
    return axios.get(CUSTOMER_API_BASE_URL);
}
crateCustomer(customer){
    return axios.post(CUSTOMER_API_BASE_URL,customer);

}

getCustomerById(customerId){
    return axios.get(CUSTOMER_API_BASE_URL+'/'+customerId);
}
upadteCustomer(customer,customerId){
    return axios.put(CUSTOMER_API_BASE_URL+'/'+customerId,customer);
}
delateCustomers(customerId){
    return axios.delete(CUSTOMER_API_BASE_URL+'/'+customerId);
}

}
export default new CustomerServices();