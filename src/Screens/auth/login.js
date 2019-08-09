
import React, { Component } from 'react'
import { styles } from './styles'
import Loading from '../../Components/Loading'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../../Store/actions/authActions'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'


class Login extends Component {

    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
    }

    onButtonPress = () => {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

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

    render() {
        const { email, password, error, loading } = this.props
        return (
            <ScrollView
                contentContainerStyle={styles.scroll}
                keyboardDismissMode={'on-drag'}
            >
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('../../Assets/icon.png')} />
                    <Text style={styles.brand}> {"Please Login "}</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={"#111"}
                        placeholder={"Email..."}
                        value={email}
                        onChangeText={(email) => this.onEmailChange(email)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={"#111"}
                        placeholder={"Password..."}
                        value={password}
                        onChangeText={(password) => this.onPasswordChange(password)}
                    />
                    {error ? <Text style={styles.error}> {error.message} </Text> : null}
                    <TouchableOpacity
                        onPress={() => loginUser({ email, password })}
                        style={styles.button}
                    >
                        <Text style={styles.login}>{"Login"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    // onPress={() => this.props.navigation.navigate("ForgetPassword")}
                    >
                        <Text style={styles.forgetPassword}>
                            {"Forgot you login Details? Get Help Signing in"}
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.register}>
                        <TouchableOpacity
                        // onPress={() => this.props.navigation.navigate("Register")}
                        >
                            <Text style={{ fontFamily: 'Ubuntu-Medium' }}>
                                {"Don't have account? create account now"}
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View >
            </ScrollView >
        )
    }
}

const mapStateToProps = ({ AuthReducer }) => {
    const { email, password, error, loading, user } = AuthReducer;

    return { email, password, error, loading, user };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(Login)
