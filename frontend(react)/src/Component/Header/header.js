import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './Header.css';





const Header=(props)=>{
    const {items} = props;
    return(
        <div>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark shadow-sm   "  >
            <Link className="navbar-brand" to="/">
                   <span className="navbar-brand mb-0 h1"> </span>
                   <h4 class="text-uppercase" style={{ color: "white", fontFamily:"cursive" }}>Room Booking System</h4>
                  
                </Link>  
              
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav nav-tabs  ">
                
                    <li className="nav-item" style={{width:"100px"}}>
                        <span className="badge badge-pill badge-success cartnum" ></span>
                        <Link className="nav-link" to="/"><span className="align-text-bottom "><HomeIcon/></span></Link> 
                        {/*<Link to="/" className="nav-link ">*/}
                        {/*<ShoppingCartIcon/>*/}
                        {/*</Link>*/}


                    </li>

                    <li className="nav-item" style={{width:"100px"}}>
                        <span className="badge badge-pill badge-success cartnum" ></span>
                        <Link className="nav-link" to="/dash"><span className="align-text-bottom"><ExitToAppIcon/></span>Dashboard</Link>
                        {/*<Link to="/" className="nav-link ">*/}
                        {/*<ShoppingCartIcon/>*/}
                        {/*</Link>*/}


                    </li>
                    
                    
                 
                    </ul>

                    </div>



             
           
            </nav>
        </div>
    )
};
export default Header;
   