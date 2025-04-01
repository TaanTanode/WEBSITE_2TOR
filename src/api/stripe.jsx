import axios from 'axios'


export const payment = async (token) =>
    await axios.post('https://client-2-tor-api.vercel.app/api/user/create-payment-intent', {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
