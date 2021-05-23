import React from "react"
import { useEffect,useState } from "react";
import axios from "axios"
import { NavLink } from 'react-router-dom';

function DataFetching(){
    const [post,setPost]=useState({});
    const [id,setId]=useState(1);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res);
            setPost(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[id])

    return(
        <>
        <NavLink to="/">Back</NavLink>
        <div>
            <input style={{marginTop:"20px"}} type="text" value={id} onChange={e=>setId(e.target.value)}></input>
        </div>
        
        <div class="center">
        
            <table>
                <tr>
                    <th>Post ID</th>
                    <th>Post Title</th>
                    <th>Post Body</th>
                </tr>
                <tr>
                    {
                        <td>{post.id}</td> 
                    }
                    {
                        <td>{post.title}</td>
                    }
                    {
                        <td>{post.body}</td>
                    }
                </tr>
                
                    
                
                
                    
               
                
                
            </table>
        </div>
        </>
    )
}

export default DataFetching;