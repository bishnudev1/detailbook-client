export const initialState = localStorage.getItem('state');

export const reducer = (state,action) => {
    if(action.type === 'USER'){
        return action.payload;
    }
    return state;
}