import React from 'react';
import './UserInfo.css'

const UserInfo = (props) => {
    const { name, username, email, phone} = props.user;
    return (
        <div>
            <div className="card">
                {/* <img src={img} alt="" /> */}
                <h4>{name}</h4>
                <span>Username: {username}</span>
                <span>Email: {email}</span>
                <span>Phone: {phone}</span>
                <button className='loginSubmit' onClick={()=> props.handleAddBtn(props.user)}>Add</button>
            </div>
        </div>
    );
};

export default UserInfo;