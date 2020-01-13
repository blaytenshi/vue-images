import qs from 'qs';

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
    }
}