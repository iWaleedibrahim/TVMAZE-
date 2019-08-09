import { f, auth } from '../../Config/firebase'


import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  console.log(text)
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  console.log(text)
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  console.log("Triggered LoginUser Action ")
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    console.log("dispatched Typed Login_USER ")
    f.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
        f.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
  console.log("Login LoginUser failed ")
};

const loginUserSuccess = (dispatch, user) => {
  console.log("Login LoginUser success ")
  console.log("USER MODEL FROM FIRBASE ===<", user)
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

/**
|--------------------------------------------------
|
|--------------------------------------------------
*/
    // logUserin = async (email, password) => {
    //     this.setState({ loading: true, error: '' })
    //     try {
    //         let user = await auth.signInWithEmailAndPassword(email, password)
    //         this.props.navigation.navigate("Feed");
    //     }

    //     catch (error) {
    //         console.log(error)
    //         this.setState({ error: error })
    //     }
    //     this.setState({ loading: false })
    // }

    // logUserOut = () => {
    //     auth.signOut().then(() => console.log("User SignedOut"))
    //         .catch((error) => console.log("Error =>", error))
    //     this.setState({ loading: false })
    // }

    // checkUserLogin = () => {
    //     f.auth().onAuthStateChanged(function (user) {
    //         if (user) {
    //             console.log('loggedIn')
    //             // this.setState({ loggedin: true })
    //         }
    //         else {
    //             console.log('loggedOut')
    //             // this.setState({ loggedin: false })
    //         }
    //     })
    // }