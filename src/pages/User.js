import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_TSHIRTSBYUSER } from '../utils/queries';

const User = () => {

    const { loading, data } = useQuery(QUERY_TSHIRTSBYUSER);
    const userTShirts = data?.userTShirts || {}

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="main-area" >
                {userTShirts.map(({ _id, title, brand, description, imageLink }, i) => {
                    return (
                        <div key={i}>
                            <h3>{title}</h3>
                            <p>{brand}</p>
                            <p>{description}</p>
                            <img src={imageLink} />
                            <button onClick={() => window.location.replace(`/edit/${_id}`)}>Edit</button>
                        </div>
                    )
                })}
            </div>
        </div >
    );
};

export default User;