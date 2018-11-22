
const initialState ={
    age:21
}

const reducer = (state = initialState, action) => {
    const newState = { ...state};


    if(action.type === 'AGE_UP'){
        newState.age++;
    }
    if(action.type === 'AGE_DOWN'){
        newState.age--;
    }
    if(action.type === 'AGE_UP10'){
        newState.age += 10;
    }
    if(action.type === 'AGE_DOWN10'){
        newState.age -= 10;
    }
    if(action.type === 'RESET'){
        newState.age = 0;
    }

    return newState;
};

export default reducer;