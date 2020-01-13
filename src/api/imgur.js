import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = 'f20e753727aec37';
const ROOT_URL = "https://api.imgur.com";

export default {
    login() {
        const queryString = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }

        // gets the user to navigate to this authorization URL
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    },

    fetchImages(token) {
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    
    upload(images, token) {
        // Array.from() converts Array-like objects and turns them into arrays:
        // More here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
        Array.from(images).map(image => {
            // imgur expects things to be posted to it as FormData
            // Link to it here: https://developer.mozilla.org/en-US/docs/Web/API/FormData
            const formData = new FormData();

            formData.append('image', image);

            return axios.post(
                `${ROOT_URL}/3/image`,
                formData, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
        })
    }
}