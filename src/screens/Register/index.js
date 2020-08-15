import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
  Alert,
} from 'react-native';
import {
  DistanceScale,
  ScaleSize,
  Colors,
  Typography,
} from '../../globals/styles';
import FormInput from '../../components/Authentication/FormInput';
import {useState} from 'react';
import ButtonSubmit from '../../components/Authentication/ButtonSubmit';
import userApi from '../../api/user-api';

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateNumber(number) {
  const re = /^[0-9]+$/;
  return re.test(String(number).toLowerCase());
}

const Register = (props) => {
  const txtPhone = useRef(null);
  const txtEmail = useRef(null);
  const txtPassword = useRef(null);
  const txtConfirmPassword = useRef(null);
  const btnRegister = useRef(null);
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorUsername, setErrorUsername] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
  const [errorPhone, setErrorPhone] = useState('');

  const {showRegisterModal, setShowRegisterModal} = props;

  const handleEditUsername = (text) => {
    setUsername(text);
    if (text === '') {
      setErrorUsername('Please enter your full name!');
    } else if (text.length <= 1) {
      setErrorUsername('Full name is at least two characters!');
    } else {
      setErrorUsername('');
    }
  };

  const handleEditEmail = (text) => {
    setEmail(text);
    if (text === '') {
      setErrorEmail('Please enter your email!');
    } else if (validateEmail(text) === false) {
      setErrorEmail('Invalid email!');
    } else {
      setErrorEmail('');
    }
  };

  const handleEditPassword = (text) => {
    setPassword(text);
    if (text === '') {
      setErrorPassword('Please enter your password!');
    } else if (text.length < 8) {
      setErrorPassword('Password is at least 8 characters!');
    } else {
      setErrorPassword('');
    }
  };

  const handleEditConfirmPassword = (text) => {
    setConfirmPassword(text);
    if (text === '') {
      setErrorConfirmPassword('Please enter your confirm password!');
    } else if (text !== password) {
      setErrorConfirmPassword('Confirm password is not correct!');
    } else {
      setErrorConfirmPassword('');
    }
  };

  const handleEditPhone = (text) => {
    setPhone(text);
    if (text === '') {
      setErrorPhone('Please enter your number phone!');
    } else if (text.length < 10 || validateNumber(text) === false) {
      setErrorPhone('Invalid number phone!');
    } else {
      setErrorPhone('');
    }
  };

  const handleSubmit = async () => {
    const userInfo = {
      username,
      email,
      phone,
      password,
    };
    if (username === '') {
      setErrorUsername('Please enter your full name!');
    }
    if (email === '') {
      setErrorEmail('Please enter your email!');
    }
    if (password === '') {
      setErrorPassword('Please enter your password!');
    }
    if (confirmPassword === '') {
      setErrorConfirmPassword('Please enter your confirm password!');
    }
    if (phone === '') {
      setErrorPhone('Please enter your phone!');
    }

    if (
      errorUsername !== '' ||
      errorEmail !== '' ||
      errorPassword !== '' ||
      errorConfirmPassword !== '' ||
      errorPhone !== ''
    ) {
      return;
    }

    try {
      const response = await userApi.register(userInfo);
      console.log(response);
      const {data, status} = response;
      if (status === 200) {
        setShowRegisterModal(false);
        Alert.alert(
          'Notification',
          'Account created successfully, please visit your gmail to activate your account',
        );
      }
      if (status === 400) {
        let message = '';
        if (data.message === 'Số điện thoại đã tồn tại') {
          message = 'Phone number already exists';
        }
        if (data.message === 'Email đã tồn tại') {
          message = 'Email already exists';
        }
        ToastAndroid.showWithGravity(
          message,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showRegisterModal}>
        <KeyboardAvoidingView behavior="padding" style={styles.centeredView}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={styles.centeredView}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.title}>CREATE ACCOUNT</Text>
                <View style={styles.infoContainer}>
                  <FormInput
                    styleInput={styles.input}
                    placeholder="Full name"
                    placeholderTextColor="gray"
                    returnKeyType="next"
                    defaultValue={username}
                    onChangeText={(text) => handleEditUsername(text)}
                    onSubmitEditing={() => txtPhone.current.focus()}
                  />
                  <Text style={styles.txtErrror}>{errorUsername}</Text>
                  <FormInput
                    styleInput={styles.input}
                    placeholder="Phone"
                    placeholderTextColor="gray"
                    returnKeyType="next"
                    defaultValue={phone}
                    onChangeText={(text) => handleEditPhone(text)}
                    onSubmitEditing={() => txtEmail.current.focus()}
                    ref={txtPhone}
                  />
                  <Text style={styles.txtErrror}>{errorPhone}</Text>
                  <FormInput
                    styleInput={styles.input}
                    placeholder="Email"
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                    returnKeyType="next"
                    defaultValue={email}
                    onChangeText={(text) => handleEditEmail(text)}
                    onSubmitEditing={() => txtPassword.current.focus()}
                    ref={txtEmail}
                  />
                  <Text style={styles.txtErrror}>{errorEmail}</Text>
                  <FormInput
                    styleInput={styles.input}
                    placeholder="Password"
                    placeholderTextColor="gray"
                    secureTextEntry
                    autoCorrect={false}
                    ref={txtPassword}
                    defaultValue={password}
                    onChangeText={(text) => handleEditPassword(text)}
                    onSubmitEditing={() => txtConfirmPassword.current.focus()}
                  />
                  <Text style={styles.txtErrror}>{errorPassword}</Text>
                  <FormInput
                    styleInput={styles.input}
                    placeholder="Confirm password"
                    placeholderTextColor="gray"
                    secureTextEntry
                    autoCorrect={false}
                    returnKeyType="go"
                    ref={txtPassword}
                    defaultValue={confirmPassword}
                    onChangeText={(text) => handleEditConfirmPassword(text)}
                    onSubmitEditing={() => btnRegister.current.focus()}
                  />
                  <Text style={styles.txtErrror}>{errorConfirmPassword}</Text>
                  <ButtonSubmit
                    ref={btnRegister}
                    buttonSubmitStyle={styles.buttonContainer}
                    titleSubmitStyle={styles.buttonText}
                    title="REGISTER"
                    onSubmit={handleSubmit}
                  />
                  <TouchableOpacity
                    style={styles.btnCancel}
                    onPress={() => setShowRegisterModal(false)}>
                    <Text style={styles.txtCancel}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default Register;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: DistanceScale.spacing_10,
  },
  modalView: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: DistanceScale.spacing_10,
    alignItems: 'center',
    height: ScaleSize.scaleSizeHeight(370),
    width: ScaleSize.scaleSizeWidth(280),
  },
  title: {
    marginTop: DistanceScale.spacing_5,

    color: Colors.black,
    fontSize: Typography.fontSize20,
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: DistanceScale.spacing_30,

    padding: DistanceScale.spacing_16,
  },
  input: {
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 10,

    height: ScaleSize.scaleSizeHeight(30),
    paddingHorizontal: DistanceScale.spacing_10,
    marginTop: DistanceScale.spacing_5,

    color: Colors.black,
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
  btnCancel: {
    alignItems: 'flex-end',
    marginTop: DistanceScale.spacing_30,
  },
  txtCancel: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: Typography.fontSize16,
    borderRadius: 10,
    backgroundColor: Colors.orange,
    width: ScaleSize.scaleSizeWidth(60),
  },
  txtErrror: {
    color: Colors.red,
    marginLeft: DistanceScale.superSmall,
  },
});
