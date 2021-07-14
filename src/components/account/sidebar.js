import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import activeRec from '../../images/Rectangle 44.svg';
import profile from '../../images/Vector (1).svg';

const Sidebar=(props)=> {

    const activeValue = {
        bgcolor: '#1f3059',
        txcolor: '#ffffff',
        image: 'visible'
    }

    const initialValue = {
        bgcolor: '#ffffff',
        txcolor: '#071841',
        image: 'hidden'
    }

    const [dashboardOptions, setDashboard] = useState(props.page === 'dashboard' ? activeValue : initialValue);
    const [litterOptions, setLitter] = useState(props.page === 'litter' ? activeValue : initialValue);
    const [dogOptions, setDog] = useState(props.page === 'dog' ? activeValue : initialValue);

    return (
        <>
            <div className="col-lg-3 box5 box6 col-md-8 col-sm-10 col-10 d-flex flex-column mb-4">                                   
                <h5><img src={profile} alt ="profile"/>Name Surname</h5>
                <p className="pl-4">abc@providename.com</p> 
                <NavLink to='./dashboard'> 
                    <button style={{backgroundColor:dashboardOptions.bgcolor}} className=" mt-2 btn-login d-flex"><img style={{visibility:dashboardOptions.image}} src={activeRec} /> <p style={{color:dashboardOptions.txcolor}} className="dogline1"> My account</p></button> 
                </NavLink>
                <NavLink to='./litters'> 
                    <button style={{backgroundColor:litterOptions.bgcolor}} className=" mt-2 btn-login d-flex"><img style={{visibility:litterOptions.image}} src={activeRec} /> <p style={{color:litterOptions.txcolor}} className="dogline1"> Litters</p></button> 
                </NavLink>
                <NavLink to='./dogs'> 
                    <button style={{backgroundColor:dogOptions.bgcolor}} className="mt-2 btn-login d-flex"><img style={{visibility:dogOptions.image}} src={activeRec} /> <p style={{color:dogOptions.txcolor}} className="dogline1"> Dogs</p></button> 
                </NavLink>
            </div>
        </>
    );
};
export default Sidebar;
