import React, {Component}from 'react';
import reservationServices from '../../services/reservationServices';

class ReservationAdd extends Component{
    constructor(props){
        super(props)
        
        this.state={
            id:this.props.match.params.id,
            checkin:'',
            checkout:'',
            roomId: '',
            customerId:'',
          


        }
        this.changecheckin=this.changecheckin.bind(this);
        this.changecheckout=this.changecheckout.bind(this);
        this.changeroomId=this.changeroomId.bind(this);
        this.changecustomerId=this.changecustomerId.bind(this);
        

     
    }
    componentDidMount(){

        if(this.state.id==-1){
            return

        }else{
            reservationServices.getReservationById(this.state.id).then((res)=>{
                let resrvation=res.data;
                this.setState({roomId:resrvation.roomId,
                    customerId:resrvation.customerId,
                    checkin:resrvation.checkin,
                    checkout:resrvation.checkout,
                   });
            })

        }
       
    }
    saveReservations=(e)=>{
        e.preventDefault();
        let reservation={roomId:this.state.roomId,customerId:this.state.customerId,checkin:this.state.checkin,checkout:this.state.checkout};
        console.log('Reservations=>'+JSON.stringify(reservation));

        if(this.state.id==-1){
            reservationServices.createReservations(reservation).then(res=>{
                this.props.history.push('/reservation')
            })
    

        }else{
            reservationServices.upadteReservation(reservation,this.state.id).then((res)=>{
                this.props.history.push('/reservation');
    
            });

        }
        
     

     
    }
    changecheckin=(event)=>{
        this.setState({checkin:event.target.value});
    }
    changecheckout=(event)=>{
        this.setState({checkout:event.target.value});
    }


    changeroomId=(event)=>{
        this.setState({roomId:event.target.value});
    }
    changecustomerId=(event)=>{
        this.setState({customerId:event.target.value});
    }

    cancel(){
        this.props.history.push('/reservation')
    }
    getTitle(){
        if(this.state.id ==-1){
            return    <h3 className="text-center">Add Reservations</h3>
           

         
        }
        else{
            return    <h3 className="text-center">Update Reservations</h3>
                
        }
    }
    render(){
        return(
            <div>
                <br>
                </br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                          {this.getTitle()}
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Room Id</label>

                                        <input placeholder="RoomId" name="roomId" className="form-control"
                                        value={this.state.roomId} onChange={this.changeroomId}></input>

                                    </div>
                                    <br>
                                    </br>


                                    <div className="form-group">
                                        <label> Customer Id</label>
                                        <input placeholder="customerId" name="customerId" className="form-control"
                                        value={this.state.customerId} onChange={this.changecustomerId}></input>

                                    </div>
                                    <br>
                                    </br>
                                    <div className="form-group">
                                        <label> Checkin Date</label>
                                        <input placeholder="checkin" name="checkin" className="form-control"
                                        value={this.state.checkin} onChange={this.changecheckin}></input>

                                    </div>
                                    <br>
                                    </br>
                                    <div className="form-group">
                                        <label> Checkout Date</label>
                                        <input placeholder="checkout" name="checkout" className="form-control"
                                        value={this.state.checkout} onChange={this.changecheckout}></input>

                                    </div>
                                    <br>
                                    </br>
                                    
                                   
                                    <br>
                                    </br>
                                    <button className="btn btn-success" onClick={this.saveReservations}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                                </form>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
export default ReservationAdd;