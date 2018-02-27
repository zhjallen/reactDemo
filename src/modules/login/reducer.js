import constant from './constant';

const initState = {
    num: 0,
};
export default function reducer(state = initState, action) {
    console.log(action, 'action')
    switch (action.type) {
        case `${constant.NAME}GETNUM`:
            return {
                ...state,
                num: action.payload.meta.num,
            };
        default:
            return state;
    }
}
