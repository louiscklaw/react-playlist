const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      return {
        ...state, authError: 'login failed'
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state, authError: null
      }
    case "SIGNOUT_SUCCESS":
      // console.log('signout success')
      return state

    case "SIGNUP_SUCCESS":
      console.log('signup success')
      return {
        ...state, authError: null
      }

    case "SIGNUP_ERROR":
      console.log('signup error', action)
      console.log('authError', action.err.message)
      return {
        ...state,
        authError: action.err.message
      }

    default:
      return state
  }
}

export default authReducer