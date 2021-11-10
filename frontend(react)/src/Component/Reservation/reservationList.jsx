import React, {Component} from "react";
import reservationServices from "../../services/reservationServices";


class ReservationList extends Component{
    constructor(props){
        super(props)
        this.state={
            reservtions:[]


        }
        this.addReservations= this.addReservations.bind(this);
        this.editReservations=this.editReservations.bind(this);
    }
    componentDidMount(){
         reservationServices.getReservations().then((res)=>{
             this.setState({reservtions:res.data})
         })
    }
  

    addReservations(){
        this.props.history.push('/addreservations/-1')
    }
    editReservations(id){
        this.props.history.push(`/addreservations/${id}`)


    }

    delaeteReservations(id){
        reservationServices.delateReservation(id).then((res)=>{
            this.setState({reservtions:this.state.reservtions.filter(reservation=>reservation.id!==id)});
        })


    }
    render(){
        return(
            <div>
                <h2 className="text-center" style={{fontFamily:"cursive"}}>Reservation List</h2>
                <div className="row">
                <div className="col-6">
                    <button className="btn btn-primary" onClick={this.addReservations}>Add Reservations</button>
                    </div>

                </div>
                <br>
                </br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                         <thead>
                             <tr>
                                 <th>Room Id</th>
                                 <th> Customer Id</th>
                                 <th> Checkin Date</th>
                                 <th> Checkout Date</th>
                                 <th>Actions</th>
                                 
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 this.state.reservtions.map(
                                     reservation=>
                                     <tr key={reservation.id}>
                                         <td> {reservation.customerId}</td>
                                         <td> {reservation.roomId}</td>
                                         <td> {reservation.checkin}</td>
                                         <td> {reservation.checkout}</td>
                                         <td>
                                             <div className="btn-toolbar pull-right">
                                                  <button onClick={()=>this.editReservations(reservation.id)} className="btn btn-info ">Update</button>
                                                  <div className="col-1"></div>
                                             

                                            
                                            
                                             
                                             <button onClick={()=>this.delaeteReservations(reservation.id)} className="btn btn-danger ">Delete</button>
                                             </div>
                                         </td>
                                        

                                     </tr>



                                 )
                             }
                         </tbody>
                    </table>

                </div>


            </div>
        )
    }
}
export default ReservationList;