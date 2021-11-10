import React, {Component}from 'react';
import customerService from '../../services/customerServices';

class AddCustomers extends Component{
    constructor(props){
        super(props)
        
        this.state={
            id:this.props.match.params.id,
            firstName:'',
            lastName:'',
            email: '',
            telephone:'',
         


        }
        this.changefirstName=this.changefirstName.bind(this);
        this.changelastName=this.changelastName.bind(this);
        this.changeemail=this.changeemail.bind(this);
        this.changetelephone=this.changetelephone.bind(this);
        this.saveCustomers=this.saveCustomers.bind(this);
       

     
    }
    componentDidMount(){

        if(this.state.id==-1){
            return

        }else{
            customerService.getCustomerById(this.state.id).then((res)=>{
                let customer=res.data;
                this.setState({
                    firstName:customer.firstName,
                    lastName:customer.lastName,
                    email:customer.email,
                    telephone:customer.telephone,
                    });
            })

        }
       
    }
    saveCustomers=(e)=>{
        e.preventDefault();
        let customer={firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,telephone:this.state.telephone};
        console.log('Customers=>'+JSON.stringify(customer));

        if(this.state.id==-1){
            customerService.crateCustomer(customer).then(res=>{
                this.props.history.push('/customer')
            })
    

        }else{
            customerService.upadteCustomer(customer,this.state.id).then((res)=>{
                this.props.history.push('/customer');
    
            });

        }
        
     

     
    }
    changefirstName=(event)=>{
        this.setState({firstName:event.target.value});
    }
    changelastName=(event)=>{
        this.setState({lastName:event.target.value});
    }


    changeemail=(event)=>{
        this.setState({email:event.target.value});
    }
    changetelephone=(event)=>{
        this.setState({telephone:event.target.value});
    }
  
    cancel(){
        this.props.history.push('/customer')
    }
    getTitle(){
        if(this.state.id ==-1){
            return    <h3 className="text-center">Add Customers</h3>
           

         
        }
        else{
            return    <h3 className="text-center">Update Customers</h3>
                
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
                                        <label> First Name</label>

                                        <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changefirstName}></input>

                                    </div>
                                    <br>
                                    </br>


                                    <div className="form-group">
                                        <label> Last Name</label>
                                        <input placeholder="lastName" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.changelastName}></input>

                                    </div>
                                    <br>
                                    </br>
                                    <div className="form-group">
                                        <label> Email</label>
                                        <input placeholder="email" name="email" className="form-control"
                                        value={this.state.email} onChange={this.changeemail} type="email"></input>

                                    </div>
                                    <br>
                                    </br>
                                    <div className="form-group">
                                        <label> Telephone </label>
                                        <input placeholder="telephone" name="telephone" className="form-control"
                                        value={this.state.telephone} onChange={this.changetelephone} type="tel"></input>

                                    </div>
                                    <br>
                                    </br>
                                   
                                
                                    <br>
                                    </br>
                                    <button className="btn btn-success" onClick={this.saveCustomers}>Save</button>
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
export default AddCustomers;