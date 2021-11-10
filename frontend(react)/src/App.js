
import './App.css';
import ListCustomer from './Component/Customer/listCustomer';
import Header from './Component/Header/header';
import Footer from './Component/footer/footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RoomList from './Component/RoomList';
import AddRooms from './Component/AddRoom';
import Frontview from './Component/FrontView/List';
import Landing from './Component/ItemView/Landing';
import AddCustomers
 from './Component/Customer/addCustomers';
 import ResservationList from './Component/Reservation/reservationList';
 import AddReservation from './Component/Reservation/AddReservation'




function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Header />
          <div className="container">
            <Switch>
                
            <Route path="/customer" component={ListCustomer}></Route>
            <Route path="/reservation" component={ResservationList}></Route>
            <Route path="/addreservations/:id" component={AddReservation}></Route>
     
            <Route path="/addrooms/:id" component={AddRooms}></Route>
            <Route path="/addcustomers/:id" component={AddCustomers}></Route>
                   {/* <Route path="/updaterooms/:id" component={UpdateRooms}></Route> */}
         
               <Route path="/dash" component={RoomList}></Route>
               <Route path="/landing/:id" component={Landing}/>
               <Route path="/" component={Frontview}></Route>

            


            </Switch>

          </div>
          <br>
          </br>
        <Footer/>

        </div>


      </Router>


    </div>

  );
}

export default App;
