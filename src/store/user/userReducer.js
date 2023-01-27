// userReducer.js
const initialState = {
    user: { role: "" }
  }
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_USER':
        return {
          ...state,
          user: action.user
        }
      default:
        return state
    }
  }