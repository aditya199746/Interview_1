import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import "./form.css";
const Form=()=>{

    const [userRegistration, setUserRegistration] = useState({
        name:"",
        email:"",
        phone:"",
        address:""

    });

    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name);

        setUserRegistration({...userRegistration, [name]:value})
    }

    const [records,setRecords]=useState([]);

    const handleSubmit=(event)=>{
       event.preventDefault(); 

       const newRecord= {...userRegistration,id:new Date().getTime.toString()};

        setRecords([...records,newRecord]);

        setUserRegistration({name:"",email:"",phone:"",address:""});
    }
    return(
        <>
        <NavLink to="/">Back</NavLink>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={userRegistration.name} onChange={handleInput} name="name" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={userRegistration.email} onChange={handleInput} name="email" />
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="number" value={userRegistration.phone} onChange={handleInput} name="phone" />
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" value={userRegistration.address} onChange={handleInput} name="address" />
                </div>
               
                <button type="submit">Submit</button>
            </form>

            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>phone</th>
                        <th>Address</th>
                    </tr>
                    {
                    records.map((currElement)=>{
                        const{id,name,email,phone,address}=currElement;
                        return(
                             
                                <tr key={id}>
                                    <th>{name}</th>
                                    <th>{email}</th>
                                    <th>{phone}</th>
                                    <th>{address}</th>
                                </tr>
                                
                            
                        )
                    })
                }
                </table>
                
                
            </div>
        </>
    )
}
export default Form;