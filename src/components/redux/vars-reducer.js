const VARS = 'APP/VARS';

let initialState = {
    variant: [{nominalValues:5000, quantities: 100},
        {nominalValues:2000, quantities: 400},
        {nominalValues:1000, quantities: 1000},
        {nominalValues:500, quantities: 3000},
        {nominalValues:200, quantities: 5000},
        {nominalValues:100, quantities: 8000},
        {nominalValues:50, quantities: 10000}]
}

const nominalVarsReducer = (state = initialState, action) => {
    switch (action.type) {
        case VARS:
            let varsArray = action.newArray
            return {
                variant: varsArray
            }
        default:
            return state;
    }
}

//action creator
export const replaceArray = (newArray) => ({type: 'APP/VARS', newArray})

export default nominalVarsReducer;