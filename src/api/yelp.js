import axios from 'axios';



export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 3NIWDMKu1792xy7k5BwXiqINX4tszoiksboEzyM5VPpyS2bKQRrpfLSu28g7WThMmw3fgxtWs4QYbrKi_B4i84SglEgmGNwJ6Y-4XdJGlLObI5mbPOg6YY0qeYOmXnYx'
    }
});

