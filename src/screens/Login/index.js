/* eslint-disable react-hooks/exhaustive-deps */
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
} from 'react-native';
import FormInput from '../../components/Authentication/FormInput';
import ButtonSubmit from '../../components/Authentication/ButtonSubmit';
import {AuthenticationContext} from '../../providers/authentication-provider';
import {Colors, Distance, ScaleSize, Typography} from '../../globals/styles';
import logo from '../../../assets/images/logo.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Register from '../Register';
import ForgotPassword from '../ForgotPassword';
import {AppNavigatorScreen} from '../../globals/constants/screen-name';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import {LanguageContext} from '../../providers/language-provider';

const configGoogle = {
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  webClientId:
    '116025677018-nbtn7gpt2oe8oivild3n3h0f79aqckhc.apps.googleusercontent.com',
  offlineAccess: true,
  forceCodeForRefreshToken: true,
};

const Login = (props) => {
  const {navigation} = props;
  const txtPassword = useRef(null);
  const btnLogin = useRef(null);
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const {userState, login, loginWithGoogle} = useContext(AuthenticationContext);
  const {language} = useContext(LanguageContext);

  const handleSubmit = () => {
    if (!email || !password) {
      ToastAndroid.showWithGravity(
        `${
          language === 'eng'
            ? "Email or password can't null"
            : 'Email hoặc mật khẩu không thể bỏ trống!'
        }`,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
      return;
    }
    login(email, password);
    if (userState.messageError !== '') {
      ToastAndroid.showWithGravity(
        `${
          language === 'eng'
            ? 'Email or password not correct'
            : 'Email hoặc mật khẩu không đúng!'
        }`,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    }
  };
  const handleLoginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      //console.log('login google - login screen: ', response.user);
      loginWithGoogle(response.user.email, response.user.id);
      if (userState.token) {
        navigation.replace(AppNavigatorScreen, {firstLogin: true});
      }
      if (userState.messageError !== '') {
        ToastAndroid.showWithGravity(
          `${language === 'eng' ? 'System error' : 'Hệ thống bị lỗi'}`,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
        // play services not available or outdated
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };
  useEffect(() => {
    GoogleSignin.configure(configGoogle);
  }, []);

  useEffect(() => {
    if (userState.token) {
      navigation.replace(AppNavigatorScreen, {firstLogin: true});
    }
  }, [userState]);

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
            <View style={styles.logo}>
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
              <GoogleSigninButton
                style={styles.buttonGoogle}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={handleLoginWithGoogle}
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

    height: ScaleSize.scaleSizeHeight(220),
    padding: Distance.spacing_16,
  },
  input: {
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 10,

    height: ScaleSize.scaleSizeHeight(30),
    paddingHorizontal: Distance.spacing_10,
    marginTop: Distance.spacing_10,

    color: Colors.white,
    fontSize: Typography.fontSize16,
  },
  buttonContainer: {
    backgroundColor: Colors.orange,
    paddingVertical: Distance.spacing_12,
    borderRadius: 10,
    height: ScaleSize.scaleSizeHeight(32),
    marginTop: Distance.spacing_12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    color: Colors.black,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: Distance.spacing_5,
  },
  txtForgotPassword: {
    color: Colors.orange,
    fontSize: Typography.fontSize14,
  },
  signUp: {
    flexDirection: 'row',
    alignSelf: 'center',

    marginTop: Distance.spacing_10,
  },
  txtSignUp: {
    color: Colors.white,
    fontSize: Typography.fontSize14,
  },
  buttonGoogle: {
    borderRadius: 10,
    marginTop: Distance.spacing_5,
    height: ScaleSize.scaleSizeHeight(35),
    width: '100%',
  },
  logo: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: ScaleSize.HEIGHT / 2 - 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
