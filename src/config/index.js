const url_backend = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080'
    : 'https://dev-aluraflix.herokuapp.com';

export default {
    url_backend,
};