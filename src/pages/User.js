import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import UserInfo from '../UserInfo/UserInfo'
import TshirtList from '../components/TshirtList'

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
    );
};

export default User;