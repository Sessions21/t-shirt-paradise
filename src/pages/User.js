import React from 'react';
import fakeData from '../fakeData';
import {useState} from 'react';
import UserInfo from '../components/UserInfo/UserInfo'
import TshirtList from '../components/TshirtList'
import contactImage from "../assets/images/cover-4.png"

const User = () => {
    // console.log(fakeData);
    const trialUsers = fakeData;
    const [users, setUsers] = useState(trialUsers);
    const [Tshirt, setTshirt] = useState([]);

    const handleAddBtn = (user) => {
       const newTshirt = [...TshirtList, user];
       setTshirt(newTshirt)
    }
    return (
        <div>
            <img className="background" src={contactImage} alt="paradise scene"></img>
            <div className="main-area">
                <div className="user-container">
                    {
                    users.map(us => <UserInfo 
                        user={us}
                        handleAddBtn={handleAddBtn}>
                        </UserInfo>)
                    }
                </div>
                <div className="total-container">
                    <TshirtList Tshirt={Tshirt}></TshirtList>
                </div>
            </div>
        </div>
    );
};

export default User;