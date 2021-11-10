import React, {Component}from 'react';
import roomService from '../services/roomService';

class AddRooms extends Component{
    constructor(props){
        super(props)
        
        this.state={
            id:this.props.match.params.id,
            name:'',
            description:'',
            price: '',
            capacity:'',
            status:true,
            imageUrl:''



        }
        this.changeName=this.changeName.bind(this);
        this.changeCapacity=this.changeCapacity.bind(this);
        this.changePrice=this.changePrice.bind(this);
        this.changeimgUrl=this.changeimgUrl.bind(this);
        this.changeDescription=this.changeDescription.bind(this);
        this.Changestatus=this.Changestatus.bind(this);
        this.saveRooms=this.saveRooms.bind(this);
       

     
    }
    componentDidMount(){

        if(this.state.id==-1){
            return

        }else{
            roomService.getroomById(this.state.id).then((res)=>{
                let room=res.data;
                this.setState({name:room.name,
                    capacity:room.capacity,
                    price:room.price,
                    description:room.description,
                    imageUrl:room.imageUrl,
                    status:room.status});
            })

        }
       
    }
    saveRooms=(e)=>{
        e.preventDefault();
        let room={name:this.state.name,capacity:this.state.capacity,price:this.state.price,description:this.state.description,status:this.state.status,imageUrl:this.state.imageUrl};
        console.log('Rooms=>'+JSON.stringify(room));

        if(this.state.id==-1){
            roomService.createRooms(room).then(res=>{
                this.props.history.push('/dash')
            })
    

        }else{
            roomService.updateRoom(room,this.state.id).then((res)=>{
                this.props.history.push('/dash');
    
            });

        }
        
     

     
    }
    Changestatus=(event)=>{
        this.setState({status:event.target.value});
    }
    changeimgUrl=(event)=>{
        this.setState({imageUrl:event.target.value});
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
    cancel(){
        this.props.history.push('/')
    }
    getTitle(){
        if(this.state.id ==-1){
            return    <h3 className="text-center">Add Rooms</h3>
           

         
        }
        else{
            return    <h3 className="text-center">Update Rooms</h3>
                
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
                                        <label> Image Url</label>
                                        <input placeholder="imageUrl" name="imageUrl" className="form-control"
                                        value={this.state.imageUrl} onChange={this.changeimgUrl}></input>

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
                                        value={this.state.status} onChange={this.Changestatus}></input>

                                    </div>
                                    <br>
                                    </br>
                                    <button className="btn btn-success" onClick={this.saveRooms}>Save</button>
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
export default AddRooms;