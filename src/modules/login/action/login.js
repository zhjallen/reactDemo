import constant from '../constant';

export default function getNum() {
    console.log('getnum')
    return {
        type: `${constant.NAME}GETNUM`,
    };
}
