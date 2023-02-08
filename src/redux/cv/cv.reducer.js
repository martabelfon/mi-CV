import { CV } from '../../CV/CV';

const INITIAL_STATE = {
    CV: CV,
    error: false,
    loading: false,
}

export const cvReducer = (state = INITIAL_STATE, action) => {
    
    if (action.type === "TROLOLOLO") {
        return { ...state, trololo: action.payload }; // trolololo: 'Helado de fresa'
    }

    return state;
    
};