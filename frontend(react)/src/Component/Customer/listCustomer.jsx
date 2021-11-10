import React, {Component} from "react";
import customerServices from "../../services/customerServices";

class ListCustomer extends Component{
    constructor(props){
        super(props)
        this.state={
            customers:[]


        }
        this.addCustomers= this.addCustomers.bind(this);
        this.editCustomers=this.editCustomers.bind(this);
    }
    componentDidMount(){
         customerServices.getCustomers().then((res)=>{
             this.setState({customers:res.data})
         })
    }
  

    addCustomers(){
        this.props.history.push('/addcustomers/-1')
    }
    editCustomers(id){
        this.props.history.push(`/addcustomers/${id}`)


    }

    deleteCustomers(id){
        customerServices.delateCustomers(id).then((res)=>{
            this.setState({customers:this.state.customers.filter(customer=>customer.id!==id)});
        })


    }
    render(){
        return(
            <div>
                <h2 className="text-center" style={{fontFamily:"cursive"}}>Customer List</h2>
                <div className="row">
                <div className="col-6">
                    <button className="btn btn-primary" onClick={this.addCustomers}>Add Customers</button>
                    </div>

                </div>
                <br>
                </br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                         <thead>
                             <tr>
                                 <th> First Name</th>
                                 <th> Last Name</th>
                                 <th> Email Address</th>
                                 <th> Telephone</th>
                                 <th>Actions</th>
                                 
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 this.state.customers.map(
                                     customer=>
                                     <tr key={customer.id}>
                                         <td> {customer.firstName}</td>
                                         <td> {customer.lastName}</td>
                                         <td> {customer.email}</td>
                                         <td> {customer.telephone}</td>
                                         <td>
                                             <div className="btn-toolbar pull-right">
                                                  <button onClick={()=>this.editCustomers(customer.id)} className="btn btn-info ">Update</button>
                                                  <div className="col-1"></div>
                                             

                                            
                                            
                                             
                                             <button onClick={()=>this.deleteCustomers(customer.id)} className="btn btn-danger ">Delete</button>
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
export default ListCustomer;