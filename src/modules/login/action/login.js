import constant from '../constant';

export default function getNum() {
    return {
        type: `${constant.NAME}GETNUM`,
        payload: {
            meta: { num: 10 },
        },
    };
}
