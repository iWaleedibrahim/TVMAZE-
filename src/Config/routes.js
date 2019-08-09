
import {
    createAppContainer,
    createSwitchNavigator,
    createDrawerNavigator,
    createStackNavigator,
} from 'react-navigation'
import { Profile, Show } from '../Screens'
import Login from '../Screens/auth/login'
import Home from '../Screens/home'
import ShowList from '../Screens/home/ShowList'


/**
|--------------------------------------------------
| Stach Navigators for in-app screens
|--------------------------------------------------
*/

const ProfileStack = createStackNavigator({
    Profile: { screen: Profile },
},
    {
        initialRouteName: 'Profile',
        headerMode: 'screen',
        mode: 'card'
    }
)


const ShowStack = createStackNavigator({
    Show: { screen: Show },
},
    {
        initialRouteName: 'Show',
        headerMode: 'screen',
        mode: 'card'
    }
)


const HomeStack = createStackNavigator({
    ProfileStack: { screen: ProfileStack },
    ShowStack: { screen: ShowStack },
    Home: { screen: Home },
    ShowList: { screen: ShowList }
},
    {
        initialRouteName: 'ShowList',
        headerMode: 'screen',
        mode: 'card'
    }
)

/**
|--------------------------------------------------
|  App Container (Drawer)
|     : Holds Home Stack and all paths.
|--------------------------------------------------
*/

const Drawer = createDrawerNavigator({
    HomeStack: { screen: HomeStack },
    Profile: { screen: Profile },

},
    {
        initialRouteName: 'HomeStack'
    }
)

/**
|--------------------------------------------------
|                       Auth Stack 
|  { Signin, SignUp, ForgetPassword, fbSignin }
|--------------------------------------------------
*/

const AuthStack = createStackNavigator({
    // swiper to be added
    Login: { screen: Login }, // security issue
},
    {
        initialRouteName: 'Login',
        headerMode: 'none',
        mode: 'card'
    }
)

const IntroStack = createSwitchNavigator({ // createSwitchNavigator
    AuthStack: { screen: AuthStack },
    Drawer: { screen: Drawer }
},
    {
        initialRouteName: 'AuthStack',
        headerMode: 'none',
        mode: 'card'
    }
)



export default createAppContainer(Drawer)

// Intro Stack { Intro, Splash, Launch } 

// Drawer Up => { Stacks, Tab, Plain Screen }

// Home Stack
// Show Stack { Show, Epsiodes, Cast }
