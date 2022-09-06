import React, { Fragment, useState } from "react";
import data from "../mock-data.json";
import {nanoid} from 'nanoid';
import Readonlyrow from "./Readonlyrow";
import Editrow from "./Editrow";

const Register = () => {
const [contact,setContact] = useState(data);
const [formdata,setFormdata] = useState(
    {
        fullName : '',
        phoneNumber : '',
        email : '',
        username : '',
        password : ''
    }
);

const [editFormdata, setEditFormdata] = useState({
    fullName : '',
    phoneNumber : '',
    email : '',
    username : '',
    password : ''
});
const [editid,setEditid] = useState(null);


    const addonchange = (e) =>{
    e.preventDefault();
    
    const tableheader = e.target.getAttribute('name');
    const tablevalue = e.target.value;

    const newformdata = {...formdata};
    newformdata[tableheader]=tablevalue;

    setFormdata(newformdata);
}

const newcontact = (e) => {
    e.preventDefault();
   const contactdetails = {
    id: nanoid(),
    fullName: formdata.fullname,
    phoneNumber: formdata.phoneNumber,
    email: formdata.email,
    username:formdata.username,
    password: formdata.password
    };

    const contactdetail = [...contact, contactdetails]
    setContact(contactdetail);
}

const handleEdit = (e,contacts) =>{
    e.preventDefault();

    setEditid(contacts.id);
}


const handleDelete = (cid) => {
    const newarrayafterDelete = [...contact];

    const index = contact.findIndex((contact) => contact.id === cid);

    newarrayafterDelete.splice(index,1);

    setContact(newarrayafterDelete);
}

const handleCancel = (E) => {
    setEditid(null);
}

return(
        <>
        <div>
            <form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>User Name</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contact.map((contacts)=> (
                        <Fragment>
                            {editid === contacts.id ? 
                            <Editrow handleCancel={handleCancel} contacts={contacts}></Editrow> :
                            <Readonlyrow contacts={contacts} handleEdit={handleEdit} handleDelete={handleDelete}></Readonlyrow>
                            }
                            
                            
                        </Fragment>
                        ))
                    }
                    
                </tbody>
            </table>
            </form>
            <br></br>
            <h1>Add contacts</h1>
            <form onSubmit={newcontact}>
                <input type="text" name="fullname" placeholder="Enter full name" required="required" onChange={addonchange}></input>
                <input type="text" name="phoneNumber" placeholder="Enter PH NUMBER" required="required" onChange={addonchange}></input>
                <input type="text" name="email" placeholder="Enter email" required="required" onChange={addonchange}></input>
                <input type="text" name="username" placeholder="Enter username" required="required" onChange={addonchange}></input>
                <input type="text" name="password" placeholder="Enter pwd" required="required" onChange={addonchange}></input>
                <button type="submit">Add</button>
            </form>
        </div>
        </>
    )
}

export default Register;