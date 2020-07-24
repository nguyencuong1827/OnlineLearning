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
  Alert,
} from 'react-native';
import FormInput from '../../components/Authentication/FormInput';
import ButtonSubmit from '../../components/Authentication/ButtonSubmit';
import {RooTabScreen} from '../../globals/constants/screen-name';

const Login = (props) => {
  const txtPassword = useRef(null);
  const btnLogin = useRef(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //   useEffect(() => {
  //     if (state.messageError) {
  //       ToastAndroid.showWithGravity(
  //         state.messageError,
  //         ToastAndroid.LONG,
  //         ToastAndroid.TOP,
  //       );
  //     }
  //   }, [state.messageError]);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}>
          <View style={styles.logoContainer}>
            <View style={styles.logoContainer}>
              <Image source={require('../../../assets/images/logo3.png')} />
            </View>
            <View style={styles.infoContainer}>
              <FormInput
                styleInput={styles.input}
                placeholder="Username"
                placeholderTextColor="gray"
                keyboardType="email-address"
                returnKeyType="next"
                defaultValue={username}
                onChangeText={(text) => setUsername(text)}
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
              <ButtonSubmit
                ref={btnLogin}
                buttonSubmitStyle={styles.buttonContainer}
                titleSubmitStyle={styles.buttonText}
                title="SIGN IN"
                onSubmit={() => props.navigation.navigate(RooTabScreen)}
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
    backgroundColor: '#2c3e50',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: 'white',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#d35400',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
