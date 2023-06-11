import React, {useState, useEffect} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import axios from 'axios';


export default function Home(){

    const[user, setUser] = useState([]);

    const users = async()=>{
        try{
            const res = await fetch('/user',{
                method:"GET"
            });
            if(res.status!==200){
                const error = new Error(res.error);
                throw error;
            }
            const data = await res.json();
            // console.log(data);
            setUser(data.data2);
        }
        catch(error){
            console.log(error);
        }
    };
    useEffect(()=>{
        users()
    },[])

    return(
        <>
            <div className=" mt-5">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Username</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Email</td>
                            <td>Address</td>
                            <td>Password</td>
                            <td>Confirm Password</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((e,i)=>{
                                return(
                                    <tr>
                                        {/* {console.log(e,i)} */}
                                        <td>{e.username}</td>
                                        <td>{e.first_name}</td>
                                        <td>{e.last_name}</td>
                                        <td>{e.email}</td>
                                        <td>{e.address}</td>
                                        <td>{e.password}</td>
                                        <td>{e.confirm_password}</td>
                                    </tr>
                                ) 
                            })

                            // user.forEach((e)=>{
                            //     <tr>
                            //         {console.log(e)}
                            //         <td>{e.username}</td>
                            //         <td>{e.first_name}</td>
                            //         <td>{e.last_name}</td>
                            //         <td>{e.email}</td>
                            //         <td>{e.address}</td>
                            //         <td>{e.password}</td>
                            //         <td>{e.confirm_password}</td>
                            //     </tr>
                            // })
                        }
                    </tbody>
                </table>
                
            </div>
        </>
    )
}