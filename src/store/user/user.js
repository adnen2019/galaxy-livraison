// user.js
export const updateUser = (user) => {
  // console.log("adadadad",user);
    return { 
      type: 'UPDATE_USER',
      user: user
    }
  }