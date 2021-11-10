import React, {Component} from 'react';
import roomService from '../services/roomService';

class UpdateRoom extends Component{
    constructor(props){
        super(props)
        
        this.state={
            id:this.props.match.params.id,
            name:'',
            description:'',
            price: '',
            capacity:'',
            status:'',



        }
        this.changeName=this.changeName.bind(this);
        this.changeCapacity=this.changeCapacity.bind(this);
        this.changePrice=this.changePrice.bind(this);
        this.changeDescription=this.changeDescription.bind(this);
        this.changeStatus=this.changeStatus.bind(this);
        this.UpadateRooms=this.UpadateRooms.bind(this);

     
    }
    componentDidMount(){
        roomService.getroomById(this.state.id).then((res)=>{
            let room=res.data;
            this.setState({name:room.name,
                capacity:room.capacity,
                price:room.price,
                description:room.description,
                status:room.status});
        })
    }
    UpadateRooms=(e)=>{
        e.preventDefault();
        let room={name:this.state.name,capacity:this.state.capacity,price:this.state.price,description:this.state.description,status:this.state.status};
        console.log('Rooms=>'+JSON.stringify(room));
        roomService.updateRoom(room,this.state.id).then((res)=>{
            this.props.history.push('/');

        });
     

    }
    changeName=(event)=>{
        this.setState({name:event.target.value});
    }
    changeDescription=(event)=>{
        this.setState({description:event.target.value});
    }
    changePrice=(event)=>{
        this.setState({price:event.target.value});
    }
    changeCapacity=(event)=>{
        this.setState({capacity:event.target.value});
    }
    changeStatus=(event)=>{
        this.setState({status:event.target.value});
    }
    cancel(){
        this.props.history.push('/')
    }
    render(){
        return(
            <div>
                <br>
                </br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Rooms</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Room Name</label>

                                        <input placeholder="Room Name" name="name" className="form-control"
                                        value={this.state.name} onChange={this.changeName}></input>

                                    </div>
                                    <br>
                                    </br>


                                    <div className="form-group">
                                        <label> Description</label>
                                        <input placeholder="Description" name="description" className="form-control"
                                        value={this.state.description} onChange={this.changeDescription}></input>

                                    </div>
                                    <br>
                                    </br>
                                    <div className="form-group">
                                        <label> Price</label>
                                        <input placeholder="Price" name="price" className="form-control"
                                        value={this.state.price} onChange={this.changePrice}></input>

                                    </div>
                                    <br>
                                    </br>
                                    <div className="form-group">
                                        <label> Capacity</label>
                                        <input placeholder="Capacity" name="capacity" className="form-control"
                                        value={this.state.capacity} onChange={this.changeCapacity}></input>

                                    </div>
                                    <br>
                                    </br>
                                    <div className="form-group">
                                        <label> Status</label>
                                        <input placeholder="Status" name="status" className="form-control"
                                        value={this.state.status} onChange={this.changeStatus}></input>

                                    </div>
                                    <br>
                                    </br>
                                    <button className="btn btn-success" onClick={this.UpadateRooms}>Save</button>
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
export default UpdateRoom;