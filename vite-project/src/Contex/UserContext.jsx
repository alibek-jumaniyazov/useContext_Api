// import axios from "axios";
// import React, { createContext, useEffect } from "react";


// const url = "http://faveo.uz:8080/api/v1/todos"
// const user = JSON.parse(localStorage.getItem('user'))


// export const ContextApi = createContext(



// )

// function ahh() {
//     axios.get(url, {
//         headers: {
//             'Authorization': "Bearer " + user.token
//         }
//     }).then(respone => data = respone.data)
//     const data = []
// }

// import { createContext } from 'react';

// const UserContext = createContext();

// export default UserContext;



import React, {  createContext, useEffect, useState } from 'react';
import { getUserData } from './api';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [userr, setUser] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const userData = await getUserData();
            setUser(userData);
        };

        fetchData();
    }, []);



    
    return (
        <UserContext.Provider value={{ userr ,setUser  }}>
            {children}
        </UserContext.Provider>
    )
};



