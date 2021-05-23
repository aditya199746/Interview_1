

import { NavLink} from 'react-router-dom'

const Header=()=>{
    return(
        <>
        <div>
            <NavLink  to="/api"> Api Data Fetch </NavLink></div>
        <div>
            <NavLink to="/form"> Contact Form </NavLink></div>
        <div>
            <NavLink to="/static"> Copy of Image given</NavLink>
        </div>
        </>
    )
}

export default Header;