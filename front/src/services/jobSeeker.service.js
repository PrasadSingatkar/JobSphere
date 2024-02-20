import httpClient from '../http-common';

const checkCredentials = (data) => {
    return httpClient.get('/jobSeeker/signIn',{ params: data });
};



export default { checkCredentials };