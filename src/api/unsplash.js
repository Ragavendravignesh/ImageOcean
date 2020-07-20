import axios from 'axios'

export default axios.create ({ 
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization :'Client-ID iDRGGjDRtUAtenTQPRUZdhmfUumd6aP2Jn-Cy6T1uJY'
    }
})