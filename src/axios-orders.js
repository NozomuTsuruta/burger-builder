import Axios from "axios";

 const instance = Axios.create({
    baseURL: 'https://react-my-burger-e399a.firebaseio.com/'
});

export default instance;