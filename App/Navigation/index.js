
import { createAppContainer, createSwitchNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { ShowListScreen, SignInScreen, HomeScreen, ProfileScreen, ShowScreen } from '../Screens'

/**
|--------------------------------------------------
| Stach Navigators for in-app screens
|--------------------------------------------------
*/

const ProfileStack = createStackNavigator(
    {
        Profile: { screen: ProfileScreen },
    },
    {
        headerMode: 'screen',
    }
)


const ShowStack = createStackNavigator(
    {
        Show: { screen: ShowScreen },
    },
    {
        headerMode: 'screen',
    }
)

const HomeStack = createStackNavigator(
    {
        Home: { screen: HomeScreen },
    },
    {
        headerMode: 'screen',
    }
)

const ShowListStack = createStackNavigator(
    {
        ShowList: { screen: ShowListScreen },
    },
    {
        headerMode: 'screen',
    }
)


const MainStack = createStackNavigator(
    {
        Show: { screen: ShowStack },
        Home: { screen: HomeStack },
        ShowList: { screen: ShowListStack }
    },
    {
        initialRouteName: 'ShowList',
        headerMode: 'none',
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
    Main: { screen: MainStack },
    Profile: { screen: ProfileStack },
},
    {
        initialRouteName: 'Main'
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
    SignIn: { screen: SignInScreen }, // security issue
},
    {
        initialRouteName: 'SignIn',
        headerMode: 'none',
        mode: 'card'
    }
)

const IntroStack = createSwitchNavigator(
    {
        Drawer: { screen: Drawer },
        AuthStack: { screen: AuthStack },
    },
    {
        initialRouteName: 'Drawer',
        headerMode: 'none',
        mode: 'card'
    }
)


export default createAppContainer(ShowStack)

// Intro Stack { Intro, Splash, Launch } 

// Drawer Up => { Stacks, Tab, Plain Screen }

// Home Stack
// Show Stack { Show, Epsiodes, Cast }
