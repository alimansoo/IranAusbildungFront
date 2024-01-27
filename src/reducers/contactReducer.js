// reducers/yourReducer.js
const initialState = {
// Your initial state here
};

const yourReducer = (state = initialState, action) => {
switch (action.type) {
    case 'YOUR_ACTION_TYPE':
        return {
            // Handle the state update based on the action
        };
    default:
        return state;
}
};

export default yourReducer;
  