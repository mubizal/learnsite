import React from "react";

const Readonlyrow = ({contacts,handleEdit,handleDelete}) =>{


    return(
        <tr>
            <td>{contacts.fullName}</td>
            <td>{contacts.phoneNumber}</td>
            <td>{contacts.email}</td>
            <td>{contacts.username}</td>
            <td>{contacts.password}</td>
            <td>
                <button type="button" onClick={(e)=>handleEdit(e, contacts)}>Edit</button>
                <button type="button" onClick={(e)=>handleDelete(contacts.id)}>Delete</button>
            </td>
        </tr> 
    );

};

export default Readonlyrow;