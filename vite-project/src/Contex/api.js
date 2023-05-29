


import axios from 'axios';  

const getUserData = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    try {
        const response = await axios.get("http://faveo.uz:8080/api/v1/todos", {
            headers: {
                'Authorization': "Bearer " + user.token
            }
        });
        console.log(response.data);

        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
};

export { getUserData };