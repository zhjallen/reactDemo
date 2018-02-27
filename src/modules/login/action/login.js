import constant from '../constant';
import api from '../../../utils/api';

export default function getNum() {
    return {
        type: `${constant.NAME}GETNUM`,
        payload: {
            meta: {
                num: 10,
            },
        },
    };
}

export function login(loginData) {
    return {
        type: `${constant.NAME}LOGIN`,
        payload: {
            promise: api.put('/api/login', {
                data: loginData,
            }),
        },
    };
}
