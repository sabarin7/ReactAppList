const InitialState = {
    count: 0,
};

const inccount = (state, action) => {
    // debugger
    // const { payload} = action;
    return {
        ...state,
        count : state.count + 1,
    }
}

const deccount = (state, action) => {
    // debugger
    // const { payload} = action;

    if (state.count === 0) return state;
    return {
        ...state,
        count: state.count -1 ,
    }
}

export function counterReducer(state = InitialState, action) {
    switch(action.type) {
        case 'INCR': return inccount(state, action);
        case 'DEC': return deccount(state, action);
    default: 
        return state;
    }
}