let API_URL = process.env.NODE_ENV === 'development' ? '' : process.env.PUBLIC_URL;
API_URL += '/api';

export default API_URL;
