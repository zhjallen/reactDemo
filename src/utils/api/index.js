import Api from './apiRest';

const evn = {};

evn.baseURI = 'http://127.0.0.1:4000';

// //从配置中读取环境配置信息
// if (_NOMES_VERNAME)
//   evn = require('../../env/' + _NOMES_VERNAME);

// let entid = window.EntId ? '/' + window.EntId : ''

export const baseURI = evn.baseURI;
const api = new Api({
    baseURI,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        // 'entid': window.getCookie('entid') ? window.getCookie('entid') : ''
    },
});

export default api;
