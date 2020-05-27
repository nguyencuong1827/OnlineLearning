import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
} from 'react-native';

const Login = () => {
  const txtPassword = useRef(null);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}>
          <View style={styles.logoContainer}>
            <View style={styles.logoContainer}>
              <Image source={require('../../../../assets/images/logo3.png')} />
            </View>
            <View style={styles.infoContainer}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="gray"
                keyboardType="email-address"
                onSubmitEditing={() => txtPassword.current.focus()}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="gray"
                returnKeyType="go"
                secureTextEntry
                autoCorrect={false}
                ref={txtPassword}
              />
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>SIGN IN</Text>
              </TouchableOpacity>
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
