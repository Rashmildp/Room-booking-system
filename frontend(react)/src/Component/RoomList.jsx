
import React, {Component} from "react";
import roomService from "../services/roomService";

class RoomList extends Component{
    constructor(props){
        super(props)
        this.state={
            rooms:[]


        }
        this.addRooms= this.addRooms.bind(this);
        this.roomDetails=this.roomDetails.bind(this);
        this.customerDetails=this.customerDetails.bind(this);
        this.editRooms=this.editRooms.bind(this);
        this.deleteRooms=this.deleteRooms.bind(this);
        this.reservationDetails=this.reservationDetails.bind(this);

    }
  

    componentDidMount(){
         roomService.getRooms().then((res)=>{
             this.setState({rooms:res.data})
         })
    }
    roomDetails(){
        this.props.history.push('/dash')
    }

     customerDetails(){
            this.props.history.push('/customer')
    
        }

        
     reservationDetails(){
        this.props.history.push('/reservation')

    }
    
    
    addRooms(){
        this.props.history.push('/addrooms/-1')
    }
    editRooms(id){
        this.props.history.push(`/addrooms/${id}`)


    }
    deleteRooms(id){
        roomService.deleteRoom(id).then((res)=>{
            this.setState({rooms:this.state.rooms.filter(room=>room.id!==id)});
        })


    }
  
    render(){
        return(
            <div>
                
                   <br>
                   </br>
                <div className="row">
              
                <div className="col-3">
                    <button className="btn btn-outline-secondary" onClick={this.roomDetails} style={{fontFamily:"cursive"}}>Room Details</button>
                    </div>
                    <div className="col-3">
                    <button className="btn btn-outline-secondary" onClick={this.reservationDetails} style={{fontFamily:"cursive"}}>Rservation Details</button>
                    </div>
                    <div className="col-3">
                    <button className="btn btn-outline-secondary" onClick={this.customerDetails} style={{fontFamily:"cursive"}}>Customer Details</button>
                    </div>

                </div>
                <br>
                </br>
                <div className="row">
                <div className="col-6">
                    <button className="btn btn-primary" onClick={this.addRooms}>Add Rooms</button>
                    </div>

                </div>
                <div className="row">
                    <br>
                    </br>
                    </div>
                <div className="row" style={{alignContent:"right"}}>
                    <table className="table table-striped table-bordered" style={{alignContent:"center"}}>
                         <thead>
                             <tr>
                                 <th>Room Name</th>
                                 <th>Price</th>
                                 <th>Capacity</th>
                                 <th>status</th>
                                 <th>Action</th>
                                 
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 this.state.rooms.map(
                                     room=>
                                     <tr key={room.id}>
                                         <td> {room.name}</td>
                                       
                                         <td> {room.price}</td>
                                         <td> {room.capacity}</td>
                                         {room.status===true? <td> True</td>:<td> False</td> }
                                         <td>
                                             <div className="btn-toolbar pull-right">
                                                  <button onClick={()=>this.editRooms(room.id)} className="btn btn-info ">Update</button>
                                                  <div className="col-1"></div>
                                             

                                            
                                            
                                             
                                             <button onClick={()=>this.deleteRooms(room.id)} className="btn btn-danger ">Delete</button>
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
export default RoomList;