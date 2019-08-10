
import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Loading } from '../../Components'
import { emailChanged, passwordChanged, loginUser } from '../../Store/Actions'
import { styles } from './styles'


class SignIn extends Component {

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
})(SignIn)
