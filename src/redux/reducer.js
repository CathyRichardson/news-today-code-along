const initialState = {
    count: 0,
    dollars: 0,
    name: 'Garrett'
}

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const DEPOSIT = "DEPOSIT";
const CHANGE_NUM = "CHANGE_NUM";

export function increment() {
    return {
        type: INCREMENT,
    }
}

export function decrement() {
    return {
        type: DECREMENT,
    }
}
export function deposit() {
    return {
        type: DEPOSIT,
    }
}

export function changeNum(newNum) {
    return {
        type: CHANGE_NUM,
        payload: newNum,
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                count: state.count + 1,
            }
        }
        case DECREMENT: {
            return {
                ...state,
                count: state.count - 1,
            }
        }
        case CHANGE_NUM: {
            return {
                ...state,
                count: action.payload,
            }
        }
        case DEPOSIT: {
            return {
                ...state,
                dollars: state.dollars + 10
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;