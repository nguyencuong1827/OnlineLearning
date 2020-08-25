import React, {useRef, useContext} from 'react';
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
import {Distance, ScaleSize, Colors, Typography} from '../../globals/styles';
import FormInput from '../../components/Authentication/FormInput';
import {useState} from 'react';
import ButtonSubmit from '../../components/Authentication/ButtonSubmit';
import userApi from '../../api/user-api';
import {LanguageContext} from '../../providers/language-provider';

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
  const {language} = useContext(LanguageContext);

  const {showRegisterModal, setShowRegisterModal} = props;

  const handleEditUsername = (text) => {
    setUsername(text);
    if (text === '') {
      setErrorUsername(
        `${
          language === 'eng'
            ? 'Please enter your full name!'
            : 'Vui lòng nhập họ tên!'
        }`,
      );
    } else if (text.length <= 1) {
      setErrorUsername(
        `${
          language === 'eng'
            ? 'Full name is at least two characters!'
            : 'Họ tên phải ít nhất 2 ký tự'
        }`,
      );
    } else {
      setErrorUsername('');
    }
  };

  const handleEditEmail = (text) => {
    setEmail(text);
    if (text === '') {
      setErrorEmail(
        `${
          language === 'eng'
            ? 'Please enter your email!'
            : 'Vui lòng nhập email!'
        }`,
      );
    } else if (validateEmail(text) === false) {
      setErrorEmail(
        `${language === 'eng' ? 'Invalid email!' : 'Email không hợp lệ!'}`,
      );
    } else {
      setErrorEmail('');
    }
  };

  const handleEditPassword = (text) => {
    setPassword(text);
    if (text === '') {
      setErrorPassword(
        `${
          language === 'eng'
            ? 'Please enter your password!'
            : 'Vui lòng nhập mật khẩu!'
        }`,
      );
    } else if (text.length < 8) {
      setErrorPassword(
        `${
          language === 'eng'
            ? 'Password is at least 8 characters!'
            : 'Mật khẩu phải ít nhất 8 ký tự!'
        }`,
      );
    } else {
      setErrorPassword('');
    }
  };

  const handleEditConfirmPassword = (text) => {
    setConfirmPassword(text);
    if (text === '') {
      setErrorConfirmPassword(
        `${
          language === 'eng'
            ? 'Please enter your confirm password!'
            : 'Vui lòng nhập xác nhận mật khẩu!'
        }`,
      );
    } else if (text !== password) {
      setErrorConfirmPassword(
        `${
          language === 'eng'
            ? 'Confirm password is not correct!'
            : 'Xác nhận mật khẩu không đúng!'
        }`,
      );
    } else {
      setErrorConfirmPassword('');
    }
  };

  const handleEditPhone = (text) => {
    setPhone(text);
    if (text === '') {
      setErrorPhone(
        `${
          language === 'eng'
            ? 'Please enter your number phone!'
            : 'Vui lòng nhập số điện thoại'
        }`,
      );
    } else if (text.length < 10 || validateNumber(text) === false) {
      setErrorPhone(
        `${
          language === 'eng'
            ? 'Invalid number phone!'
            : 'Số điện thoại không hợp lệ!'
        }`,
      );
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
      setErrorUsername(
        `${
          language === 'eng'
            ? 'Please enter your full name!'
            : 'Vui lòng nhập họ tên!'
        }`,
      );
    }
    if (email === '') {
      setErrorEmail(
        `${
          language === 'eng'
            ? 'Please enter your email!'
            : 'Vui lòng nhập email!'
        }`,
      );
    }
    if (password === '') {
      setErrorPassword(
        `${
          language === 'eng'
            ? 'Please enter your password!'
            : 'Vui lòng nhập mật khẩu!'
        }`,
      );
    }
    if (confirmPassword === '') {
      setErrorConfirmPassword(
        `${
          language === 'eng'
            ? 'Please enter your confirm password!'
            : 'Vui lòng nhập xác nhận mật khẩu!'
        }`,
      );
    }
    if (phone === '') {
      setErrorPhone(
        `${
          language === 'eng'
            ? 'Please enter your phone!'
            : 'Vui lòng nhập số điện thoại!'
        }`,
      );
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
          `${language === 'eng' ? 'Notification' : 'Thông báo'}`,
          `${
            language === 'eng'
              ? 'Account created successfully, please visit your gmail to activate your account'
              : 'Tạo tài khoản thành công, vui lòng vào email của bạn để kích hoạt tài khoản'
          }`,
        );
      }
      if (status === 400) {
        let message = '';
        if (data.message === 'Số điện thoại đã tồn tại') {
          message =
            language === 'eng' ? 'Phone number already exists' : data.message;
        }
        if (data.message === 'Email đã tồn tại') {
          message = language === 'eng' ? 'Email already exists' : data.message;
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
                <Text style={styles.title}>
                  {language === 'eng' ? 'CREATE ACCOUNT' : 'TẠO TÀI KHOẢN'}
                </Text>
                <View style={styles.infoContainer}>
                  <FormInput
                    styleInput={styles.input}
                    placeholder={language === 'eng' ? 'Full name' : 'Họ tên'}
                    placeholderTextColor="gray"
                    returnKeyType="next"
                    defaultValue={username}
                    onChangeText={(text) => handleEditUsername(text)}
                    onSubmitEditing={() => txtPhone.current.focus()}
                  />
                  <Text style={styles.txtErrror}>{errorUsername}</Text>
                  <FormInput
                    styleInput={styles.input}
                    placeholder={language === 'eng' ? 'Phone' : 'Số điện thoại'}
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
                    placeholder={language === 'eng' ? 'Password' : 'Mật khẩu'}
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
                    placeholder={
                      language === 'eng'
                        ? 'Confirm password'
                        : 'Xác nhận mật khẩu'
                    }
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
                    title={language === 'eng' ? 'REGISTER' : 'ĐĂNG KÝ'}
                    onSubmit={handleSubmit}
                  />
                  <TouchableOpacity
                    style={styles.btnCancel}
                    onPress={() => setShowRegisterModal(false)}>
                    <Text style={styles.txtCancel}>
                      {language === 'eng' ? 'Cancel' : 'Thoát'}
                    </Text>
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
    marginBottom: Distance.spacing_10,
  },
  modalView: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: Distance.spacing_10,
    alignItems: 'center',
    height: ScaleSize.scaleSizeHeight(370),
    width: ScaleSize.scaleSizeWidth(280),
  },
  title: {
    marginTop: Distance.spacing_5,

    color: Colors.black,
    fontSize: Typography.fontSize20,
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: Distance.spacing_30,

    padding: Distance.spacing_16,
  },
  input: {
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 10,

    height: ScaleSize.scaleSizeHeight(30),
    paddingHorizontal: Distance.spacing_10,
    marginTop: Distance.spacing_5,

    color: Colors.black,
    fontSize: Typography.fontSize16,
  },
  buttonContainer: {
    backgroundColor: Colors.orange,
    paddingVertical: Distance.spacing_12,
    borderRadius: 10,

    marginTop: Distance.spacing_12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    color: Colors.black,
  },
  btnCancel: {
    alignItems: 'flex-end',
    marginTop: Distance.spacing_30,
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
    marginLeft: Distance.superSmall,
  },
});
