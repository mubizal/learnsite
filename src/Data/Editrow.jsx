import React from "react";

const Editrow = (handleCancel,contact) => {
    
    const {contacts} = contact;
    console.log(contacts.fullname);
    return(

        <tr>
            <td>
                <input type="text" name="fullname" placeholder="Enter full name" required="required" value={contacts.fullname}></input>
            </td>
            <td>
                <input type="text" name="phoneNumber" placeholder="Enter PH NUMBER" required="required"></input>
            </td>
            <td>
                <input type="text" name="email" placeholder="Enter email" required="required"></input>
            </td>
            <td>
                <input type="text" name="username" placeholder="Enter username" required="required"></input>
            </td>
            <td>
                <input type="text" name="password" placeholder="Enter pwd" required="required"></input>
            </td>
            <td>
                <button type="submit">Save</button> <br></br>
                <button type="button" onClick={handleCancel}>cancel</button>
            </td>
        </tr>
    );
}
export default Editrow;