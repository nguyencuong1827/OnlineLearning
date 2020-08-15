import React, {useRef, useState, useContext, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
  Text,
  Alert,
  ImageBackground,
} from 'react-native';
import FormInput from '../../components/Authentication/FormInput';
import ButtonSubmit from '../../components/Authentication/ButtonSubmit';
import {AuthenticationContext} from '../../providers/authentication-provider';
import {
  Colors,
  DistanceScale,
  ScaleSize,
  Typography,
} from '../../globals/styles';
import logo from '../../../assets/images/logo.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Register from '../Register';
import ForgotPassword from '../ForgotPassword';

const Login = (props) => {
  const txtPassword = useRef(null);
  const btnLogin = useRef(null);
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const {userState, login} = useContext(AuthenticationContext);

  const handleSubmit = () => {
    if (!email || !password) {
      ToastAndroid.showWithGravity(
        "Email or password can't null",
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
      return;
    }
    login(email, password);
  };
  useEffect(() => {
    if (userState.messageError) {
      ToastAndroid.showWithGravity(
        userState.messageError,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    }
  }, [userState.messageError]);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.container}
        enabled={showRegisterModal || showForgotPasswordModal ? false : true}>
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}>
          <View style={styles.logoContainer}>
            <View style={styles.logoContainer}>
              <Image source={logo} />
            </View>
            <View style={styles.infoContainer}>
              <FormInput
                styleInput={styles.input}
                placeholder="Email"
                placeholderTextColor="gray"
                keyboardType="email-address"
                returnKeyType="next"
                defaultValue={email}
                onChangeText={(text) => setemail(text)}
                onSubmitEditing={() => txtPassword.current.focus()}
              />
              <FormInput
                styleInput={styles.input}
                placeholder="Password"
                placeholderTextColor="gray"
                returnKeyType="go"
                secureTextEntry
                autoCorrect={false}
                ref={txtPassword}
                defaultValue={password}
                onChangeText={(text) => setPassword(text)}
                onSubmitEditing={() => btnLogin.current.focus()}
              />
              <TouchableOpacity
                style={styles.forgotPassword}
                onPress={() => setShowForgotPasswordModal(true)}>
                <Text style={styles.txtForgotPassword}>Forgot password?</Text>
              </TouchableOpacity>

              <ButtonSubmit
                ref={btnLogin}
                buttonSubmitStyle={styles.buttonContainer}
                titleSubmitStyle={styles.buttonText}
                title="SIGN IN"
                onSubmit={handleSubmit}
              />
              <TouchableOpacity
                style={styles.signUp}
                onPress={() => setShowRegisterModal(true)}>
                <Text style={styles.txtSignUp}>Don't have an account? </Text>
                <Text style={styles.txtForgotPassword}>Register Now</Text>
              </TouchableOpacity>
              <Register
                showRegisterModal={showRegisterModal}
                setShowRegisterModal={setShowRegisterModal}
              />
              <ForgotPassword
                showForgotPasswordModal={showForgotPasswordModal}
                setShowForgotPasswordModal={setShowForgotPasswordModal}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBlue,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,

    height: ScaleSize.scaleSizeHeight(180),
    padding: DistanceScale.spacing_16,
  },
  input: {
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 10,

    height: ScaleSize.scaleSizeHeight(30),
    paddingHorizontal: DistanceScale.spacing_10,
    marginTop: DistanceScale.spacing_10,

    color: Colors.white,
    fontSize: Typography.fontSize16,
  },
  buttonContainer: {
    backgroundColor: Colors.orange,
    paddingVertical: DistanceScale.spacing_12,
    borderRadius: 10,

    marginTop: DistanceScale.spacing_12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    color: Colors.black,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: DistanceScale.spacing_5,
  },
  txtForgotPassword: {
    color: Colors.orange,
    fontSize: Typography.fontSize14,
  },
  signUp: {
    flexDirection: 'row',
    alignSelf: 'center',

    marginTop: DistanceScale.spacing_10,
  },
  txtSignUp: {
    color: Colors.white,
    fontSize: Typography.fontSize14,
  },
});
