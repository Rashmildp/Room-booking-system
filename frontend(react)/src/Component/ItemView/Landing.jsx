import React, { Component } from 'react';
import roomService from '../../services/roomService';
import { Typography,  Grid, CardContent, Box,  } from '@material-ui/core/';
import DatePicker from "react-datepicker";
import reservationServices from '../../services/reservationServices';


class LandingRoom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            description: '',
            price: '',
            capacity: '',
            status: '',
            imageUrl: '',
            checkin:'',
            checkout:'',
            startDate:new Date(),



        }
        this.changeCheckIn=this.changeCheckIn.bind(this);
        this.changeCheckOut=this.changeCheckOut.bind(this);
        this.saveReservations=this.saveReservations.bind(this);



    }

    changeCheckIn=(event)=>{
        this.setState({checkin:event.target.value});
        console.log(this.state.checkin);
    }
    changeCheckOut=(event)=>{
        this.setState({checkout:event.target.value});
        console.log(this.state.checkout);
    }

    componentDidMount() {
        roomService.getroomById(this.state.id).then((res) => {
            let room = res.data;
            this.setState({
                name: room.name,
                capacity: room.capacity,
                price: room.price,
                imageUrl: room.imageUrl,

                description: room.description,
                status: room.status
            });
        })
    }
    saveReservations=(e)=>{
        e.preventDefault();
        let reservations={checkin:this.state.checkin,checkout:this.state.checkout, roomId:this.state.id,customerId:1};
        console.log('Reservations=>'+JSON.stringify(reservations));

        reservationServices.createReservations(reservations).then(res=>{
            this.props.history.push('/')
        })


  
        
     

     
    }

    render() {
        return (
            <div>
                <br>
                </br>
                <div >
                    <div className="row">
                        <div className="col">
                            <img src={this.state.imageUrl} alt="img" style={{ width: "100%", border: '3px solid black', borderRadius: '5px!important' ,height: "400px" }}></img>

                        </div>
                        <div className="col">
                            <container>




                                <Grid style={{ width: "100%", borderRadius: '5px!important' }}>


                                    <Box borderRadius="30px" >
                                        <  div className="card" style={{ border: '3px solid black', height: "400px" }}>

                                            <CardContent style={{ height: "60hv" }}>
                                                <div className="row">
                                                    <div className="col">
                                                        <Typography gutterBottom variant="headline" component="h4" style={{fontFamily:"cursive" }}>

                                                            {this.state.name}
                                                        </Typography>
                                                    </div>
                                                    <div className="col">
                                                        <button className="btn btn-warning" style={{fontFamily:"cursive" }}>
                                                            Rs {this.state.price} Per Day
                                                        </button>
                                                    </div>
                                                    <div className="col">
                                                        <button className="btn btn-danger" style={{fontFamily:"cursive" }}>
                                                            Capacity {this.state.capacity}
                                                        </button>
                                                    </div>

                                                </div>
                                                <br>
                                                </br>

                                                <Typography component="p" style={{fontFamily:"cursive" }}>
                                                    {this.state.description}

                                                    <div>
                                                        <br>
                                                        </br>


                                                    </div>




                                                </Typography>
                                                <br>
                                                </br>
                                                <div className="row">
                                                    <div className="col" style={{fontFamily:"cursive" }}>
                                                        Checkin Date

                                                    </div>
                                                    <div className="col" style={{fontFamily:"cursive" }}>
                                                        Checkout Date

                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <input
                                                            name="checkin"
                                                            type="date"
                                                            className="form-control"
                                                            id="inputCheckIn"
                                                            placeholder="checkin"
                                                            onChange={this.changeCheckIn}

                                                        />

                                                    </div>

                                                    <div className="col">
                                                        <input
                                                            name="checkout"
                                                            type="date"
                                                            className="form-control"
                                                            id="inputCheckIn"
                                                            placeholder="checkout"
                                                            onChange={this.changeCheckOut}

                                                        />

                                                    </div>
                                                </div>
                                            </CardContent>
                                          
                                    <div style={{ display: 'flex', justifyContent: 'center',alignItems:'center' }}>
                                       <button className="btn btn-success" onClick={this.saveReservations} style={{fontFamily:"cursive" }} >
                                           Checkout
                                        </button>
                                        </div>

                                        </div>

                                    </Box>

                                </Grid>
                            </container>

                        </div>
                    </div>

                </div>


            </div>
        )
    }
}
export default LandingRoom;