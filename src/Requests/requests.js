import axios from 'axios';

export const Get = async () => {
    // fetch data from a url endpoint
    const data = await axios.get("http://localhost:5000/api/");
    console.log('get data: ',data.data);
    return data.data;
}


export const Login = async (Account) => {
    // fetch data from a url endpoint
    const data = await axios.post("http://localhost:5000/api/login", Account);
    //console.log('post : ', data);
    //console.log('post data: ', data.data);
    return data.data;
}

export const SignUp = async (Account) => {
    // fetch data from a url endpoint
    const data = await axios.post("http://localhost:5000/api/register", Account);
    console.log('post data: ', data.data);
    return data.data;
}

export const GetSearch = async (substr) => {
    // fetch data from a url endpoint
    const data = await axios.post("http://localhost:5000/api/search", {substring :substr});
    console.log('search data: ',data.data);
    return data.data;
}